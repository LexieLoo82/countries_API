const PubSub = require('./helpers/pub_sub.js');
const SelectView = require('./views/select_view.js');
const CountryView = require('./views/country_view.js');
const Countries = require('./models/countries.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();
  ;

  const countries = new Countries('https://restcountries.eu/rest/v2/all');
  countries.getData();
  console.log(countries);

  const countryContainer = document.querySelector('#country');
  const newCountryView = new CountryView(countryContainer);
  newCountryView.bindEvents();


});
