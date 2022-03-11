import confetti from "canvas-confetti";
import { useEffect } from "react";

var defaults = {
  origin: { y: 0.7 },
};
var count = 200;

const Confetti = ({}) => {
  useEffect(() => {
    var canvas = document.createElement("canvas");
    canvas.className =
      "absolute top-0 left-0 w-full h-full z-50 pointer-events-none";
    document.body.appendChild(canvas);

    const myConfetti = confetti.create(canvas, { resize: true });

    function fire(particleRatio, opts) {
      myConfetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);
  return null;
};
export default Confetti;
