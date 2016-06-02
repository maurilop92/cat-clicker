(function() {

  // ----------------------- MODEL -----------------------
  var model = {
    currentCat: null,
    cats: [
      {
        name: 'Cat 1',
        img: 'img/cat1.jpg',
        clicks: 0
      },
      {
        name: 'Cat 2',
        img: 'img/cat2.jpg',
        clicks: 0
      },
      {
        name: 'Cat 3',
        img: 'img/cat3.jpg',
        clicks: 0
      },
      {
        name: 'Cat 4',
        img: 'img/cat4.jpg',
        clicks: 0
      },
      {
        name: 'Cat 5',
        img: 'img/cat5.jpg',
        clicks: 0
      }
    ],
    adminVisible: false
  };


  // ----------------------- OCTOPUS -----------------------
  var octopus = {
    init: function() {
      // Set our current cat to the first one on the list
      model.currentCat = model.cats[0];

      // Initialize views
      viewList.init();
      viewCatSection.init();
      viewAdmin.init();
    },
    getCurrentCat: function() {
      return model.currentCat;
    },
    getCats: function() {
      return model.cats;
    },
    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },
    incrementCounter: function() {
      model.currentCat.clicks++;
      viewCatSection.render();
    },
    toggleAdmin: function() {
      model.adminVisible = !model.adminVisible;
      viewAdmin.render();
    },
    updateCat: function(name, img, clicks) {
      model.currentCat.name = name;
      model.currentCat.img = img;
      model.currentCat.clicks = clicks;

      viewList.render();
      viewCatSection.render();
      this.toggleAdmin();
    }
  };


  // ----------------------- VIEWS -----------------------
  var viewCatSection = {
    init: function() {
      // Store pointers to DOM elements
      this.catSection = document.getElementById('catSection');
      this.catName = document.getElementById('catName');
      this.catImg = document.getElementById('catImg');
      this.catClicks = document.getElementById('catClicks');

      // On click, increment the current cat's counter
      this.catImg.addEventListener('click', function() {
        octopus.incrementCounter();
      });

      // Render this view
      this.render();
    },
    render: function(){
      // Update DOM elements with values from the current cat
      var currentCat = octopus.getCurrentCat();
      this.catClicks.textContent = currentCat.clicks;
      this.catName.textContent = currentCat.name;
      this.catImg.src = currentCat.img;
    }
  };

  var viewList = {
    init: function() {
      // Store DOM element for easy access later
      this.catList = document.getElementById('catList');

      // Render this view
      this.render();
    },
    render: function(){
      // Get the cats we'll be rendering from the octopus
      var cats = octopus.getCats();

      // Empty the cat list
      this.catList.innerHTML = '';

      // Loop over the cats
      for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];

        // Make a new cat list item and set its text
        var elem = document.createElement('li');
        elem.textContent = cat.name;

        // On click, setCurrentCat and render the viewCatSection
        // (this uses the closure-in-a-loop trick)
        elem.addEventListener('click', (function(catCopy) {
          return function() {
            octopus.setCurrentCat(catCopy);
            viewCatSection.render();
          };
        })(cat));

        // Add elem to the list
        this.catList.appendChild(elem);
      }
    }
  };

  var viewAdmin = {
    init: function() {
      // Store DOM element for easy access later
      this.adminSectionVisibility = document.getElementById('adminSection');
      this.adminButton = document.getElementById('adminButton');
      this.submitButton = document.getElementById('submitButton');

      var catNameInput = document.getElementById('catNameInput').value;
      var catImgInput = document.getElementById('catImgInput').value;
      var catClicksInput = document.getElementById('catClicksInput').value;

      // On click, toggle adminSection visibility
      this.adminButton.addEventListener('click', function() {
        octopus.toggleAdmin();
      });

      this.submitButton.addEventListener('click', function() {
        octopus.updateCat(catNameInput, catImgInput, catClicksInput);
      });

      // Render this view
      this.render();
    },
    render: function(){
      if (model.adminVisible === true) {
        this.adminSectionVisibility.style.visibility = 'visible';
      }else{
        this.adminSectionVisibility.style.visibility = 'hidden';
      }
    }
  };

  octopus.init();

}());



// click Update
// set currentCat properties to values in form
// render list and catSection again showing updated values
