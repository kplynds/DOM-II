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

// Changes home images to a random image on a click
const images = querySelectorAll(".img-content > img");
images[0].addEventListener("click", eventListener);
function randomImage (event) {
    images[0].src = "https://picsum.photos/200";
}

images[0].addEventListener("click", randomImage);