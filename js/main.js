// window.addEventListener("load", () => {
// // page loader
//   document.querySelector(".js-page-loader").classList.add("fade-out");
//   setTimeout(() => {
//     document.querySelector(".js-page-loader").style.display = "none";
//   }, 600);
// });

/*testimonial slider*/
function testimonialSlider() {
  const carouselOne = document.getElementById("carouselOne");
  if (carouselOne) {
    /*if the element exist*/
    carouselOne.addEventListener("slide.bs.carousel", function () {
      const activeItem = this.querySelector(".active");
      document.querySelector(".js-testimonial-img").src =
        activeItem.getAttribute("data-js-testimonial-img");
    });
  }
}

testimonialSlider();

/* course preview video */

function coursePreviewVideo() {
  const coursePreviewModal = document.querySelector(".js-course-preview-modal");
  if (coursePreviewModal) {
    coursePreviewModal.addEventListener("shown.bs.modal", function () {
      this.querySelector(".js-course-preview-video").play();
      this.querySelector(".js-course-preview-video").currentTime = 0;
    });

    coursePreviewModal.addEventListener("hide.bs.modal", function () {
      this.querySelector(".js-course-preview-video").pause();
    });
  }
}

coursePreviewVideo();

/*-------------------------
header menu
------------------------*/

function headerMenu() {
  const menu = document.querySelector(".js-header-menu"),
    backdrop = document.querySelector(".js-header-backdrop"),
    menuCollapseBreakPoint = 991;

  function toggleMenu() {
    menu.classList.toggle("open");
    backdrop.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
  }

  document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });

  // close the menu by clicking outside of it
  backdrop.addEventListener("click", toggleMenu);

  function collapse() {
    menu.querySelector(".active .js-sub-menu").removeAttribute("style");
    menu.querySelector(".active").classList.remove("active");
  }

  menu.addEventListener("click", (event) => {
    const { target } = event;

    if (
      target.classList.contains("js-toggle-sub-menu") &&
      window.innerWidth <= menuCollapseBreakPoint
    ) {
      // prevent default anchor click behavior
      event.preventDefault();

      // if menu-item already expanded, collapse it and exit
      if (target.parentElement.classList.contains("active")) {
        collapse();
        return;
      }

      // if not already expanded... run below code

      // collapse the other expanded menu-item if exist
      if (menu.querySelector(".active")) {
        collapse();
      }

      // expand new menu-item
      target.parentElement.classList.add("active");
      target.nextElementSibling.style.maxHeight =
        target.nextElementSibling.scrollHeight + "px";
    }
  });

  //when reasizing window
  window.addEventListener("resize", function () {
    if (
      this.innerWidth > menuCollapseBreakPoint &&
      menu.classList.contains("open")
    ) {
      toggleMenu();
    }

    if (
      this.innerWidth > menuCollapseBreakPoint &&
      menu.querySelector(".active")
    ) {
      collapse();
    }
  });
}
headerMenu();

/*--------------------------Style Switcher---------------*/

function styleSwitcherToggle() {
  const styleSwitcher = document.querySelector(".js-style-switcher"),
    styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

  styleSwitcherToggler.addEventListener("click", function () {
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });
}
styleSwitcherToggle();

/* theme colors*/

function themeColors() {
  const colorStyle = document.querySelector(".js-color-style"),
    themeColorsContainer = document.querySelector(".js-theme-colors");

  themeColorsContainer.addEventListener("click", ({ target }) => {
    if (target.classList.contains("js-theme-color-item")) {
      localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
      setColor();
    }
  });

  function setColor() {
    let path = colorStyle.getAttribute("href").split("/");
    path = path.slice(0, path.length - 1);
    colorStyle.setAttribute(
      "href",
      path.join("/") + "/" + localStorage.getItem("color") + ".css"
    );

    if (document.querySelector(".js-theme-color-item.active")) {
      document
        .querySelector(".js-theme-color-item.active")
        .classList.remove("active");
    }
    document
      .querySelector(
        "[data-js-theme-color=" + localStorage.getItem("color") + "]"
      )
      .classList.add("active");
  }

  if (localStorage.getItem("color") !== null) {
    setColor();
  } else {
    const defaultColor = colorStyle
      .getAttribute("href")
      .split("/")
      .pop()
      .split(".")
      .shift();
    document
      .querySelector("[data-js-theme-color=" + defaultColor + "]")
      .classList.add("active");
  }
}
themeColors();

/* theme light & dark mode*/

function themeLightDark() {
  const darkModeCheckbox = document.querySelector(".js-dark-mode");

  darkModeCheckbox.addEventListener("click", function () {
    if (this.checked) {
      localStorage.setItem("theme-dark", "true");
    } else {
      localStorage.setItem("theme-dark", "false");
    }
    themeMode();
  });

  function themeMode() {
    if (localStorage.getItem("theme-dark") === "false") {
      document.body.classList.remove("t-dark");
    } else {
      document.body.classList.add("t-dark");
    }
  }

  if (localStorage.getItem("theme-dark") !== null) {
    themeMode();
  }
  if (document.body.classList.contains("t-dark")) {
    darkModeCheckbox.checked = true;
  }
}
themeLightDark();

/*-----------theme glass effect-------------*/

function themeGlassEffect() {
  const glassEffectCheckbox = document.querySelector(".js-glass-effect"),
    glassStyle = document.querySelector(".js-glass-style");

  glassEffectCheckbox.addEventListener("click", function () {
    if (this.checked) {
      localStorage.setItem("glass-effect", "true");
    } else {
      localStorage.setItem("glass-effect", "false");
    }
    glass();
  });

  function glass() {
    if (localStorage.getItem("glass-effect") === "true") {
      glassStyle.removeAttribute("disabled");
    } else {
      glassStyle.disabled = true;
    }
  }
  if (localStorage.getItem("glass-effect") !== null) {
    glass();
  }

  if (!glassStyle.hasAttribute("disabled")) {
    glassEffectCheckbox.checked = true;
  }
}
themeGlassEffect();

// carousel coba
// let items = document.querySelectorAll(".slider .item");
// let active = 3;
// function loadShow() {
//   items[active].style.transform = `none`;
//   items[active].style.zIndex = 1;
//   items[active].style.filter = "none";
//   items[active].style.opacity = 1;
//   // show after
//   let stt = 0;
//   for (var i = active + 1; i < items.length; i++) {
//     stt++;
//     items[i].style.transform = `translateX(${120 * stt}px) scale(${
//       1 - 0.2 * stt
//     }) perspective(16px) rotateY(-1deg)`;
//     items[i].style.zIndex = -stt;
//     items[i].style.filter = "blur(5px)";
//     items[i].style.opacity = stt > 2 ? 0 : 0.6;
//   }
//   stt = 0;
//   for (var i = active - 1; i >= 0; i--) {
//     stt++;
//     items[i].style.transform = `translateX(${-120 * stt}px) scale(${
//       1 - 0.2 * stt
//     }) perspective(16px) rotateY(1deg)`;
//     items[i].style.zIndex = -stt;
//     items[i].style.filter = "blur(5px)";
//     items[i].style.opacity = stt > 2 ? 0 : 0.6;
//   }
// }
// loadShow();
// let next = document.getElementById("next");
// let prev = document.getElementById("prev");
// next.onclick = function () {
//   active = active + 1 < items.length ? active + 1 : active;
//   loadShow();
// };
// prev.onclick = function () {
//   active = active - 1 >= 0 ? active - 1 : active;
//   loadShow();
// };

// ------------------notes app----------------

function changeFontFamily() {
  var select = document.getElementById("fontFamily");
  var selectedFont = select.options[select.selectedIndex].value;
  document.body.style.fontFamily = selectedFont;
}

// iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii

document.addEventListener("DOMContentLoaded", function() {
  var popoverButton = document.getElementById("popoverButton");
  var popoverContent = document.getElementById("popoverContent");
  var closePopover = document.getElementById("closePopover");

  popoverButton.addEventListener("click", function() {
    popoverContent.classList.add("show");
    popoverButton.style.display = "none"; // Menghilangkan tombol "Tampilkan Popover"
  });

  closePopover.addEventListener("click", function() {
    popoverContent.classList.remove("show");
    popoverButton.style.display = "inline-block"; // Mengembalikan tombol "Tampilkan Popover"
  });

  // Menutup popover saat pengguna mengklik di luar popover
  document.addEventListener("click", function(event) {
    if (!popoverContent.contains(event.target) && event.target !== popoverButton) {
      popoverContent.classList.remove("show");
      popoverButton.style.display = "inline-block"; // Mengembalikan tombol "Tampilkan Popover"
    }
  });
});



