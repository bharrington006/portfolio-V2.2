/* Portfolio — design-story toggles.
   Each project <section> owns one .story panel and one .story-toggle__btn.
   The button flips an .is-open class on the section (CSS swaps the icon and
   label) and the hidden attribute on the panel. */
(function () {
  "use strict";

  var buttons = document.querySelectorAll("[data-story-toggle]");

  Array.prototype.forEach.call(buttons, function (button) {
    var section = button.closest(".project");
    var story = section && section.querySelector(".story");
    if (!story) return;

    var sync = function (open) {
      section.classList.toggle("is-open", open);
      story.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
    };

    sync(section.classList.contains("is-open"));

    button.addEventListener("click", function () {
      sync(!section.classList.contains("is-open"));
    });
  });
})();
