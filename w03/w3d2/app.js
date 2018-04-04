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

      // exchange rata data is stored in json.rates.country code

      if (event.target.id === 'us') {
        let dolla = amt * (json.rates.USD);
        $("#output_amount").append("<p></p>").text(dolla);
        $("#output_currency").append("<p></p>").text('USD');
      } else if (event.target.id === 'gbp') {
        let dolla = amt * (json.rates.GBP);
        $("#output_amount").append("<p></p>").text(dolla);
        $("#output_currency").append("<p></p>").text('GBP');
      } else if (event.target.id === 'cny') {
        let dolla = amt * (json.rates.CNY);
        $("#output_amount").append("<p></p>").text(dolla);
        $("#output_currency").append("<p></p>").text('CNY');
      } else if (event.target.id === 'jpy') {
        let dolla = amt * (json.rates.JPY);
        $("#output_amount").append("<p></p>").text(dolla);
        $("#output_currency").append("<p></p>").text('JPY');
      }
    }
  });
}

document.body.addEventListener('click', convertCurrency);
