const morse = {
  A: "•-",
  B: "-•••",
  C: "-•-•",
  D: "-••",
  E: "•",
  F: "••-•",
  G: "--•",
  H: "••••",
  I: "••",
  J: "•---",
  K: "-•-",
  L: "•-••",
  M: "--",
  N: "-•",
  O: "---",
  P: "•--•",
  Q: "--•-",
  R: "•-•",
  S: "•••",
  T: "-",
  U: "••-",
  V: "•••-",
  W: "•--",
  X: "-••-",
  Y: "-•--",
  Z: "--••",
  " ": "•••••••",
};

const shortNode = document.querySelector(`#short`);
const longNode = document.querySelector(`#long`);
const enterNode = document.querySelector(`#enter`);
const backspaceNode = document.querySelector(`#backspace`);
const clearNode = document.querySelector(`#clear`);

let content = document.querySelector(`#main-content`);

shortNode.addEventListener(`click`, function () {
  content.innerHTML += `•`;
});
longNode.addEventListener(`click`, function () {
  content.innerHTML += `-`;
});
enterNode.addEventListener(`click`, function () {
  if (!content.innerHTML.endsWith(` `)) {
    content.innerHTML += ` `;
  }
});
backspaceNode.addEventListener(`click`, function () {
  if (content.innerHTML.endsWith(` `)) {
    content.innerHTML = content.innerHTML.slice(
      0,
      content.innerHTML.length - 2
    );
  } else {
    content.innerHTML = content.innerHTML.slice(
      0,
      content.innerHTML.length - 1
    );
  }
});
clearNode.addEventListener(`click`, function () {
  content.innerHTML = ``;
});

setInterval(checkChanges);

function checkChanges() {
  for (const letter in morse) {
    const result = content.innerHTML.replace(`${morse[letter]} `, letter);
    if (content.innerHTML.includes(`${morse[letter]} `)) {
      if (!(result.includes(`-`) || result.includes(`•`))) {
        content.innerHTML = content.innerHTML.replace(
          `${morse[letter]} `,
          letter
        );
      }
    }
  }
}
