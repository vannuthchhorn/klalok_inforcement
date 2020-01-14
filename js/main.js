const PLAYDELAY = 2000;
const IMAGE_FILD = ["1.png","2.png","3.png","4.png","5.png","6.png",];


document.querySelector('#resetButtonId').style.display = "none";

function setHtml(text){
    var recipt= document.querySelector("#resultId");
     recipt.innerHTML= text;
 }

// loop get image
function getimage(){
    var results = "";
for(let i= 0; i <3; i++){
  var image = IMAGE_FILD[Math.floor(Math.random() * IMAGE_FILD.length)];
  results +=`
  <img src="images/${image}" width="100">
  `;
  }
  return results;
}

function visability( element , visable){
var result = visable ? "block": "none";
document.querySelector("#" + element).style.display = result;

}
function onPlayClicked(){
    setHtml("wait");
    setTimeout(() => {
    visability('playButtonId',false);
    visability('resetButtonId',true);
    visability('playButtonId',true);
    visability('resetButtonId',false);
    setHtml(getimage());
   }, PLAYDELAY); 
}

function onResetClicked(){
    visability('playButtonId',true);
    visability('resetButtonId',false);
    //setHtml("you can play");
}

const buttonPlay = document.querySelector('#playButtonId');
buttonPlay.addEventListener('click',onPlayClicked);

const buttonReset = document.querySelector('#resetButtonId');
buttonReset.addEventListener('click',onResetClicked);
