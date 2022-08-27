const arrowMenu = document.querySelector("#menu-arrow")
const showNav = document.querySelector(".open-nav")
const nav = document.querySelector("nav")
const properties = document.querySelector("#property-list")

document.onclick = (event) => {
  if (event.target.closest("#property-list")) {
    if (event.target.classList.contains("arrow")) {
      properties.classList.toggle("show-list")
      console.log(true)
    }
  } else properties.classList.remove("show-list")
}

showNav.onclick = () => {
  nav.classList.toggle("show")
  showNav.classList.toggle("closeNav")
}
