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
    for (let i = 0; i < variants.length; i++) {
        const variant = variants[i];
        for (let j = 0; j < randomRange(variant.count.min, variant.count.max); j++) {
            const element = document.createElement('span');
            element.className = 'variant' + (i + 1);
            element.style.animation = `float ${randomRange(2, 10)}s ease-in-out -${randomRange(0, 2)}s infinite`;
            element.style.filter = `blur(${randomRange(0, 8)}px)`;
            element.style.opacity = randomRange(0.5, 1);
            element.style.setProperty('--position-x', randomRange(-25, 100) + 'vw');
            element.style.setProperty('--position-y', randomRange(-25, 100) + 'vh');
            element.style.setProperty('--rotation', `${randomSign()}${randomRange(0, 0.01)}turn`);
            if (variant.link) {
                const anchor = document.createElement('a');
                anchor.href = variant.link;
                anchor.appendChild(element);
                document.body.appendChild(anchor);
            }
            else {
                document.body.appendChild(element);
            }
        }
    }
});

function randomRange(min, max) {
    return min + Math.random() * (max - min);
}

function randomSign() {
    return Math.random() < 0.5 ? '' : '-';
}