window.sr = ScrollReveal();

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
ScrollReveal().reveal(".spa-text", {
    ...scrollRevealOption,
    interval: 300,
  });