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


    try {
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
    } catch (e) {}
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

function changeFavicon() {

  const favicons = [
    "favicon_AFG.ico",
    "favicon_HEL.ico",
    "favicon_MOF.ico",
    "favicon_PAP.ico",
    "favicon_POPI.ico",
    "favicon_RAS.ico",
    "favicon_ROS.ico",
  ];

  let lastFavicon = Math.floor(Math.random() * favicons.length);

  const getRandomFavicon = () => {
    let randomFavicon;
    
    do {
      randomFavicon = Math.floor(Math.random() * favicons.length);
    } while (randomFavicon === lastFavicon)
    lastFavicon = randomFavicon;
    return randomFavicon;
  };

  const getRandomFaviconIndex = getRandomFavicon()
  const faviconUrl = "/img/assets/favicon/" + favicons[getRandomFaviconIndex];
  const favicon = document.querySelector('link[rel="icon"]');

  favicon.href = faviconUrl;
  
  setTimeout(changeFavicon, 3000);
  
}

changeFavicon();