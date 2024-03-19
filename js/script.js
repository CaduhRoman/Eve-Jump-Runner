const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const death = document.querySelector("death-scene");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./imagens/game-over.gif";
    mario.style.width = "130px";
    mario.style.marginLeft = "45px";

    clouds.style.animation = "none";
    clouds.style = `${pipePosition}px`;
    clearInterval(loop);

    death.src = "./imagens/end.png";
  }
}, 10);

document.addEventListener("keydown", jump);
