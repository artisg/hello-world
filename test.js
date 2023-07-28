function generate() {
  let arr = [
    "je suis",
    "tu es",
    "il est",
    "nous sommes",
    "vous etes",
    "ils sont",
  ];

  const rando = Math.floor(Math.random() * arr.length);
  const mot = arr[rando];

  return mot;
}

const g = generate();

console.log(g);
