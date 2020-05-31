import React from 'react';
import './semaforo.css';

const Semaforo=() =>{
  const circles = document.querySelectorAll(".circle");
  let activeLight = 0;
  
  function changeLight() {
        circles[activeLight].className = "circle";
        activeLight++;
        if (activeLight > 2) {
          activeLight = 0;
        }

        const currentLight = circles[activeLight];

        currentLight.classList.add(currentLight.getAttribute("color"));
        }
  return (
    <div className="App" class="container">

            <div class="circle red" color="red" ></div>
            <div class="circle" color="yellow" ></div>
            <div class="circle" color="green" ></div>
 
    </div>
   
  );
}

export default Semaforo;
