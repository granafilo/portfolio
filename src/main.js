import "./style.css";
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

window.addEventListener("load", () => {
    // Sposta qui il codice del tuo KeenSlider
    var slider = new KeenSlider("#my-keen-slider", {
        loop: true,
        mode: "free-snap",
        slides: { origin: "center", perView: 2, spacing: 25 },
        range: {
            min: -50,
            max: 50,
        },
    })
});

const diffElement = document.querySelector('.diff'); // o un ID specifico

diffElement.addEventListener('mousedown', (e) => e.stopPropagation());
diffElement.addEventListener('touchstart', (e) => e.stopPropagation());



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
