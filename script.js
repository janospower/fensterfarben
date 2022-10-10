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

  const hausRadio = document.querySelector("#haus-radio");
  const hofRadio = document.querySelector("#hof-radio");
  const imageContainerHof = document.querySelector("#image-container-hof");
  const imageContainerHaus = document.querySelector("#image-container-haus");

  let checkRadios = function () {
    if (hausRadio.checked) {
      imageContainerHof.classList.add("hidden");
      imageContainerHaus.classList.remove("hidden");
      tuerColorInput.parentElement.classList.add("hidden");
      toreColorInput.parentElement.classList.add("hidden");
    } else if (hofRadio.checked) {
      imageContainerHof.classList.remove("hidden");
      imageContainerHaus.classList.add("hidden");
      tuerColorInput.parentElement.classList.remove("hidden");
      toreColorInput.parentElement.classList.remove("hidden");
    }
  };
  hausRadio.addEventListener("click", checkRadios);
  hofRadio.addEventListener("click", checkRadios);
};
