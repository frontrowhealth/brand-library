document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  var modal = document.getElementById("frontrow-modal");

  // Get the button that opens the modal
  var openModalButton = document.getElementById("frontrow-learn-more-modal");

  // Get the <span> element that closes the modal
  var closeButton = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  openModalButton.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
