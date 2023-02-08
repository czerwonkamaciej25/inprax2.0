const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const band1 = entry.target.querySelector('.band1');
  
      if (entry.isIntersecting) {
        band1.classList.add('bands1');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      band1.classList.remove('bands1');
    });
  });
  
  observer3.observe(document.querySelector('.bands1'));

  const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const band2 = entry.target.querySelector('.band2');
  
      if (entry.isIntersecting) {
        band2.classList.add('bands2');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      band2.classList.remove('bands2');
    });
  });
  
  observer4.observe(document.querySelector('.bands2'));


  const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const band3 = entry.target.querySelector('.band3');
  


      if (entry.isIntersecting) {
        band3.classList.add('bands3');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      band3.classList.remove('bands3');
    });
  });
  
  observer5.observe(document.querySelector('.bands3'));


  const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const band1mobile = entry.target.querySelector('.band1mobile');
  


      if (entry.isIntersecting) {
        band1mobile.classList.add('bands1mobile');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      band1mobile.classList.remove('bands1mobile');
    });
  });
  
  observer6.observe(document.querySelector('.bands1mobile'));