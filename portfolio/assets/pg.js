//line
// let path = document.querySelector("path");
// let pathLenght = path.getTotalLength();

// path.style.strokeDasharray = pathLenght + " " + pathLenght;
// path.style.strokeDashoffset = pathLenght;

// window.addEventListener("scroll", function () {
//   var scrollPercentage =
//     (document.documentElement.scrollTop + document.body.scrollTop) /
//     (document.documentElement.scrollHeight -
//       document.documentElement.clientHeight);
//   var drawLength = pathLenght * scrollPercentage;
//   path.style.strokeDashoffset = pathLenght - drawLength;
// });
//fin de line
window.addEventListener("DOMContentLoaded", function () {
  const bouton = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const svg = document.getElementById("menusvg");

  bouton.addEventListener("click", function () {
    if (!bouton.classList.contains("croix")) {
      bouton.classList.add("croix");
      mobileMenu.style.display = "block";
      svg.classList.add("active");
    } else {
      bouton.classList.remove("croix");
      mobileMenu.style.display = "none";
      svg.classList.remove("active");
    }

    // Ajoutez votre gestionnaire d'événements pour les liens du menu ici
    var navLinks = mobileMenu.querySelectorAll("a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function () {
        bouton.classList.remove("croix");
        mobileMenu.style.display = "none";
        svg.classList.remove("active");
      });
    }
  });
});

(function () {
  "use strict";

  // Définir des variables globales
  var items = document.querySelectorAll(".timeline li");

  // Fonction pour vérifier si un élément est dans la vue
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Fonction pour gérer l'animation
  function handleAnimation() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      } else {
        items[i].classList.remove("in-view");
      }
    }
  }

  // Écouter le défilement de la page
  window.addEventListener("scroll", function () {
    handleAnimation();
  });

  // Écouter le chargement de la page
  window.addEventListener("load", function () {
    handleAnimation();
  });

  // Écouter le redimensionnement de la fenêtre
  window.addEventListener("resize", function () {
    handleAnimation();
  });
})();

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour gérer l'animation des éléments visibles
function handleAnimation() {
  var elements = document.querySelectorAll(".has-animation");

  elements.forEach(function (element) {
    if (isElementInViewport(element)) {
      // Vérifiez si l'élément a déjà été animé
      if (!element.hasAttribute("data-animated")) {
        element.classList.add("animate-in");
        element.setAttribute("data-animated", "true");
      }
    }
  });
}

// Écoutez le défilement de la page pour déclencher l'animation
window.addEventListener("scroll", function () {
  handleAnimation();
});

// Appelez handleAnimation() une fois au chargement de la page pour vérifier les éléments visibles initialement
window.addEventListener("load", function () {
  handleAnimation();
});

// Écoutez le défilement vers le haut de la page
var lastScrollTop = 0;
window.addEventListener("scroll", function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st < lastScrollTop) {
    // L'utilisateur fait défiler vers le haut, réinitialisez l'animation ici si nécessaire
    handleAnimation();
  }
  lastScrollTop = st <= 0 ? 0 : st;
});
//Progress bar
let boxes = document.querySelectorAll(".box");

// Fonction pour démarrer les animations
function startAnimations() {
  boxes.forEach((box) => {
    let line = box.querySelector(".line");
    let increasing_percentage = box.querySelector(".increasing_percentage");
    let total_percentage = box.querySelector(".total_percentage");

    let p = 0;
    let my_interval = setInterval(() => {
      p++;
      line.style.width = p + "%";
      increasing_percentage.innerHTML = p + "%";
      if (increasing_percentage.innerHTML == total_percentage.innerHTML) {
        clearInterval(my_interval);
      }
    }, 25);
  });
}

// Observer lorsque la section "Compétences" est visible
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // La section est visible à l'écran, déclencher les animations
      startAnimations();
      // Une fois que les animations sont déclenchées, nous n'avons plus besoin de l'observer
      observer.unobserve(entry.target);
    }
  });
}, options);

// Cible à observer (votre section "Compétences")
const target = document.querySelector(".competences-container");

// Démarrer l'observation de la cible
observer.observe(target);
//realisation
const code = document.querySelector(".code");
const conceptions = document.querySelector(".conceptions");
const infographies = document.querySelector(".infographies");
const bouton1 = document.querySelector("#bouton1");
const bouton3 = document.querySelector("#bouton3");
const bouton2 = document.querySelector("#bouton2");

bouton3.addEventListener("click", function () {
  code.style.display = "none";
  conceptions.style.display = "block";
  infographies.style.display = "none";
});
bouton1.addEventListener("click", function () {
  code.style.display = "block";
  conceptions.style.display = "none";
  infographies.style.display = "none";
});
bouton2.addEventListener("click", function () {
  code.style.display = "none";
  conceptions.style.display = "none";
  infographies.style.display = "block";
});
//bouton actif ou desactif
document.addEventListener("DOMContentLoaded", function () {
  const code = document.querySelector(".code");
  const conceptions = document.querySelector(".conceptions");
  const infographies = document.querySelector(".infographies");
  const boutons = document.querySelectorAll(".btn button");

  boutons.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      // Ajoutez la classe 'actif' au bouton cliqué
      bouton.classList.add("actif");

      // Supprimez la classe 'actif' des autres boutons
      boutons.forEach(function (b) {
        if (b !== bouton) {
          b.classList.remove("actif");
        }
      });

      // Masquez ou affichez le contenu en fonction du bouton cliqué
      switch (bouton.id) {
        case "bouton1":
          code.style.display = "block";
          conceptions.style.display = "none";
          infographies.style.display = "none";
          break;
        case "bouton2":
          code.style.display = "none";
          conceptions.style.display = "none";
          infographies.style.display = "block";
          break;
        case "bouton3":
          code.style.display = "none";
          conceptions.style.display = "block";
          infographies.style.display = "none";
          break;
      }
    });
  });
});

const carouselItems = document.querySelectorAll(".carousel-items");
const carouselButtons = document.querySelectorAll("button");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Fonction pour afficher l'élément correspondant à l'index actuel
function showCurrentItem() {
  carouselItems.forEach((items, index) => {
    if (index === currentIndex) {
      items.style.display = "flex";
    } else {
      items.style.display = "none";
    }
  });
}

// // Écouteurs d'événements pour les boutons "Précédent" et "Suivant"
// prevButton.addEventListener("click", () => {
//   currentIndex =
//     (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//   showCurrentItem();
// });

// nextButton.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % carouselItems.length;
//   showCurrentItem();
// });

// // Écouteurs d'événements pour les boutons de section
// carouselButtons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     currentIndex = index;
//     showCurrentItem();
//   });
// });

// // Afficher le premier élément au chargement de la page
// showCurrentItem();
function updateViewBox() {
  const svg = document.getElementById("svg");
  const windowWidth = window.innerWidth;

  // Définir le viewBox en fonction de la largeur de l'écran
  if (windowWidth <= 767) {
    svg.setAttribute("viewBox", "0 0 720 381");
  } else {
    svg.setAttribute("viewBox", "0 0 1440 190");
  }
}

// Mettre à jour le viewBox lors du chargement de la page et lors du redimensionnement de la fenêtre
window.onload = updateViewBox;
window.onresize = updateViewBox;
