import "./style.css";
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
var slider = new KeenSlider("#my-keen-slider", {
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 1.5, spacing: 25 },
    range: {
        min: -100,
        max: 100,
    },
})

document.getElementById('theme-toggle').addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
