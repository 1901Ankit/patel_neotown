// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// countdown
function animateNumber(id, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    document.getElementById(id).textContent = Math.floor(
      progress * (end - start) + start
    ).toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
function startAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateNumber("number1", 0, 48874, 2000);
      animateNumber("number2", 0, 5198, 2000);
      animateNumber("number3", 0, 1132, 2000);
      observer.unobserve(entry.target);
    }
  });
}
const observer = new IntersectionObserver(startAnimation, options);
const section = document.querySelector(".single-about-info");
observer.observe(section);



//faq[
let toggles = document.getElementsByClassName("togglefq");
let contentDiv = document.getElementsByClassName("contentfq");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.backgroundColor = "#55acee";
      toggles[i].style.color = "white";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.backgroundColor = "";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = 0;
        toggles[j].style.backgroundColor = "";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }

    toggles[i].scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
