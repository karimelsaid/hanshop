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
