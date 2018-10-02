console.log("hello from the nav file")
// =========================
// ======= Navigation ======
// =========================

$.get("/api/navigation", function (data) {
  $('#nav').html("hello2");
}); 


