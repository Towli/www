$(document).ready(function () {
  var profileContainer = $(".profile");
  var portfolioContainer = $(".portfolio");
  var contactContainer = $(".contact");
  var portfolioLink = $("#portfolio-link");
  var contactLink = $("#contact-link");
  var backLink = $(".back-link");
  var workThumbnail = $(".work-thumbnail-container");

  portfolioLink.click(function () {
    profileContainer.removeClass("visible").addClass("hidden");
    contactContainer.removeClass("visible").addClass("hidden");
    portfolioContainer.removeClass("hidden").addClass("visible");
  });

  contactLink.click(function () {
    profileContainer.removeClass("visible").addClass("hidden");
    portfolioContainer.removeClass("visible").addClass("hidden");
    contactContainer.removeClass("hidden").addClass("visible");
  });

  backLink.click(function () {
    portfolioContainer.removeClass("visible").addClass("hidden");
    contactContainer.removeClass("visible").addClass("hidden");
    profileContainer.removeClass("hidden").addClass("visible");
  });

  workThumbnail.hover(
    function () {
      console.log("hover");
      $(this).children().eq(1).removeClass("hidden");
    },
    function () {
      $(this).children().eq(1).addClass("hidden");
    }
  );
});
