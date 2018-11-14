const PubSub = require('../helpers/pub_sub.js');


const CountryView = function(container){
  this.container = container;
};



CountryView.prototype.bindEvents = function(){
PubSub.subscribe('Countries:Selected-Country', (event) =>{
  const countryForDisplay = event.detail;
  this.render(countryForDisplay);
});
};

CountryView.prototype.render = function(country){
  this.container.innerHTML = '';
  const name = this.createElement('h2', country.name);
  this.container.appendChild(name);

  const region = this.createElement('p', country.region);
  this.container.appendChild(region);

  const image = this.createElement('img');
  image.src = country.flag;
  this.container.appendChild(image);
};


CountryView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};






module.exports = CountryView;
