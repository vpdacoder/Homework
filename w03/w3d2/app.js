function convertCurrency(event) {

  endpoint = 'latest'
  access_key = 'c11bbf2f871c49d1925e78b9a1262ff9';

  // get the most recent exchange rates via the "latest" endpoint:
  $.ajax({
    url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,
    dataType: 'jsonp',
    success: function(json) {

      //retreiving the input value
      let amt = $('#amt').val();

      if (event.target.id === 'us') {
        console.log(amt * (json.rates.USD));
      } else if (event.target.id === 'gbp') {
        console.log(amt * (json.rates.GBP));
      } else if (event.target.id === 'cny') {
        console.log(amt * (json.rates.CNY));
      } else if (event.target.id === 'jpy') {
        console.log(amt * (json.rates.JPY));
      }
      // exchange rata data is stored in json.rates.country code
    }
  });
}

document.body.addEventListener('click', convertCurrency);
