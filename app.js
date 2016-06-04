var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Kitty');
  this.nickname = ko.observable('Baby');
  this.imgSrc = ko.observable('img/cat1.jpg');
  this.imgAttribution = ko.observable('none');
  this.friends = ko.observableArray([{name: 'Peter'}, {name: 'Gary'}, {name: 'Nick'}, {name: 'Sam'}]);

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
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
