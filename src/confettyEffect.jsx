// import confetti from 'canvas-confetti';

// export default function addConfetti(){
//   let scalar = 10;
//   let coins = confetti.shapeFromText({text: "🪙", scalar});

//   confetti({
//     shapes: [coins],
//     scalar,
//   });
// }




import JSConfetti from 'js-confetti';


export default function addConfetti(){
  const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti({
    emojiSize: 75,
    confettiNumber: 15,
    emojis: ['🪙'],
  });   
}
