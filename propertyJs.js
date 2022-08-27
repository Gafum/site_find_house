const showNav = document.querySelector(".open-nav")
const nav = document.querySelector("nav")
const search = document.querySelector("#search-bnt")
const inputSearch = document.querySelector("#search")
const properties = document.querySelector(".properties-items")

const propertiesArray = [
  [
    "Cozy studio in Los Angeles",
    "$ 1,200.00 USD",
    '<i class="fa-solid fa-location-dot"></i>2263 Southlea, Los Angeles',
    '<i class="fa-solid fa-bath"></i> 2',
    '<img src="./img/bed.svg" alt="bedrooms" /> 2',
    '<i class="fa-solid fa-ruler"></i> 840sqft',
    "./img/s5-item1.jpg",
  ],
  [
    "Tiny home in San Diego",
    "$ 740,000.00 USD",
    '<i class="fa-solid fa-location-dot"></i>2569 El Segundo, San Diego',
    '<i class="fa-solid fa-bath"></i> 1',
    '<img src="./img/bed.svg" alt="bedrooms" /> 2',
    '<i class="fa-solid fa-ruler"></i> 400sqft',
    "./img/s5-item2.jpg",
  ],
  [
    "Family house in Los Angeles",
    "$ 4,200.00 USD",
    '<i class="fa-solid fa-location-dot"></i>2263 Southlea, Los Angeles',
    '<i class="fa-solid fa-bath"></i> 2',
    '<img src="./img/bed.svg" alt="bedrooms" /> 3',
    '<i class="fa-solid fa-ruler"></i> 1400sqft',
    "./img/s5-item3.jpg",
  ],
  [
    "Crown house in New York",
    "$ 980,000.00 USD",
    '<i class="fa-solid fa-location-dot"></i>4489 Smity Fielda, New	York',
    '<i class="fa-solid fa-bath"></i> 2',
    '<img src="./img/bed.svg" alt="bedrooms" /> 4',
    '<i class="fa-solid fa-ruler"></i> 3200sqft',
    "./img/s5-item4.jpg",
  ],
  [
    "Studio in Las Vegas",
    "$ 820,000.00 USD",
    '<i class="fa-solid fa-location-dot"></i>2569 Halls Corner, Las	Vegas',
    '<i class="fa-solid fa-bath"></i> 2',
    '<img src="./img/bed.svg" alt="bedrooms" /> 3',
    '<i class="fa-solid fa-ruler"></i> 2400sqft',
    "./img/s5-item5.jpg",
  ],
  [
    "San Diego story",
    "$ 3,700.00 USD",
    '<i class="fa-solid fa-location-dot"></i>2569 El Segundo, San Diego',
    '<i class="fa-solid fa-bath"></i> 1',
    '<img src="./img/bed.svg" alt="bedrooms" /> 2',
    '<i class="fa-solid fa-ruler"></i> 650sqft',
    "./img/s5-item6.jpg",
  ],
]

const t = document.querySelector("#item")
const tList = [
  t.content.querySelector("h3"),
  t.content.querySelector("p"),
  t.content.querySelector(".where"),
  t.content.querySelector(".bathrooms"),
  t.content.querySelector(".bedrooms"),
  t.content.querySelector(".sqft"),
  t.content.querySelector("img"),
]

createProperty(propertiesArray)

function createProperty(list) {
	properties.innerHTML = ""
	list.forEach((y) => {
		for (let i = 0; i < y.length - 1; i++) {
			tList[i].innerHTML = y[i]
		}
		tList[6].src = y[6]
		let oneItem = t.content.cloneNode(true)
		properties.append(oneItem)
	})
}

showNav.onclick = () => {
  nav.classList.toggle("show")
  showNav.classList.toggle("closeNav")
}

search.onclick = () => {
  let text = inputSearch.value.toLowerCase()
	a = propertiesArray.filter((x) => x[0].toLowerCase().includes(text))
	a.length?createProperty(a):properties.innerHTML = "<h3 style=\"font-size: 22px; margin: auto;\">result not found<h3>"
}
