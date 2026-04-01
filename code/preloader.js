// Smart Preloader (min 3s + full load)

(function () {
  let pageLoaded = false;
  let minTimePassed = false;

  document.body.insertAdjacentHTML("afterbegin", `
  <div id="preloader">
    <div class="dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <style>
  #preloader {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .dots {
    display: flex;
    gap: 18px;
  }

  .dots span {
    width: 16px;
    height: 16px;
    background: black;
    animation: bounce 0.6s infinite alternate,
               morph 2.4s infinite ease-in-out;
  }

  .dots span:nth-child(2) {
    animation-delay: 0.2s, 0.8s;
  }

  .dots span:nth-child(3) {
    animation-delay: 0.4s, 1.6s;
  }

  @keyframes bounce {
    from { transform: translateY(0); }
    to { transform: translateY(-12px); }
  }

  @keyframes morph {
    0% { border-radius: 50%; clip-path: circle(50%); }
    33% { border-radius: 0%; clip-path: inset(0%); }
    66% { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
    100% { border-radius: 50%; clip-path: circle(50%); }
  }
  </style>
  `);

  // Condition 1: Minimum time (3 seconds)
  setTimeout(() => {
    minTimePassed = true;
    checkFinish();
  }, 3000);

  // Condition 2: Page fully loaded
  window.addEventListener("load", () => {
    pageLoaded = true;
    checkFinish();
  });

  // Check both conditions
  function checkFinish() {
    if (pageLoaded && minTimePassed) {
      const loader = document.getElementById("preloader");
      loader.style.transition = "opacity 0.6s ease";
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.remove();
      }, 600);
    }
  }

})();