const circles = document.querySelectorAll(".circle");
var imagenGrande = document.getElementById("image");

let activeLight = 0;

setInterval(() => {
  changeLight(),cambiarImagen(image) ;
}, 3000);

function changeLight() {
  circles[activeLight].className = "circle";
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }

  const currentLight = circles[activeLight];

  currentLight.classList.add(currentLight.getAttribute("color"));

}
