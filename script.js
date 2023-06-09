
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function red() {
    document.querySelector(".mz").src ="Icon\\minimize.png";
    document.querySelector(".mx").src = "Icon\\restore.png";
    document.querySelector(".clz").src = "Icon\\close.png";
    document.querySelector(".menu-class").src = "Icon\\menu.png";
    document.querySelector(".percent").src = "Icon\\percentage.png";
    document.querySelector(".root").src = "Icon\\root.png";
    document.querySelector(".divide").src = "Icon\\divide.png";
    document.querySelector(".delete").src = "Icon\\clear.png";
    document.querySelector(".multiply").src = "Icon\\multiply.png";
    document.querySelector(".plus").src = "Icon\\plus.png";
    document.querySelector(".minus").src = "Icon\\minus.png";
    document.querySelector(".one-x").src = "Icon\\fracture.png";
    document.querySelector(".equal").src = "Icon\\equal.png";
    document.querySelector(".plus-minus").src = "Icon\\plusminus.png";
    document.querySelector(".history-icon").src = "Icon\\history.png";
}

function lighten() {
    document.querySelector(".mz").src = "https://img.icons8.com/material-rounded/24/undefined/minus-math--v1.png"
    document.querySelector(".mx").src = "https://img.icons8.com/windows/24/undefined/maximize-button.png";
    document.querySelector(".clz").src = "https://img.icons8.com/ios/50/undefined/delete-sign--v1.png";
    document.querySelector(".menu-class").src = "https://img.icons8.com/material-outlined/24/000000/menu--v2.png";
    document.querySelector(".percent").src = "https://img.icons8.com/ios-glyphs/25/undefined/percentage.png";
    document.querySelector(".root").src = "https://img.icons8.com/ios/30/undefined/square-root.png";
    document.querySelector(".divide").src = "https://img.icons8.com/small/30/undefined/divide.png";
    document.querySelector(".delete").src = "https://img.icons8.com/windows/30/undefined/clear-symbol.png";
    document.querySelector(".multiply").src = "https://img.icons8.com/ios/30/undefined/multiply.png";
    document.querySelector(".plus").src = "https://img.icons8.com/ios/30/undefined/plus-math.png";
    document.querySelector(".minus").src = "https://img.icons8.com/ios/30/undefined/minus-math.png";
    document.querySelector(".one-x").src = "Icon\\1x.png";
    document.querySelector(".equal").src = "https://img.icons8.com/ios/30/undefined/equal-sign.png";
    document.querySelector(".plus-minus").src =
      "https://img.icons8.com/fluency-systems-regular/28/undefined/plus-minus.png";
      document.querySelector(".history-icon").src =
        "https://img.icons8.com/external-others-amoghdesign/24/000000/external-history-multimedia-solid-30px-others-amoghdesign.png";
}

function changeTheme(x) {
    const buttons = document.querySelectorAll(".big, .sml-btns");
    document.body.className = x;
    switch(x){
        case 'green':
            buttons.forEach(button => {
                button.style.borderRadius = "20px";
            });
            lighten();
            break;
        case 'default':
            buttons.forEach((button) => {
                button.style.borderRadius = "2px";
            });
            lighten();
            break;
        case 'blue':
            buttons.forEach((button) => {
                button.style.borderRadius = "0px";
                button.style.borderTopLeftRadius = "20px";
                button.style.borderBottomRightRadius = "20px";
            });
            lighten();
            break;
        case 'red':
            buttons.forEach((button) => {
                button.style.borderRadius = "50px";
              
            }
             );
            red();
            break;
    }
}