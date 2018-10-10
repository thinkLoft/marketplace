$(document).ready(function() {
  function getPosts() {
    $.ajax({
      method: "GET",
      url: "/api/posts/category/:category"
    }).then(function(data) {
      console.log(
        "Successfully displayed exsisting posts according to category"
      );
      data.forEach(function(ad) {
        postID = ad.id;
        posttitle = ad.title;
        category = ad.category;
        postdescription = ad.description;
        postprice = ad.price;
        user = ad.userID;
        sold = ad.sold;
        postimageURL = ad.image;

        html =
          '<div class="row"><div class="col-sm-4 indexImage"><img src="' +
          postimageURL +
          '" alt="cottage" width="200" height="200"></div><div class="col-sm-8"><div class="row"><div class="col title">' +
          posttitle +
          '</div></div><div class="row"><div class="col description">' +
          postdescription.slice(0, 250) +
          '</div></div><br><div class="row"><div class="col category">' +
          category +
          '</div></div><div class="row"><div class="col readMore"><a href="/api/posts/category/:category' +
          postID +
          '">Read More</a></div></div><br><div class="row"><div class="col price">' +
          postprice +
          "</div></div></div></div>";

        $("#categoryPage").append(html);
      });
    });
  }

  getPosts();
});
