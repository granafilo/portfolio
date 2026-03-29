import "./style.css";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    normalizeScroll: true,
    ignoreMobileResize: true,
    preventDefault: true
});

const horizontalSection = document.querySelector("#horizontal");
const contents = gsap.utils.toArray("#horizontal .content");

// Calcoliamo quanto deve scorrere lo slider (larghezza totale meno una card)
// Questo assicura che lo scroll si fermi correttamente
let scrollAmount = horizontalSection.scrollWidth - window.innerWidth;

gsap.to(horizontalSection, {
    x: -scrollAmount,
    ease: "none",
    scrollTrigger: {
        trigger: "#horizontal",
        pin: true,
        scrub: 1,
        // Durata dello scroll proporzionale alla lunghezza del contenuto
        end: () => "+=" + scrollAmount,
        snap: {
            // Lo snap deve basarsi sulla distanza tra i centri delle card
            snapTo: 1 / (contents.length - 1),
            duration: 0.5,
            delay: 0.1
        }
    }
});


const diffElement = document.querySelector('.diff'); // o un ID specifico

// diffElement.addEventListener('mousedown', (e) => e.stopPropagation());
// diffElement.addEventListener('touchstart', (e) => e.stopPropagation());



document.getElementById('theme-toggle').addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {

        // 1. Trova la card che contiene il bottone cliccato
        const card = e.target.closest('.card');

        const type = btn.getAttribute('data-type');

        const modal = document.querySelector("#my_modal");

        // 2. Cerca l'elemento con la descrizione dentro QUELLA specifica card
        const longText = card.querySelector('.description').innerHTML;
        const cardImgSrc = card.querySelector('.project-img').src;
        const imgWrapper = modal.querySelector("#modalImgWrapper");
        const cardTitle = card.querySelector(".project-title").innerHTML;

        console.log(type)

        if (type == "special") {
            imgWrapper.innerHTML = `
            <div class="diff aspect-video w-full! h-auto!" tabindex="0">
              <div class="diff-item-1" role="img" tabindex="0">
                <img alt="daisy" class="object-fit" src="/img/restyle-vecchio.png" />
              </div>
              <div class="diff-item-2" role="img">
                <img class="project-img object-fit" alt=" daisy" src=${cardImgSrc} />
              </div>
              <div class="diff-resizer"></div>
            </div>`;

            console.log(imgWrapper.innerHTML)
        } else {
            imgWrapper.innerHTML = `
            <img id="modal-img" class="rounded-25 aspect-video  object-cover" src="${cardImgSrc}" alt="">`
            // document.querySelector('#modal-img').setAttribute("src", cardImgSrc);
        }
        const link = card.querySelector(".repo-link").href;
        console.log(link)

        // console.log(longText, cardTitle, cardTitleSrc);
        // 3. Inserisci nel modal
        document.querySelector('#card-title').innerHTML = cardTitle;
        document.querySelector('#modal-text').innerHTML = longText;
        modal.querySelector("#repo-link").href = link;

        console.log(modal.querySelector("#repo-link").href)
        // document.querySelector('#modal-img').setAttribute("src", cardImgSrc);

        modal.showModal();
    });
});
