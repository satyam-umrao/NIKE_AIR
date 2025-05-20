function show(){
    const x = document.querySelector(".ham");
    x.style.display = "flex"; 

    const y = document.querySelector("header");
    y.style.position = "static";

    
}

function hide(){
    const x = document.querySelector(".ham");
    x.style.display = "none"; 

     const y = document.querySelector("header");
    y.style.position = "sticky";
}

function hello(){
    const n = document.getElementById("ul");
    n.style.display = "flex";
    n.style.flexDirection = "column";

    const m = document.querySelector(".content-1>div>p");
    m.style.transform = "scale(-1, -1)";

    const o = document.getElementById("nm");
    o.style.display = "none";

    const p = document.getElementById("nn");
    p.style.display = "flex";
}


function hello2(){
    const n = document.getElementById("ul");
    n.style.display = "none";
    n.style.flexDirection = "column";

    const m = document.querySelector(".content-1>div>p");
    m.style.transform = "scale(1, 1)";

    const o = document.getElementById("nm");
    o.style.display = "flex";

    const p = document.getElementById("nn");
    p.style.display = "none ";
}

function hi(){
    const n = document.getElementById("ol");
    n.style.display = "flex";
    n.style.flexDirection = "column";

    const m = document.querySelector(".content-2>div>p");
    m.style.transform = "scale(-1, -1)";

    const o = document.getElementById("op");
    o.style.display = "none";

    const p = document.getElementById("qr");
    p.style.display = "flex";
}

function hi2(){
  const n = document.getElementById("ol");
  n.style.display = "none";
  n.style.flexDirection = "column";
  
  const m = document.querySelector(".content-2>div>p");
    m.style.transform = "scale(1, 1)";

    const o = document.getElementById("op");
    o.style.display = "flex";

    const p = document.getElementById("qr");
    p.style.display = "none ";
  }
  
  function bye(){
      const n = document.getElementById("pl");
      n.style.display = "flex";
      n.style.flexDirection = "column";
  
      const m = document.querySelector(".content-3>div>p");
      m.style.transform = "scale(-1, -1)";
  
      const o = document.getElementById("st");
      o.style.display = "none";
  
      const p = document.getElementById("uv");
      p.style.display = "flex";
  }

  function bye2(){
    const n = document.getElementById("pl");
    n.style.display = "none";
    n.style.flexDirection = "column";

    const m = document.querySelector(".content-3>div>p");
    m.style.transform = "scale(1, 1)";

    const o = document.getElementById("st");
    o.style.display = "flex";

    const p = document.getElementById("uv");
    p.style.display = "none ";
}




// scroll bar
 const scrollContainer1 = document.getElementById("scrollContainer");

    document.getElementById("leftArrowBtn").addEventListener("click", () => {
      scrollContainer1.scrollBy({ left: -400, behavior: 'smooth' });
    });

    document.getElementById("rightArrowBtn").addEventListener("click", () => {
      scrollContainer1.scrollBy({ left: 400, behavior: 'smooth' });
    });

    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowRight") {
        document.getElementById("rightArrowBtn").click();
      } else if (event.key === "ArrowLeft") {
        document.getElementById("leftArrowBtn").click();
      }
    });

// scroll bar end


// scroll bar2
 const scrollContainer2 = document.getElementById("scroll-Container");

    document.getElementById("leftArrow-Btn").addEventListener("click", () => {
      scrollContainer2.scrollBy({ left: -383, behavior: 'smooth' });
    });

    document.getElementById("rightArrow-Btn").addEventListener("click", () => {
      scrollContainer2.scrollBy({ left: 383, behavior: 'smooth' });
    });

    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowRight") {
        document.getElementById("rightArrow-Btn").click();
      } else if (event.key === "ArrowLeft") {
        document.getElementById("leftArrow-Btn").click();
      }
    });

// scroll barend