const ui = {
  nav: {
    navBar: document.getElementById("navBar"),
    navItemsContainer: document.getElementById("nav-items"),
    openNavBtn: document.getElementById("open-navBar"),
    closeNavBtn: document.getElementById("close-navBar"),
    mobileNavBar: document.getElementById("mobile-navBar"),
  },
  hero: {
    dropALineBtn: document.getElementById("drop-a-line-text"),
  },
  items: document.querySelectorAll(".item"),
  focusCards: document.querySelectorAll(".focus__card"),
};

const segmener = new Intl.Segmenter({
  granularity: "letter",
});

function spanWrap(element) {
  element.ariaLabel = element.textContent;
  const letters = Array.from(segmener.segment(element.textContent || ""));
  const wrappedLetters = letters
    .map((letter, index) => {
      if (letter.segment === " ") {
        return `<span class="space">&nbsp;</span>`;
      }

      return `<span class="letter" style="--i:${index}">
          <span class="top">${letter.segment}</span>
          <span class="bottom">${letter.segment}</span>
        </span>`;
    })
    .join("");

  element.innerHTML = wrappedLetters;
}

function wrapAllItems() {
  ui.items.forEach((item) => spanWrap(item));
}

wrapAllItems();

function openMobileNavBar() {
  ui.nav.openNavBtn.addEventListener("click", () => {
    ui.nav.navBar.classList.remove("backdrop-blur-2xl");
    ui.nav.mobileNavBar.classList.remove("hidden");
  });
}

function closeMobileNavBar() {
  ui.nav.closeNavBtn.addEventListener("click", () => {
    ui.nav.mobileNavBar.classList.add("hidden");
    ui.nav.navBar.classList.add("backdrop-blur-2xl");
  });
}

openMobileNavBar();
closeMobileNavBar();

// const cursor = document.getElementById("cursor");

// let mouseX = 0,
//   mouseY = 0;
// let currentX = 0,
//   currentY = 0;

// function animate() {
//   currentX += (mouseX - currentX) * 0.1;
//   currentY += (mouseY - currentY) * 0.1;

//   cursor.style.transform = `translate(${currentX - 20}px, ${currentY - 20}px)`;

//   requestAnimationFrame(animate);
// }

// animate();

// function test() {
//   ui.focusCards.forEach((card) => {
//     card.addEventListener("mouseenter", (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     });
//   });
// }

// test();
