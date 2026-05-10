function randomRange(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return min + Math.random() * (max - min);
}

fetch('variants.json').then(response => response.json()).then(variants => {
    const fragment = new DocumentFragment();
    variants.forEach(({ color, content, count, fontSize, link }) => {
        for (let i = 0; i < randomRange(count.min, count.max); i++) {
            let element;
            if (link) {
                element = document.createElement('a');
                element.href = link;
            }
            else {
                element = document.createElement('span');
            }
            element.style.fontSize = fontSize;
            element.style.left = `${randomRange(-25, 100)}%`;
            element.style.top = `${randomRange(-25, 100)}%`;
            element.style.setProperty('--blur-radius', `${randomRange(8)}px`);
            element.style.setProperty('--color', color);
            element.style.setProperty('--drop-shadow-radius', `${randomRange(20)}px`);
            element.style.setProperty('--fade-delay', `${randomRange(2)}s`);
            element.style.setProperty('--float-delay', `-${randomRange(2)}s`);
            element.style.setProperty('--float-duration', `${randomRange(2, 10)}s`);
            element.style.setProperty('--opacity', randomRange(0.5, 1));
            element.style.setProperty('--rotation', `${randomRange(-0.01, 0.01)}turn`);
            element.style.setProperty('--z-position', `${randomRange(-500, 500)}px`);
            element.textContent = content;
            fragment.appendChild(element);
        }
    });
    document.body.appendChild(fragment);
});

let deltaY = 0;

window.addEventListener('wheel', event => {
    requestAnimationFrame(() => {
        document.body.style.setProperty('--delta-y', `${deltaY += event.deltaY}px`);
    })
}, { passive: true });