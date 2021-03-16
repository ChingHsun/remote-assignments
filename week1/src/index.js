function onShowHamMenue() {
  const element = document.getElementById("nav_hamburger");
  element.classList.toggle("menu-show");
  const menuImg = document.querySelector(".nav_hambtn");
  if (
    menuImg.innerHTML ===
    '<img class="nav_hammenuimg" src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-512.png" alt="logo img">'
  ) {
    menuImg.innerHTML =
      '<img class="nav_hammenuimg" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt="logo img"></img>';
  } else {
    menuImg.innerHTML =
      '<img class="nav_hammenuimg" src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-512.png" alt="logo img"></img>';
  }
}

function onChangeTitle() {
  const title = document.querySelector(".header_title");
  title.innerHTML = "Have a Good Time!";
  console.log("tilte", title);
}

function onShowContent() {
  const hiddenContent = document.getElementById("hidden_content_container");
  hiddenContent.classList.toggle("hidden");
}
