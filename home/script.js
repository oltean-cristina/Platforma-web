AOS.init({
  delay: 200, // valori de la 0 la 3000, 
  duration: 1500, // valori de la 0 la 3000, 
  once: false, // animatia se intampla o singura data, cand dai scroll in jos
  mirror: false, // animatiile se misca atunci cand treci pe langa ele
});

function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("block");
}
