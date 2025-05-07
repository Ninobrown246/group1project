const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
let showingFirst = true;

setInterval(() => {
    if (showingFirst) {
        slide1.classList.replace('opacity-100', 'opacity-0');
        slide2.classList.replace('opacity-0', 'opacity-100');
    } else {
        slide1.classList.replace('opacity-0', 'opacity-100');
        slide2.classList.replace('opacity-100', 'opacity-0');
    }
    showingFirst = !showingFirst;
}, 3000); // switch every 3 seconds