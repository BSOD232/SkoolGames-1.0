var interstellarLinks = [
    "https://anotherwinfortheogs.onrender.com/",
    "https://mathlessons-8szb.onrender.com/",
    "https://endeavor.autumn.shekinahphotography.com/",
    "https://mathlessons-8szb.onrender.com/",
    "https://anotherwinfortheogs.onrender.com/",
    "https://greatgrade.meexpress.net/",
    "https://greatgrade.meexpress.net/"
]

function openProxy(proxyName) {
    if (proxyName == "interstellar") {
        const randomIndex = Math.floor(Math.random() * interstellarLinks.length);

        const randomLink = interstellarLinks[randomIndex];

        window.open(randomLink);
    }
}