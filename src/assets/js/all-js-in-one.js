$(".chip-container").slick({
  slidesToShow: 10,
  slidesToScroll: 3,
  arrows: true,
  variableWidth: true,
  prevArrow:
    "<div><svg  style='height:24px; flex-shrink:0'  viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' focusable='false'  style='pointer-events: none; display: block; width: 100%; height: 100%;'><g mirror-in-rtl='' ><path d='M10.15,13.35L4.79,8l5.35-5.35l0.71,0.71L6.21,8l4.65,4.65L10.15,13.35z' ></path></g></svg></div>",
  nextArrow:
    "<div><svg style='height:24px;flex-shrink:0' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' focusable='false'  style='pointer-events: none; display: block; width: 100%; height: 100%;'><g mirror-in-rtl='' ><path d='M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z' ></path></g></svg></div>",
});

const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const pageContent = document.querySelector(".page-content");
const overlayEach = document.querySelector(".overlay-each-video");

if (overlay) {
  menu.addEventListener("click", function () {
    if (sidebar.style.display === "flex" || sidebar.style.display === "block") {
      sidebar.style.display = "none";
      overlay.style.display = "none";
      pageContent.classList.add("rm-margin");
    } else {
      sidebar.style.display = "block";
      pageContent.classList.remove("rm-margin");
      pageContent.classList.add("add-margin");
      overlay.style.display = "block";
    }
  });
} else if (overlayEach) {
  menu.addEventListener("click", function () {
    if (sidebar.style.display === "flex" || sidebar.style.display === "block") {
      sidebar.style.display = "none";
      overlayEach.style.display = "none";
    } else {
      sidebar.style.display = "block";
      overlayEach.style.display = "block";
    }
  });
}

const searchIcon = document.getElementById("mini-search-icon");
const fullSearchBar = document.getElementById("full-search-bar");
const backArrow = document.getElementById("back-arrow");
const navRhs = document.getElementById("nav-rhs");
const navLhs = document.getElementById("nav-lhs");
const searchInput = document.getElementById("search-input");
const searchHistory = document.querySelector(".search-history");
const navMicIcon = document.getElementById("nav-mic-icon");
const navMicDetail = document.querySelector(".nav-mic-detail");
const navMicClose = document.getElementById("nav-mic-detail-close-icon");
const disabledLink = document.getElementById("disabled-link");
const createIcon = document.getElementById("create");
const createDropDown = document.querySelector(".nav-create-dropdown");
const notifsIcon = document.getElementById("notifs");
const notifsDetail = document.querySelector(".notifs-detail");
const myavtIcon = document.getElementById("my-avt");
const myIn4 = document.querySelector(".my-in4");

searchIcon.addEventListener("click", function () {
  navLhs.classList.add("simple-hide");
  navRhs.classList.add("simple-hide");
  fullSearchBar.classList.add("simple-appear");
  backArrow.classList.add("back-arrow-appear");
});

backArrow.addEventListener("click", function () {
  navLhs.classList.remove("simple-hide");
  navRhs.classList.remove("simple-hide");
  fullSearchBar.classList.remove("simple-appear");
  backArrow.classList.remove("back-arrow-appear");
});

searchInput.addEventListener("focus", function () {
  searchHistory.classList.add("search-history-appear");
});

searchInput.addEventListener("blur", function () {
  setTimeout(function () {
    if (!searchInput.matches(":focus")) {
      searchHistory.classList.remove("search-history-appear");
    }
  }, 100);
});

navMicIcon.addEventListener("click", function () {
  navMicDetail.classList.add("nav-mic-detail-appear");
});

navMicClose.addEventListener("click", function () {
  navMicDetail.classList.remove("nav-mic-detail-appear");
});

createIcon.addEventListener("click", function () {
  createDropDown.classList.toggle("nav-create-dropdown-appear");
});

notifsIcon.addEventListener("click", function () {
  notifsDetail.classList.toggle("notifs-detail-appear");
});

myavtIcon.addEventListener("click", function () {
  myIn4.classList.toggle("my-in4-appear");
});

const navbarHome = document.getElementById("navbar-home");
const navbarVids = document.getElementById("navbar-videos");
const navbarPlaylists = document.getElementById("navbar-playlists");
const navbarChannel = document.getElementById("navbar-channel");
const navbarAbout = document.getElementById("navbar-about");

if (navbarHome) {
  navbarHome.addEventListener("click", function () {
    removeActiveClass();
    navbarHome.classList.add("active");
  });
}
if (navbarVids) {
  navbarVids.addEventListener("click", function () {
    removeActiveClass();
    navbarVids.classList.add("active");
  });
}
if (navbarPlaylists) {
  navbarPlaylists.addEventListener("click", function () {
    removeActiveClass();
    navbarPlaylists.classList.add("active");
  });
}
if (navbarChannel) {
  navbarChannel.addEventListener("click", function () {
    removeActiveClass();
    navbarChannel.classList.add("active");
  });
}
if (navbarAbout) {
  navbarAbout.addEventListener("click", function () {
    removeActiveClass();
    navbarAbout.classList.add("active");
  });
}

function removeActiveClass() {
  const channelNavItems = document.querySelectorAll(".channel-navbar-item");
  channelNavItems.forEach(function (item) {
    item.classList.remove("active");
  });
}

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".channel-navbar");
  const spaceSticky = document.querySelectorAll(".space-when-sticky");

  var sticky = 406;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    spaceSticky.forEach(function (item) {
      item.style.display = "block";
    });
  } else {
    navbar.classList.remove("sticky");
    spaceSticky.forEach(function (item) {
      item.style.display = "none";
    });
  }
});

const musicFil = document.getElementById("music-fil");
const playlistsFil = document.getElementById("Playists-fil");
const countryFil = document.getElementById("country-fil");
const rbFil = document.getElementById("rb-fil");
const watchFil = document.getElementById("watch-fil");
const recentlyFil = document.getElementById("recently-fil");
const asianFil = document.getElementById("asian-fil");
const thaiFil = document.getElementById("thai-fil");
const indieFil = document.getElementById("indie-fil");
const guitarFil = document.getElementById("guitar-fil");
const pianoFil = document.getElementById("piano-fil");
const koreanFil = document.getElementById("korean-fil");
const afganistanFil = document.getElementById("afganistan-fil");
const gatesFil = document.getElementById("gates-fil");
const allVidsFil = document.getElementById("allVids");

const musicList = document.querySelectorAll(".music");
const playLists = document.querySelectorAll(".playlists");
const countryList = document.querySelectorAll(".country");
const rbList = document.querySelectorAll(".rb");
const watchList = document.querySelectorAll(".watched");
const recentlyList = document.querySelectorAll(".recently");
const asianList = document.querySelectorAll(".asian");
const thaiList = document.querySelectorAll(".thai");
const indieList = document.querySelectorAll(".indie");
const guitarList = document.querySelectorAll(".guitar");
const pianoList = document.querySelectorAll(".piano");
const koreanList = document.querySelectorAll(".korean");
const afganistanList = document.querySelectorAll(".afganistan");
const gatesList = document.querySelectorAll(".gates");
const allVids = document.querySelectorAll(".vid");

function hideAllLists() {
  musicList.forEach(function (item) {
    item.style.display = "none";
  });

  playLists.forEach(function (item) {
    item.style.display = "none";
  });

  countryList.forEach(function (item) {
    item.style.display = "none";
  });

  rbList.forEach(function (item) {
    item.style.display = "none";
  });

  watchList.forEach(function (item) {
    item.style.display = "none";
  });

  recentlyList.forEach(function (item) {
    item.style.display = "none";
  });

  asianList.forEach(function (item) {
    item.style.display = "none";
  });

  thaiList.forEach(function (item) {
    item.style.display = "none";
  });
  indieList.forEach(function (item) {
    item.style.display = "none";
  });

  guitarList.forEach(function (item) {
    item.style.display = "none";
  });
  pianoList.forEach(function (item) {
    item.style.display = "none";
  });
  koreanList.forEach(function (item) {
    item.style.display = "none";
  });
  afganistanList.forEach(function (item) {
    item.style.display = "none";
  });
  gatesList.forEach(function (item) {
    item.style.display = "none";
  });
}

musicFil.addEventListener("click", function () {
  hideAllLists();
  musicList.forEach(function (item) {
    item.style.display = "block";
  });
});

playlistsFil.addEventListener("click", function () {
  hideAllLists();
  playLists.forEach(function (item) {
    item.style.display = "block";
  });
});

countryFil.addEventListener("click", function () {
  hideAllLists();
  countryList.forEach(function (item) {
    item.style.display = "block";
  });
});

rbFil.addEventListener("click", function () {
  hideAllLists();
  rbList.forEach(function (item) {
    item.style.display = "block";
  });
});

watchFil.addEventListener("click", function () {
  hideAllLists();
  watchList.forEach(function (item) {
    item.style.display = "block";
  });
});

recentlyFil.addEventListener("click", function () {
  hideAllLists();
  recentlyList.forEach(function (item) {
    item.style.display = "block";
  });
});

asianFil.addEventListener("click", function () {
  hideAllLists();
  asianList.forEach(function (item) {
    item.style.display = "block";
  });
});

thaiFil.addEventListener("click", function () {
  hideAllLists();
  thaiList.forEach(function (item) {
    item.style.display = "block";
  });
});
indieFil.addEventListener("click", function () {
  hideAllLists();
  indieList.forEach(function (item) {
    item.style.display = "block";
  });
});
guitarFil.addEventListener("click", function () {
  hideAllLists();
  guitarList.forEach(function (item) {
    item.style.display = "block";
  });
});
pianoFil.addEventListener("click", function () {
  hideAllLists();
  pianoList.forEach(function (item) {
    item.style.display = "block";
  });
});
koreanFil.addEventListener("click", function () {
  hideAllLists();
  koreanList.forEach(function (item) {
    item.style.display = "block";
  });
});
afganistanFil.addEventListener("click", function () {
  hideAllLists();
  afganistanList.forEach(function (item) {
    item.style.display = "block";
  });
});
gatesFil.addEventListener("click", function () {
  hideAllLists();
  gatesList.forEach(function (item) {
    item.style.display = "block";
  });
});

allVidsFil.addEventListener("click", function () {
  hideAllLists();
  allVids.forEach(function (item) {
    item.style.display = "block";
  });
});
