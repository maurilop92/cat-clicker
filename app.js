var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Kitty');
  this.nickname = ko.observable('Baby');
  this.imgSrc = ko.observable('img/cat1.jpg');
  this.imgAttribution = ko.observable('none');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);

    if(this.clickCount() > 10) {
      return this.nickname('Adult');
    }else if(this.clickCount() > 5) {
      return this.nickname('Young');
    }else{
      return this.nickname('Baby');
    }
  };
};

ko.applyBindings(new ViewModel());
