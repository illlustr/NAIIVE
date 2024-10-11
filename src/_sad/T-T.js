const catched = {};
async function cat(ch) {
    if (catched[ch]) { return catched[ch]; }
    const sad = import.meta.url; const promises = fetch(`${sad.substring(0, sad.lastIndexOf('/'))}/${ch}.html`).then((response) => {
        if (!response.ok) { throw new Error(`😭 Error catching = ${ch}.html`); } return response.text();
    });
    catched[ch] = promises; return promises;
}
function turn(th, is) {
    const dom = new DOMParser(); const doc = dom.parseFromString(is, 'text/html');
    th.forEach((i, s) => {
        const id = doc.querySelector(`[T-T="${s}"]`);
        if (id) {
            const up = i.trim().replace(/\n/g, '');
            switch (id.tagName) {
                case 'IMG': id.src = up; break;
                case 'A': id.href = up; id.innerHTML = up; break;
                case 'BUTTON': id.setAttribute('onclick', `window.open('${up}'); return true;`); break;
                default: id.innerHTML = up; 
            }
        }
    }); return doc.body.innerHTML;
}
async function sad() {
    const pains = document.querySelectorAll('[😭]');
    const promises = Array.from(pains).map(async (pain) => {
        const th = pain.innerHTML.trim().split('||');
        const is = await cat(pain.getAttribute('😭'));
        pain.outerHTML = turn(th, is);
    }); await Promise.all(promises);
}
window.addEventListener('DOMContentLoaded', sad);
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░ Title: Simply Awful Design
// ░░█▀█░█▀█░█░░░█░░░█░█░█▀▀░░ Act: replace 😭 element with T-T template
// ░░█░█░█▀█░░▀▄░░▀▄░▀▄▀░█▀▀░░ Cast[ user device ]
// ░░▀░▀░▀░▀░░░▀░░░▀░░▀░░▀▀▀░░ Writers[ illlustr ]
// ░ Projects ░░░░░░░░░░░░░░░░ https://github.com/naiiveprojects
