
  const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const aaaa = entry.target.querySelector('.value');
  


      if (entry.isIntersecting) {
        aaaa.classList.add('instalatorzy');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      aaaa.classList.remove('instalatorzy');
    });
  });
  
  observer6.observe(document.querySelector('.instalatorzy'));

const counters = document.querySelectorAll(".value");
const speed = 150;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("numb");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };

  animate();
});


