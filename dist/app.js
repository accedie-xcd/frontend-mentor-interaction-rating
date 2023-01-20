const rate = [
  document.getElementById("r1"),
  document.getElementById("r2"),
  document.getElementById("r3"),
  document.getElementById("r4"),
  document.getElementById("r5")
];

const button = document.getElementById("btn");


for (let index = 0; index < rate.length; index++) {
  rate[index].addEventListener("click", function(){
    clearBg();
    rate[index].style.backgroundColor = "rgb(100, 116, 139)";
  } );
}

function clearBg() {
  rate.forEach(element => { element.style.backgroundColor = "rgb(30, 41, 59)";
  });
};



btn.addEventListener("click", function(){
  window.alert("hehe xd feature coming soon");
})
