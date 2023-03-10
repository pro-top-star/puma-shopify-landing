var acc = document.getElementsByClassName("faq-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("active");
        var arrow = this.lastElementChild.lastElementChild;

        if (arrow.classList.contains('up')) {
            arrow.classList.remove('up');
            arrow.classList.add('down');
        } else {
            arrow.classList.remove('down');
            arrow.classList.add('up');
        }
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// const accordionTitles = document.querySelectorAll(".faq-accordion");

// accordionTitles.forEach((accordionTitle) => {
//     accordionTitle.addEventListener("click", () => {
//         if (accordionTitle.classList.contains("active")) {
//             accordionTitle.classList.remove("active");
//         } else {
//             const accordionTitlesWithIsOpen = document.querySelectorAll(".active");
//             accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
//                 accordionTitleWithIsOpen.classList.remove("active");
//             });
//             accordionTitle.classList.add("active");
//             var panel = accordionTitle.nextElementSibling;
//             if (panel.style.maxHeight) {
//                 panel.style.maxHeight = null;
//             } else {
//                 panel.style.maxHeight = panel.scrollHeight + "px";
//             }
//         }
//     });
// });