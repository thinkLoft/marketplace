$(document).ready(function() {

    function getPosts() {
        $.ajax({
            method: "GET",
            url: "/api/posts/",
        }).then(function(data) {
            console.log("Successfully displayed exsisting posts");
            data.forEach(function(ad) {
               postID = ad.id;
               posttitle = ad.title;
               category = ad.category;
               postdescription = ad.description;
               postprice = ad.price;
               user = ad.userID;
               sold = ad.sold;
               postimageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZciSJH_AN2H-czNXGJFIqgyxy7uN0KhfMTNbTg7mQW277DhCpw"

               html = 
               '<div class="content"><div class="ui items"><div class="item"><div class="postItemImage ui small image"><img src="' +
               postimageURL +
               '"></div><div class="content" style="padding: 1rem;"><h2 class="header postTitle">' +
               posttitle +
               '</h2><div class="postDescription"><p>' +
               postdescription.slice(0, 250) +
               " . . .   <br> <br><a href='individualAd.html?postid=" +
               postID +
               "'> Read More</a>" +
               '</p></div><br><div class="postPrice"><h3>Price: $<span class="price">' +
               postprice +
               '</span></h3></div></div></div></div></div>';
               
               $('#homepage').append(html);
            });
        });
            
      }

      getPosts();

});
