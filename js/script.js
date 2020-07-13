var openBtnPopup = document.querySelector(".btn-section-contacts");
var popupWrite = document.querySelector(".popup-write-us");
var popupWriteClose = popupWrite.querySelector(".popup-write-us_close");
var popupForm = popupWrite.querySelector(".popup-form");
var loginPopup = popupWrite.querySelector(".popup-login");
var email = popupWrite.querySelector(".popup-email");
var openMap = document.querySelector(".main-contacts__map");
var popupMap = document.querySelector(".map");
var popupMapClose=document.querySelector(".popup-map-close");

openBtnPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("popup-write-us-show");
  loginPopup.focus();
});

popupWriteClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("popup-write-us-show");
  popupWrite.classList.remove("modal-error");
});

popupForm.addEventListener("submit", function (evt) {
  if (!email.value || !loginPopup.value) {
    evt.preventDefault();
    popupWrite.classList.add("modal-error");
    setTimeout(function () {
      popupWrite.classList.remove("modal-error");
    }, 500)
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupWrite.classList.contains("popup-write-us-show")) {
      evt.preventDefault();
      popupWrite.classList.remove("popup-write-us-show");
      popupWrite.classList.remove("modal-error");
    }
  }
});

openMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-map--active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("popup-map--active")) {
      evt.preventDefault();
      popupWrite.classList.remove("popup-map--active");
    }
  }
});

popupMapClose.addEventListener("click", function(evt) {
  evt.preventDefault(),
  popupMap.classList.remove("popup-map--active");
});
