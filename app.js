


// // ------------------------//
// 🦄️ cart no Setup
// ------------------------//

// /remove checked from cash
function changeCash(){
  var cartCont = document.querySelector("#cartInput");
  var payWithCash = document.querySelector("#payWithCash");

if(payWithCash.checked == true){
  payWithCash.removeAttribute("checked")
}

}

// // ------------------------//
// 🦄️ popup contactForm home_page
// ------------------------//

function change(){

  let $my = document.getElementById("contact_us");
  let myform = document.querySelector(".popUp-form");

  if(document.querySelector(".popUp-form").style.display == "none"){
    document.querySelector(".popUp-form").style.display = "flex";
  }else{
      document.querySelector(".popUp-form").style.display = "none";
  }

};
// ------------------------//
// 🦄️ orderWindow open home page
// ------------------------//



function player() {
      let bton = document.querySelectorAll('.OrderNow');
console.log(bton);

      var sound = document.createElement('audio');
      sound.id       = 'myAudio';
      sound.controls = 'controls';
      sound.src ="./assets/horn.mp3"
      sound.type     = 'audio/mpeg';
      sound.play();
       window.open(this.href= "./order.html",'popUpWindow','height=750,width=785,toolbar=no, location=no, menubar=no,left=10,top=10,menubar=no');

}


// ------------------------//
// 🦄️ x button Orderpage
// ------------------------//

    let $xbtn = document.querySelector(".exitBtn");
    function clickX(){window.close();}


// ------------------------//
// 🦄️ fitlers menu_page
// ------------------------//

// menucart

document.addEventListener("DOMContentLoaded", () => {

var checkboxies = document.querySelectorAll(".checkbox");
var menucart = document.querySelectorAll(".menucart");
var btns = document.querySelectorAll(".OrderNow");







let filter = 'all';
let choice = 'null';
checkboxies.forEach((cboxies, i) => {
this.addEventListener("click", () => {

if(cboxies.checked == true){
filter = cboxies.value;
filter =filter[0].toUpperCase()+filter.substring(1)
}

menucart.forEach((item, i) => {

  if(filter == "All"){
    item.style.display ="block"

  }else if(item.classList.contains(filter.toLowerCase()) !== true |
   item.classList.contains(filter.toUpperCase() !== true))
   {
    item.style.display ="none"
  }else{
      if(item.classList.contains(filter.toLowerCase()) == true |
       item.classList.contains(filter.toUpperCase() == true)

        ){
          item.style.display ="block"
        }

      }

});


    });
});
//choice

btns.forEach((btn, j) => {
  btn.addEventListener('click',()=>{
    choice = menucart[j].querySelector('.title').innerText

    cleanChoice = choice.replace(/pizza|chicken|\s/gi,'')
    console.log(cleanChoice)
  })

//setting up to local storage.<--------------------------start from here.
});


});
