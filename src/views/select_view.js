const PubSub = require('../helpers/pub_sub.js');


const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function (){
  PubSub.subscribe('Country:country-data', (event) =>{
    const countries = event.detail;
    this.populate(countries);
  });
  
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex)
  })
};

SelectView.prototype.populate = function (countriesData){
  countriesData.forEach((country, index) =>{
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
};







module.exports = SelectView;
