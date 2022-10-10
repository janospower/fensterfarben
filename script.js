window.onload = (event) => {
  let fensterladenColorInput = document.querySelector(
    "#fensterladen-color-input"
  );

  let fensterColorInput = document.querySelector("#fenster-color-input");

  let downloadButton = document.querySelector("#download-button");

  fensterladenColorInput.addEventListener(
    "input",
    function (event) {
      watchColorInput(event, "#fensterladen-mask");
    },
    false
  );

  fensterColorInput.addEventListener(
    "input",
    function (event) {
      watchColorInput(event, "#fenster-mask");
    },
    false
  );

  function watchColorInput(event, mask) {
    document.querySelector(mask).style.backgroundColor = event.target.value;
  }

  downloadButton.addEventListener("click", function () {
    html2canvas(document.querySelector(".image-container"), {
      onrendered: function (canvas) {
        // document.body.appendChild(canvas);
        return Canvas2Image.saveAsPNG(canvas);
      },
    });
  });
};
