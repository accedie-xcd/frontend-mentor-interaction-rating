const rate = [
  document.getElementById("r1"),
  document.getElementById("r2"),
  document.getElementById("r3"),
  document.getElementById("r4"),
  document.getElementById("r5")
];


const button = document.getElementById("btn");
let rateText;

//when a rating button is clicked, reset all button colours to default, then change clicked button's colour
for (let index = 0; index < rate.length; index++) {
  rate[index].addEventListener("click", function(){
    clearBg();
    rate[index].style.backgroundColor = "rgb(100, 116, 139)";
    rateText = "You selected " + (index+1) + " over 5";
  } );
}

function clearBg() {
  rate.forEach(element => { element.style.backgroundColor = "rgb(30, 41, 59)";
  });
};

btn.addEventListener("click", function(){
  changeImage();
  changeText();
  removeElements();
})

let starBackground = document.getElementById("starBg");

function changeImage(){
  document.getElementById("star").src='images/illustration-thank-you.svg';
  starBackground.style.backgroundColor = "rgba(0,0,0,0)";
  starBackground.style.width = "200px";
  starBackground.style.margin = "auto";
}

const thankYou = document.getElementById("toThankYou");
const appreciate = document.getElementById("appreciate");
const userRating = document.getElementById("userRating");

function changeText(){
  thankYou.textContent = "Thank You!"
  thankYou.style.textAlign = "center";
  userRating.textContent = rateText;
  appreciate.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch"

}
  


function removeElements(){
  document.getElementById("btn").remove();
  document.getElementById("scale").remove();
}
