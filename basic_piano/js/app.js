const listItems = document.querySelectorAll("li");

listItems.forEach((item) => {
  item.addEventListener("mousedown", () => {
    const frequency = item.getAttribute("data-frequency");
    jsNota(frequency);
  });
});

const context = new AudioContext();

function jsNota(frecuencia) {
  var o = context.createOscillator();
  g = context.createGain();
  o.connect(g);
  o.type = "sawtooth";
  o.frequency.value = frecuencia;
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1.5);
}
