const variants = [
    {
        count: {
            min: 25,
            max: 75
        }
    },
    {
        count: {
            min: 25,
            max: 75
        }
    },
    {
        count: {
            min: 25,
            max: 75
        }
    },
    {
        count: {
            min: 25,
            max: 75
        }
    },
    {
        count: {
            min: 25,
            max: 75
        }
    },
    {
        count: {
            min: 5,
            max: 25
        },
        link: 'https://www.instagram.com/cutiepatootierecords'
    }
]

window.addEventListener('load', () => {
    const fragment = new DocumentFragment();
    for (let i = 0; i < variants.length; i++) {
        const variant = variants[i];
        for (let j = 0; j < randomRange(...Object.values(variant.count)); j++) {
            const element = document.createElement('span');
            element.className = `variant${i + 1}`;
            element.style.left = `${randomRange(-25, 100)}%`;
            element.style.top = `${randomRange(-25, 100)}%`;
            element.style.setProperty('--blur-radius', `${randomRange(0, 8)}px`);
            element.style.setProperty('--drop-shadow-radius', `${randomRange(0, 20)}px`);
            element.style.setProperty('--float-delay', `-${randomRange(0, 2)}s`);
            element.style.setProperty('--float-duration', `${randomRange(2, 10)}s`);
            element.style.setProperty('--opacity', randomRange(0.5, 1));
            element.style.setProperty('--rotation', `${randomSign()}${randomRange(0, 0.01)}turn`);
            if (variant.link) {
                const anchor = document.createElement('a');
                anchor.href = variant.link;
                anchor.appendChild(element);
                fragment.appendChild(anchor);
            }
            else {
                fragment.appendChild(element);
            }
        }
    }
    document.body.appendChild(fragment);
});

function randomRange(min, max) {
    return min + Math.random() * (max - min);
}

function randomSign() {
    return Math.random() < 0.5 ? '' : '-';
}