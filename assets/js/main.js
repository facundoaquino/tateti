const $cells = document.querySelectorAll(".cell"),
 $banner = document.querySelector(".containerwinner"),
 $bannerwin = document.querySelector("#winner"),
 $reset = document.querySelector(".reset");
 console.log('cambios con git?');

let x = "X";
let o = "O";
let empate = 'empate'
let actual = x;
let clickTotal = 0; //defino cantidad de click a usar despues para definir si hay empate , no se pueden hacer mas de 9clicks
const winnigChances = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6],
];

const showWinner = (winner) => {
 $banner.classList.remove("hidden");
 $bannerwin.insertAdjacentText("afterbegin", `  ${winner} win´s`);
 $bannerwin.classList.add('animationshow')
};

const check = (arr) => {
 arr.forEach((element) => {
  let winning = "";
  element.forEach((el) => {
   winning += $cells[el].textContent;
  });
  if (winning == "XXX") {
   console.log("gano x!");
   clickTotal--;
   showWinner(x);
  } else if (winning == "OOO") {
   console.log("gano O!");
   clickTotal--;
   showWinner(o);
  }

  //   console.log(typeof winning);
  //   console.log("---");
 });
};
$cells.forEach((element) => {
 element.addEventListener("click", cellsCLick, { once: true });
});

function cellsCLick(e) {
 if (actual == x) {
  e.target.textContent = x;
  actual = o;
 } else {
  e.target.textContent = o;
  actual = x;
 }
 check(winnigChances);
 clickTotal++;
 if (clickTotal == 9) {
    $banner.classList.remove("hidden");
    $bannerwin.insertAdjacentText("afterbegin", `empate`);
 }
}

$reset.addEventListener("click", () => {
 location.reload();
});
