window.onload = (event) => {
  let fensterladenColorInput = document.querySelector(
    "#fensterladen-color-input"
  );
  fensterladenColorInput.addEventListener(
    "input",
    function (event) {
      watchColorInput(event, "#fensterladen-mask");
      watchColorInput(event, "#fensterladen-mask-hof");
    },
    false
  );

  let fensterColorInput = document.querySelector("#fenster-color-input");
  fensterColorInput.addEventListener(
    "input",
    function (event) {
      watchColorInput(event, "#fenster-mask");
      watchColorInput(event, "#fenster-mask-hof");
    },
    false
  );

  let tuerColorInput = document.querySelector("#tuer-color-input");
  tuerColorInput.addEventListener(
    "input",
    function (event) {
      watchColorInput(event, "#tuer-mask");
    },
    false
  );

  let toreColorInput = document.querySelector("#tore-color-input");
  toreColorInput.addEventListener(
    "input",
    function (event) {
      watchColorInput(event, "#tore-mask");
    },
    false
  );

  function watchColorInput(event, mask) {
    document.querySelector(mask).style.color = event.target.value;
  }

  downloadButton.addEventListener("click", function () {
    html2canvas(document.querySelector("main")).then(function (canvas) {
      return Canvas2Image.saveAsPNG(canvas);
    });
  });
};
