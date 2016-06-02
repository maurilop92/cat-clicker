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
    init: function() {
      for(var i = 0; i < this.cats.length; i++) {
       $('#catList').append('<li>' + this.cat[i].name + '</li>');
      }
    }
  };

  var octopus = {
    getCats: function() {
      return model.getAllCats();
    },
    init: function() {
      model.init();
      view.init();
    }
  };

  var viewList = {

  };

  var viewCatSection = {

  };

}());
