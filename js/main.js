document.getElementById("yellow").onclick = yellow
document.getElementById("green").onclick = green
document.getElementById("blue").onclick = blue
document.getElementById("red").onclick = red


function yellow() {
  document.querySelector("body").style.backgroundColor = "yellow"
  document.querySelector("body").style.color = "black"
  document.querySelector("img").style.filter = "hue-rotate(225deg)"
  document.querySelector("#badPun").innerHTML = '"If the hue fits."'

}

function green() {
  document.querySelector("body").style.backgroundColor = "green"
  document.querySelector("body").style.color = "white"
  document.querySelector("img").style.filter = "hue-rotate(260deg)"
  document.querySelector("#badPun").innerHTML = '"Give credit where credit is hue."'
}

function blue() {
  document.querySelector("body").style.backgroundColor = "blue"
  document.querySelector("body").style.color = "white"
  document.querySelector("img").style.filter = "hue-rotate(360deg)"
  document.querySelector("#badPun").innerHTML = '"Once in a hue moon."'

}

function red() {
  document.querySelector("body").style.backgroundColor = "red"
  document.querySelector("body").style.color = "black"
  document.querySelector("img").style.filter = "hue-rotate(150deg)"
  document.querySelector("#badPun").innerHTML = '"A dream can come hue."'
}