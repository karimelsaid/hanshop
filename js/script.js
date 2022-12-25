let on_type1 = document.getElementById("type1-article1");
let off1_type1 = document.getElementById("type1-article2");
let on_type2 = document.getElementById("type2-article1");
let off1_type2 = document.getElementById("type2-article2");
let on_type3 = document.getElementById("type3-article1");
let off1_type3 = document.getElementById("type3-article2");
let on_type4 = document.getElementById("type4-article1");
let off1_type4 = document.getElementById("type4-article2");

function div1() {
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
/* !!!!!!!!!!!!!!!!!!!!!! */
let open = document.getElementById("ganeb");
let open1 = document.getElementById("ganeb1");
let open2 = document.getElementById("ganeb2");
let open3 = document.getElementById("ganeb3");
function ganebOpen() {
  open.style.transform = "translate(0%, 0%)";
  open1.style.transform = "translate(0%, 0%)";
  open2.style.transform = "translate(0%, 0%)";
  open3.style.transform = "translate(0%, 0%)";
  open.style.transition = "all 1s ease-in-out";
  open1.style.transition = "all 1s ease-in-out";
  open2.style.transition = "all 1.5s ease-in-out";
  open3.style.transition = "all 2s ease-in-out";
}
function ganebClose() {
  open.style.transform = "translate(120%, 0%)";
  open1.style.transform = "translate(120%, 0%)";
  open2.style.transform = "translate(120%, 0%)";
  open3.style.transform = "translate(130%, 0%)";
  open.style.transition = "all 2s ease-in-out";
  open1.style.transition = "all 2s ease-in-out";
  open2.style.transition = "all 1.5s ease-in-out";
  open3.style.transition = "all 1s ease-in-out";
}


let plass = document.getElementById("input1");
let h21plass = document.getElementById("h21-input1");
let h22plass = document.getElementById("h22-input1");

function on_checked(){
if(plass.checked){
h21plass.style.display = "none";
h22plass.style.display = "none";
omash_11.style.display = "none";
omash_12.style.display = "none";
omash_21.style.display = "none";
omash_22.style.display = "none";
}
else{
  h21plass.style.display = "block";
  h22plass.style.display = "block";
}
}

let omash_1 = document.getElementById("omash1");
let omash_11 = document.getElementById("omash11");
let omash_12 = document.getElementById("omash12");
function omash1() {
  if (omash_1.checked) {
    omash_11.style.display = "none";
    omash_12.style.display = "none";
  } else {
    omash_11.style.display = "block";
    omash_12.style.display = "block";
  }
}
let omash_2 = document.getElementById("omash2");
let omash_21 = document.getElementById("omash21");
let omash_22 = document.getElementById("omash22");
function omash2() {
  if (omash_2.checked) {
    omash_21.style.display = "none";
    omash_22.style.display = "none";
  } else {
    omash_21.style.display = "block";
    omash_22.style.display = "block";
  }
}
let $about = document.getElementById("about");
let abut_p = document.getElementById("abut-p");
function aboutwe() {
  if ($about.checked) {
    abut_p.style.display = "none";
  } else {
    abut_p.style.display = "block";
  }
}