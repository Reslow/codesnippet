import "jquery";

$(window).on("load", function () {
  $("#logan").on("click", function () {
    $("#logan").addClass("rotate");
    $("#logan").animate(
      {
        left: "500px",
      },
      5000,
      function () {
        $(this).removeClass("rotate");
      }
    );
  });
});
