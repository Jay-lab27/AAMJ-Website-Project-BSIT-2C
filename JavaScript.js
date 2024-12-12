
//Reload for Home Contact animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  

    const playAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); 
        } else {
          entry.target.classList.remove('animate'); 
        }
      });
    };
  
    //Intersection Observer
    const observer = new IntersectionObserver(playAnimation, {
      threshold: 0.5, // 
    });
  
    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  



