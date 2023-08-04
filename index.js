let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");


menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})

const navicn = document.getElementById('navicn');

navicn.addEventListener('click', function onClick() {
  navicn.style.backgroundColor = 'salmon';
  navicn.style.color = 'white';
});
