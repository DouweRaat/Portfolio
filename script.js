//<------------------------------------------------ Image switcher ------------------------------------------------------------>
var elements = [document.getElementById('LEGOimage'), document.getElementById('HOLOimage'), questImage = document.getElementById('QUESTimage'), bobImage = document.getElementById('BOBimage'), cppImage = document.getElementById('CPPimage')];
var images = [['images/LEGO1.png', 'images/LEGO2.jpg', 'images/LEGO3.png', 'images/LEGO4.jpg'], ['images/HOLO1.jpg', 'images/HOLO2.png', 'images/HOLO3.jpg','images/HOLO4.jpg', 'images/HOLO5.png'], ['images/QUEST1.png', 'images/QUEST2.png'], ['images/BOB1.PNG', 'images/BOB2.PNG', 'images/BOB3.PNG', 'images/BOB4.PNG', 'images/BOB5.PNG', 'images/BOB6.PNG', 'images/BOB7.PNG', 'images/BOB8.PNG', 'images/BOB9.PNG'], ['images/C++1.svg.png', 'images/C++2.jpg']];
var indexes = [1, 1, 1, 1, 1];

function updateImages() {
    for (let i = 0; i < indexes.length; i++) {
        elements[i].src = images[i][indexes[i]];
        indexes[i] = (indexes[i] + 1) % images[i].length;
    }
}
setInterval(updateImages, 5000)

//<------------------------------------------------ Pop-up code ------------------------------------------------------------>

var modals = [document.getElementById("legoModal"), document.getElementById("holoModal"), document.getElementById("questModal"), document.getElementById("bobModal"), document.getElementById("cppModal")];
var spans = [document.getElementsByClassName("close")[0], document.getElementsByClassName("close")[1], document.getElementsByClassName("close")[2], document.getElementsByClassName("close")[3], document.getElementsByClassName("close")[4]]
for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function() {
        modals[i].style.display = "block";
    }
    spans[i].onclick = function() {
        modals[i].style.display = "none";
    }
}

window.onclick = function(event) {
    for (let i = 0; i < elements.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}