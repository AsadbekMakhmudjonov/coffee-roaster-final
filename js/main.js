var elSiteHeaderSection = document.querySelector(".site-header");
var elSiteHeaderToggler = elSiteHeaderSection.querySelector(".js-site-header-toggler");

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener("click", function () {
    elSiteHeaderSection.classList.toggle("site-header--open");
  });
}



var elsOrderSection = document.querySelectorAll(".order-section");
var elsOrderButtonToggler = document.querySelectorAll('.order-section-toggler');

elsOrderButtonToggler.forEach( function (button) {
  button.addEventListener('click', function () {
    button.closest('.order-section').classList.toggle('order-section--active');

  })
})




