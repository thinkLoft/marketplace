  (function($) {
    // On document load run the following function
    $(document).ready(function() {
      // Etsy API
      api_key = 'yz0w696n0aejuw02sun10wi0';
      // Search term for Queries
      terms = 'stickers';
      etsyURL =
        'https://openapi.etsy.com/v2/listings/active.js?keywords=' +
        terms +
        '&limit=12&includes=Images:1&api_key=' +
        api_key;
  
      $.ajax({
        url: etsyURL,
        dataType: 'jsonp',
        success: function(data) {
          if (data.ok) {
            $.each(data.results, function(i, item) {
              // get Title
              title = item.title;
              // get Image
              imageURL = item.Images[0].url_fullxfull;
              // get Description
              description = item.description;
              // get Price
              price = item.price;
              // Push resulting Arrary into Global Array
            //   db.ref('/ads/').push({
            //     imageURL: imageURL,
            //     description: description,
            //     price: price,
            //     userID: userID,
            //     title: title,
            //     dateAdded: firebase.database.ServerValue.TIMESTAMP
            //   });
            console.log("hello from etsy" + price)
            });
          } else {
            alert(data.error);
          }
        }
      });
      return false;
    });
  })(jQuery);
  