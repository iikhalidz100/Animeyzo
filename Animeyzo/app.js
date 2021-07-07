// this script is for making the navigation bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// display anime tab
function anime() {
  document.querySelector(".close").style.display = "block";
  document.querySelector(".manga").style.display = "none";
  document.querySelector(".contact").style.display = "none";
  document.querySelector(".homePage").style.display = "none";

}

// function anime1() {
//   document.querySelector(".close").style.display = "block";
//   document.querySelector(".manga").style.display = "none";
//   document.querySelector(".contact").style.display = "none";
//   document.querySelector(".homePage").style.display = "none";
//   success();
//
// }
// display manga tab

function manga() {
  document.querySelector(".close").style.display = "none";
  document.querySelector(".manga").style.display = "block";
  document.querySelector(".contact").style.display = "none";
  document.querySelector(".homePage").style.display = "none";
}
// display contact tab

function contact() {
  document.querySelector(".close").style.display = "none";
  document.querySelector(".manga").style.display = "none";
  document.querySelector(".contact").style.display = "block";
  document.querySelector(".homePage").style.display = "none";


}
// display home tab

function home() {
  document.querySelector(".close").style.display = "none";
  document.querySelector(".manga").style.display = "none";
  document.querySelector(".contact").style.display = "none";
  document.querySelector(".homePage").style.display = "block";


}

window.onscroll = function() {
  myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function success() {
  alert("Subbmition Successfull ! ");
}


function SearchFun() {

  var input, filter, ul, li, a, i, txtValue, cardID;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    cardID = a.herf;


    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";

    } else {
      li[i].style.display = "none";
      var res = txtValue.split("-");
      //  getItem(res);

      // hideCard(res[1]);
      //  document.write(res[2]);


      // document.getElementById(cardID).style.display = "none";
    }

  }
  // document.getElementById("myUL").innerHTML =res[1];
  if (input.value.length == 0) {
    ul.style.display = "none";
    return;

  } else {
    ul.style.display = "block";
  }


}

// function getItem(var res){
// document.getElementById("myUL").innerHTML =res;
// }


function hideSerachElements() {
  document.getElementById("myUL").style.display = "none";
}

function getCards() {

  // var cards = document.getelementsbyClassName("card")[0].title;
}

function hideCard(name) {
  var cards = document.getElementById(name);
  cards.style.display = "none";
  // for (var variable in cards) {
  //   variable.style.display = "none";
  // }

  // document.getElementById("narutoAnime_poster").style.display = "none";

}

function boxSHadow(n) {
  var cards = document.getElementById(n);
  cards.style.boxShadow = "0px 20px 25px red , 0px -20px 25px orange";
}

function NoboxSHadow(n) {
  var cards = document.getElementById(n);
  cards.style.boxShadow = "0px 0px 0px black";
}
