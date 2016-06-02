(function() {

  var model = {
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
    getAllCats: function() {
      return this.cats;
    }
  };

  var octopus = {
    getCats: function() {
      return model.getAllCats();
    },
    init: function() {
      //model.init();
      viewList.init();
      viewCatSection.init();
    }
  };

  var viewList = {
    init: function() {
      this.catList = $('#catList');
      viewList.render();
    },
    render: function(){
      var htmlStr = '';
      octopus.getCats().forEach(function(cat){
        htmlStr += '<li><button>' + cat.name + '</button></li>';
      });
      this.catList.html( htmlStr );
    }
  };

  var viewCatSection = {
    init: function() {
      this.catSection = $('#catSection');
      viewCatSection.render();
    },
    render: function(){
      var htmlStr = '';
      octopus.getCats().forEach(function(cat){
        htmlStr +=
          '<h2>' + cat.name + '</h2>' +
          '<img src="' + cat.img + '">' +
          '<p>' + cat.clicks + '</p>';
      });
      this.catSection.html( htmlStr );
    }
  };

  octopus.init();

}());
