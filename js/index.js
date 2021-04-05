const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const bodyRef = document.querySelector('body');
  const btnRef = document.querySelectorAll("body button");
  const startRef = btnRef[0];
  const stopRef = btnRef[1];

  let timerId = null; 

  const randomIntegerFromInterval = () => {
    return Math.floor(Math.random() * (colors.length - 1 + 1));
  };

    startRef.addEventListener("click", () => {
      timerId = setInterval(function timeout() {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval()];
        startRef.disabled = true;
      }, 1000);
       });

  stopRef.addEventListener("click", () => {
    clearInterval(timerId);
    startRef.disabled = false;
  });


  

