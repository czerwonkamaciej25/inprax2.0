const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const chart = entry.target.querySelector('.chart');
  
      if (entry.isIntersecting) {
        chart.classList.add('service-content-images');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      chart.classList.remove('service-content-images');
    });
  });
  
  observer.observe(document.querySelector('.service-content-images'));