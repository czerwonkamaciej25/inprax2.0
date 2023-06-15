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
          startCounter(entry.target, 1000);
          break;
        case "counter2":
          startCounter(entry.target, 1900);
          break;
        case "counter3":
          startCounter(entry.target, 2500);
          break;
      }
      observer9.unobserve(entry.target);
    }
  });
}, options);

// start observing the counter elements
observer9.observe(counter1);
observer9.observe(counter2);
observer9.observe(counter3);

function startCounter(counter, maxValue) {
  const duration = 9000; // Adjust this value for desired duration
  const startTime = Date.now();
  const startValue = 0;

  const easeOutCubic = t => {
    t /= duration;
    t--;
    return maxValue * (t * t * t + 1);
  };

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const progress = easeOutCubic(elapsedTime);
      counter.innerText = Math.floor(progress);
    } else {
      clearInterval(intervalId);
      counter.innerText = Math.floor(maxValue);
    }
  }, 16); // Approximate 60 frames per second
}
