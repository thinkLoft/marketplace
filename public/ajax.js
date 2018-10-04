// display all posts 
$.ajax("/api/posts/", {
    type: "GET",
    data: selectAllProducts 
  }).then(
    function() {
      console.log("Successfully displayed exsisting posts");
      location.reload();
    }
  );

// create new post 
$.ajax("/api/posts/createPost", {
    type: "POST",
    data: insertProductsProducts
  }).then(
    function() {
      console.log("Successfully created post");
      location.reload();
    });

// delete post 
$.ajax("/api/post/" + id, {
    type: "DELETE",
    data: deleteProductProduct
  }).then(
    function() {
      console.log("Successfully deleted post");
      location.reload();
    });

// update post 
$.ajax("/api/post/" + id, {
    type: "PUT",
    data: updateProductsProducts
  }).then(
    function() {
      console.log("User created post updated");
      location.reload();
    });

// filter posts by category
$.ajax("/api/posts/" + category, {
    type: "GET",
    data: selectAllProducts
  }).then(
    function() {
      console.log("Category successfully displayed");
      location.reload();
    });

// filter posts by price 
$.ajax("/api/post/" + price, {
    type: "GET",
    data: selectAllProducts
  }).then(
    function() {
      console.log("filter by price successful");
      location.reload();
    });

// filter posts by title 
$.ajax("/api/post/" + title, {
    type: "GET",
    data: selectAllProducts
  }).then(
    function() {
      console.log("filter by title successful");
      location.reload();
    });

// display user information 
$.ajax("/api/user/" + userID, {
    type: "GET",
    data: selectAllUser
  }).then(
    function() {
      console.log("displaying of user information successful");
      location.reload();
    });

// create new user 
$.ajax("/api/user/createUser" + id, {
    type: "POST",
    data: insertUserUser
  }).then(
    function() {
      console.log("user created");
      location.reload();
    });

// update existing user 
$.ajax("/api/user/" + id, {
    type: "PUT",
    data: updateUserUser
  }).then(
    function() {
      console.log("user information udpated");
      location.reload();
    });

// delete existing user 
$.ajax("/api/user/" + id, {
    type: "DELETE",
    data: deleteUserUser
  }).then(
    function() {
      console.log("user deleted");
      location.reload();
    });