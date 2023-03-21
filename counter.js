  // get the counter elements
  const counter1 = document.getElementById('counter1');
  const counter2 = document.getElementById('counter2');
  const counter3 = document.getElementById('counter3');

  // set up the options for the Intersection Observer
  const options = {
    root: null,
    threshold: 1.0
  };

  // create a new Intersection Observer instance
  const observer9 = new IntersectionObserver((entries, observer9) => {
    // when the elements are fully in view, start the counters
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "counter1":
            startCounter(entry.target, 1500);
            break;
          case "counter2":
            startCounter(entry.target, 1750);
            break;
          case "counter3":
            startCounter(entry.target, 2000);
            break;
        }
      }
    });
  }, options);

  // start observing the counter elements
  observer9.observe(counter1);
  observer9.observe(counter2);
  observer9.observe(counter3);

  function startCounter(counter, maxValue) {
    let count = 0;
    const startInterval = 1;
    const endInterval = 400;
    const increment = maxValue / (endInterval / startInterval);
    
    const intervalId = setInterval(() => {
      if (count < maxValue) {
        count += increment;
        counter.innerText = Math.floor(count);
        if (count > maxValue - endInterval) {
          clearInterval(intervalId);
          setTimeout(() => {
            startCounterSlow(counter, count, maxValue, startInterval);
          }, endInterval);
        }
      } else {
        clearInterval(intervalId);
      }
    }, startInterval);
  }
  
  function startCounterSlow(counter, count, maxValue, interval) {
    const intervalId = setInterval(() => {
      if (count < maxValue) {
        count += interval;
        counter.innerText = Math.floor(count);
      } else {
        clearInterval(intervalId);
      }
    }, interval);
  }