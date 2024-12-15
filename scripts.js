document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector(".switch input");
  const fullscreenSection = document.querySelector(".fullscreen-section");

  function updateTextAndStyles() {
    const budgetText = document.querySelector(".budget-text");
    const contractText = document.querySelector(".contract-text");

    const date1Element = document.querySelector(".date-1");
    const date2Element = document.querySelector(".date-2");
    const date3Element = document.querySelector(".date-3");
    const date4Element = document.querySelector(".date-4");

    if (checkbox.checked) {
      budgetText.style.color = "#aeaeae";
      contractText.style.color = "#1e4391";

      date1Element.textContent = "20.06 - 23.09";
      date2Element.textContent = "20.06 - 28.10";
      date3Element.textContent = "04.07 - 13.08 и 22.08 - 24.09";
      date4Element.textContent = "04.07 - 13.08 и 22.08 - 29.10";
    } else {
      budgetText.style.color = "#1e4391";
      contractText.style.color = "#aeaeae";

      date1Element.textContent = "20.06 - 08.08";
      date2Element.textContent = "20.06 - 08.08";
      date3Element.textContent = "04.07 - 13.08";
      date4Element.textContent = "04.07 - 13.09 и 22.08 - 12.09";
    }
  }

  function handleStickyHeader() {
    let lastScrollTop = 0;
    const header = document.querySelector(".header");
    const content = document.querySelector(".fullscreen-section");

    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        header.classList.remove("sticky");
      } else {
        header.classList.add("sticky");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  handleStickyHeader();
  updateTextAndStyles();

  checkbox.addEventListener("change", updateTextAndStyles);
});
