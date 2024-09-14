document.querySelector(".dropbtn").addEventListener("click", function () {
  const dropdown = document.getElementById("dropdownContent");
  const arrow = document.getElementById("arrow");

  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    arrow.innerHTML = "&#9660;"; // Down arrow
  } else {
    dropdown.style.display = "block";
    arrow.innerHTML = "&#9650;"; // Up arrow
  }
});
