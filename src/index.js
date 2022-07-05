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
  .then((json) => createNewToy(json))
}

function createNewToy(toys) {
  const newToy = document.getElementById("toy-collection")
  toys.forEach(toy => {
    const divCard = document.createElement("div")
    divCard.className = "card"
    const h2 = document.createElement('h2')
    h2.innerHTML = toy.name
    const img = document.createElement('img')
    img.src = `${toy.image}`
    img.className = "toy-avatar"
    const p = document.createElement('p')
    p.innerHTML = `${toy.likes}`
    const btn = document.createElement('button')

    newToy.append(divCard)
    divCard.appendChild(h2, img, p, btn)

  })
}