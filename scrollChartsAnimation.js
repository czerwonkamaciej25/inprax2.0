
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const chart = entry.target.querySelector('.chart');
  


      if (entry.isIntersecting) {
        chart.classList.add('service-images');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      chart.classList.remove('service-images');
    });
  });
  
  observer2.observe(document.querySelector('.service-images'));