const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.producers-image');
  
      if (entry.isIntersecting) {
        square.classList.add('producers-content-company');
        observer.unobserve(entry.target);
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('producers-content-company');
    });
  });
  
  observer.observe(document.querySelector('.producers-content-company'));
  