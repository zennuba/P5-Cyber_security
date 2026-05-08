const allScreens = document.querySelectorAll(".screen");
const burgerButton = document.querySelector(".site-nav__burger");
const navList = document.querySelector(".site-nav__list");
const titleElement = document.querySelector(".dynamic-screen__title");
const bodyElement = document.querySelector(".dynamic-screen__bodytext");
const choicesElement = document.querySelector(".dynamic-screen__choices");
const feedbackElement = document.querySelector(".dynamic-screen__feedback");
const badgeElement = document.querySelector(".dynamic-screen__badge");
const imageWrapElement = document.querySelector(".dynamic-screen__image");
const imageElement = document.querySelector(".dynamic-screen__image img");
const questionElement = document.querySelector(".dynamic-screen__question");
const briefingElement = document.querySelector(".dynamic-screen__briefing");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
}

function showScreen(screenName) {
  allScreens.forEach((screen) => {
    const isCurrentScreen = screen.dataset.screen === screenName;
    screen.classList.toggle("is-hidden", !isCurrentScreen);
  });

  scrollToTop();
}

function renderFeedback(currentScreen) {
  feedbackElement.innerHTML = "";

  if (!currentScreen.feedback) {
    feedbackElement.className = "dynamic-screen__feedback";
    feedbackElement.classList.add("is-hidden");
    return;
  }

  feedbackElement.className = `dynamic-screen__feedback dynamic-screen__feedback--${currentScreen.feedbackTone}`;
  feedbackElement.classList.remove("is-hidden");

  currentScreen.feedback.forEach((line) => {
    const item = document.createElement("li");
    item.textContent = line;
    feedbackElement.appendChild(item);
  });
}

function renderScreen(screenKey) {
  const currentScreen = screens[screenKey];

  if (!currentScreen) {
    return;
  }

  titleElement.textContent = currentScreen.title;
  bodyElement.textContent = currentScreen.bodyText;
  badgeElement.textContent = currentScreen.typeLabel;
  document.body.classList.toggle("is-briefing-screen", Boolean(currentScreen.isBriefing));
  questionElement.textContent = currentScreen.questionTitle || "Hvad gør du?";
  questionElement.classList.toggle("is-hidden", Boolean(currentScreen.hideQuestion));
  briefingElement.classList.toggle("is-hidden", !currentScreen.isBriefing);

  if (currentScreen.image) {
    imageElement.src = currentScreen.image;
    imageElement.alt = currentScreen.imageAlt || "";
    imageWrapElement.classList.remove("is-hidden");
  } else {
    imageElement.removeAttribute("src");
    imageElement.alt = "";
    imageWrapElement.classList.add("is-hidden");
  }

  choicesElement.innerHTML = "";

  renderFeedback(currentScreen);

  currentScreen.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice.text;
    button.classList.add("dynamic-screen__btn");

    button.addEventListener("click", () => {
      if (screens[choice.next]) {
        renderScreen(choice.next);
        return;
      }

      showScreen(choice.next);
    });

    choicesElement.appendChild(button);
  });

  showScreen("dynamic");
}

document.querySelectorAll("[data-go-to]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.goTo;

    if (screens[target]) {
      renderScreen(target);
      return;
    }

    showScreen(target);
  });
});

document.querySelectorAll(".site-nav__link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = link.getAttribute("href")?.replace("#", "");

    if (!target) {
      return;
    }

    event.preventDefault();
    navList?.classList.remove("is-open");

    if (screens[target]) {
      renderScreen(target);
      return;
    }

    showScreen(target);
  });
});

burgerButton?.addEventListener("click", () => {
  navList?.classList.toggle("is-open");
});
