// Efek Scroll Navbar //
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("main-navbar");
     if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
     } else {
        navbar.classList.remove("scrolled");
     }
});

AOS.init({
    duration: 800,    
    delay: 100,      
     once: true,     
     offset: 100       
});

// Smooth scroll untuk tombol sports cars
    document.querySelectorAll('.sports-cars-btn').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
       });
      }
   });
});
  