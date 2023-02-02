const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const chart = entry.target.querySelector('.band1');
  
      if (entry.isIntersecting) {
        chart.classList.add('bands');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      chart.classList.remove('bands');
    });
  });
  
  observer3.observe(document.querySelector('.bands'));