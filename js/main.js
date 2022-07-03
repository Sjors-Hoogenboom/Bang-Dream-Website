window.onload = () => {

    const searchbar = document.getElementById("searchbar");

    const cardslist = document.getElementsByClassName("top-card");
    const band_role = document.getElementsByClassName("band_role");
    const card_header = document.getElementsByClassName("reverse-card");

    const headers = document.querySelectorAll('header');

    headers.forEach((e) => {
        let audio = e.querySelector('audio');

        e.addEventListener('mouseenter', function() {
             audio.volume = 0.2;
             audio.play();
        }, false);
    });


    searchbar.onkeyup = (event) => {
      let filter = event.target.value.toUpperCase();
      for (let i = 0; i < cardslist.length; i++){
        let innerHTML = cardslist[i].innerHTML.toUpperCase();
        let innerHTML2 = band_role[i].innerHTML.toUpperCase();
        if (innerHTML.indexOf(filter) !== -1 || innerHTML2.indexOf(filter) !== -1){
          card_header[i].style.display = "";
        }
        else{
          card_header[i].style.display = "none";
        }
      }
    }
  }

function newSrc() {
  var e = document.getElementById("menu_trailers");
  var newSrc = e.options[e.selectedIndex].value;
  document.getElementById("trailers").src = newSrc;
}

function addToCart() {
    document.getElementById("shopping_cart").style.bottom = "20px";
    document.getElementById("cart_counter").innerHTML++;
}
