var catData = [
       {
         name: 'Cat 1',
         imgSrc: 'img/cat1.jpg',
         clickCount: 0,
         friends: ['Peter', 'Gary', 'Nick', 'Sam']
       },
       {
         name: 'Cat 2',
         imgSrc: 'img/cat2.jpg',
         clickCount: 0,
         friends: ['Peter', 'Gary', 'Nick', 'Sam']
       },
       {
         name: 'Cat 3',
         imgSrc: 'img/cat3.jpg',
         clickCount: 0,
         friends: ['Peter', 'Gary', 'Nick', 'Sam']
       },
       {
         name: 'Cat 4',
         imgSrc: 'img/cat4.jpg',
         clickCount: 0,
         friends: ['Peter', 'Gary', 'Nick', 'Sam']
       },
       {
         name: 'Cat 5',
         imgSrc: 'img/cat5.jpg',
         clickCount: 0,
         friends: ['Peter', 'Gary', 'Nick', 'Sam']
       }
     ]




var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.friends = ko.observableArray(data.friends);

  this.nickname = ko.computed(function() {
    var nickname;
    var clicks = this.clickCount();
    if (clicks < 10) {
      nickname = 'Baby';
    } else if (clicks < 50) {
      nickname = 'Young';
    } else {
      nickname = 'Adult';
    }
    return nickname;
  }, this);
};




var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  catData.forEach(function(catItem) {
    this.catList.push( new Cat(catItem) );
  }, this);

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.setCurrentCat = function(clickedCat) {
    self.currentCat(clickedCat); 
  };
};

ko.applyBindings(new ViewModel());
