let on_type1 = document.getElementById("type1-article1");
let off1_type1 = document.getElementById("type1-article2");
let on_type2 = document.getElementById("type2-article1");
let off1_type2 = document.getElementById("type2-article2");
let on_type3 = document.getElementById("type3-article1");
let off1_type3 = document.getElementById("type3-article2");
let on_type4 = document.getElementById("type4-article1");
let off1_type4 = document.getElementById("type4-article2");

function div1(){
  on_type1.style.display = "grid";
  off1_type1.style.display = "none";
  on_type2.style.display = "grid";
  off1_type2.style.display = "none";
  on_type3.style.display = "grid";
  off1_type3.style.display = "none";
  on_type4.style.display = "grid";
  off1_type4.style.display = "none";
}

function type1() {
  on_type1.style.display = "none";
  off1_type1.style.display = "grid";
  on_type2.style.display = "grid";
  off1_type2.style.display = "none";
  on_type3.style.display = "grid";
  off1_type3.style.display = "none";
  on_type4.style.display = "grid";
  off1_type4.style.display = "none";
}
function type2() {
  on_type1.style.display = "grid";
  off1_type1.style.display = "none";
  on_type2.style.display = "none";
  off1_type2.style.display = "grid";
  on_type3.style.display = "grid";
  off1_type3.style.display = "none";
  on_type4.style.display = "grid";
  off1_type4.style.display = "none";
}
function type3() {
   on_type1.style.display = "grid";
   off1_type1.style.display = "none";
  on_type2.style.display = "grid";
  off1_type2.style.display = "none";
   on_type3.style.display = "none";
   off1_type3.style.display = "grid";
  on_type4.style.display = "grid";
  off1_type4.style.display = "none";
}
function type4() {
  on_type1.style.display = "grid";
  off1_type1.style.display = "none";
   on_type2.style.display = "grid";
   off1_type2.style.display = "none";
   on_type3.style.display = "grid";
   off1_type3.style.display = "none";
  on_type4.style.display = "none";
  off1_type4.style.display = "grid";
}
