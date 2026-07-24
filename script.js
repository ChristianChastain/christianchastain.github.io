
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    function sizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

    sizeCanvas();

    const characters = "アァイィウヴエカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    function drawMatrixRain() {
    ctx.fillStyle = "rgba(2, 4, 3, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff66";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
    const text = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
    drops[i] = 0;
}

    drops[i]++;
}
}

    setInterval(drawMatrixRain, 45);

    window.addEventListener("resize", () => {
    sizeCanvas();
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
});

    const phrases = [
    "Software Engineer",
    "IT Professional",
    "Application Developer",
    "Problem Solver"
    ];

    const typedText = document.getElementById("typed-text");
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
    typedText.textContent = currentPhrase.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
    deleting = true;
    setTimeout(typeLoop, 1200);
    return;
}
} else {
    typedText.textContent = currentPhrase.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
}
}

    setTimeout(typeLoop, deleting ? 45 : 80);
}

    typeLoop();
