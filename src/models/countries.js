const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function (url){
  this.url = url;
  this.countries = [];
};



Countries.prototype.getData = function(){
  const request = new RequestHelper(this.url);
  request.get(data => this.handleData(data));
};

Countries.prototype.handleData = function(data){
  this.countries = data;
  PubSub.publish('Country:country-data', this.countries);
  PubSub.subscribe('SelectView:change', (event) =>{
    const selectedCountry = event.detail;
    this.publishSelectedCountry(selectedCountry);
  });
};

Countries.prototype.publishSelectedCountry = function(index){
  const selectedCountry = this.countries[index];
  PubSub.publish('Countries:Selected-Country', selectedCountry);
};

module.exports = Countries;
