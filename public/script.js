// Function to detect user agent
function detectUserAgent() {
    const userAgent = navigator.userAgent.toLowerCase();
    // Example condition: Check if the user is on a mobile device
    if (userAgent.includes('linux')) {
        console.log("Linux User spotted!")
        return true; // Mobile user detected
    }
    return false; // Not a mobile user
}

document.addEventListener('DOMContentLoaded', function () {

    // Matrix effect
    const canvas = document.getElementById('canv');
    const ctx = canvas.getContext('2d');

    // const w = canvas.width = document.body.offsetWidth;
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;
    // const h = canvas.height = document.body.offsetHeight;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    function matrix() {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = '#333';
        ctx.font = '15pt monospace';

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 20;
        });
    }

    setInterval(matrix, 50);
});



