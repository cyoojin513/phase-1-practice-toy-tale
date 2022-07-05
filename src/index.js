let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  fetchToys()
})

function fetchToys() {
  return fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then((json) => createToyCard(json))
}

function createToyCard(toys) {
  const toyList = document.getElementById("toy-collection")
  toys.forEach(toy => {
    const toyCard = document.createElement("div")
    toyCard.className = "card"
    const h2 = document.createElement('h2')
    h2.innerHTML = toy.name
    const img = document.createElement('img')
    img.src = `${toy.image}`
    img.className = "toy-avatar"
    const p = document.createElement('p')
    p.innerHTML = `${toy.likes} likes`
    const btn = document.createElement('button')
    btn.className = "like-btn"
    btn.id = `${toy.id}`
    btn.innerHTML = "like &#10084",
    toyList.append(toyCard)
    toyCard.appendChild(h2)
    toyCard.appendChild(img)
    toyCard.appendChild(p)
    toyCard.appendChild(btn)

  })
}
const form = document.querySelector("form")

form.addEventListener('submit', e => {
  e.preventDefault()
  createNewToy()
})

function createNewToy() {
  
  fetch('http://localhost:3000/toys', {
    method: "POST",
    headers:
      {
        "Content-Type": "application/json",
          Accept: "application/json"
      },

    body: JSON.stringify({
      "name": `${input.name.value}`,
      "image": `${input.image.value}`,
      "likes": 0
      })
      })
    .then(resp => resp.json())
    .then((json) => createToyCard())
}