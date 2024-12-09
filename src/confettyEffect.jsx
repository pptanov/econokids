import JSConfetti from 'js-confetti';


export default function addConfetti(){
  const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti({
    emojiSize: 75,
    confettiNumber: 15,
    emojis: ['🪙'],
  });   
}
