// Your code goes here

// events to use :
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`

// Changes all text color to red
document.addEventListener("keydown", function (event) {
    if (event.key === "r") {
        let links = this.querySelectorAll(".nav-link");
        document.body.style.color = "red";
        links.forEach(item => item.style.color = "red");   
    }
})

// Changes all text color to blue
document.addEventListener("keydown", function (event) {
    if (event.key === "b") {
        let links = this.querySelectorAll(".nav-link");
        document.body.style.color = "blue";
        links.forEach(item => item.style.color = "blue");   
    }
})

// Changes content images to a random image on a click
const images = document.querySelectorAll(".img-content img");
const imageOne = images[0];
const imageTwo = images[1];

function eventListener (event) { }
imageOne.addEventListener("click", eventListener);
function randomImage (element ,event) {
    element.src = "https://source.unsplash.com/random";
}
imageOne.addEventListener("click")