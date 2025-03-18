let btn = document.getElementById("scrollTopBtn");
window.onscroll = () => (btn.style.display = window.scrollY > 200 ? "flex" : "none");
btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });



window.addEventListener("load", () => {
    AOS.init({
      duration: 700,  // Smooth animations (reduce duration for better UX)
      once: false,      // Ensures animations run only once per page load
      easing: 'ease-out', // Natural easing effect
      anchorPlacement: 'top-bottom', // Triggers animation when element enters viewport
    });
  });