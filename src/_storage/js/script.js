// HERO LINE ANIMATION START //
document.addEventListener("DOMContentLoaded", () => {
    const lineGrid = document.querySelector('.hero-grid');
    const gap = 64;
    const debounceDelay = 100; // Delay in milliseconds
    let debounceTimer;
    
    const generateLines = () => {
        lineGrid.innerHTML = '';
        const gridWidth = lineGrid.offsetWidth;
        const gridHeight = lineGrid.offsetHeight;
        const columns = Math.floor(gridWidth / gap);
        const rows = Math.floor(gridHeight / gap);
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                const line = document.createElement('div');
                line.classList.add('hero-line');
                const x = (col * gap) + (gap / 2);
                const y = (row * gap) + (gap / 2);
                line.style.left = `${x}px`;
                line.style.top = `${y}px`;
                const randomAngle = Math.random() * 360;
                const randomScale = Math.random() * 8;
                line.dataset.currentAngle = randomAngle;
                line.style.transform = `rotate(${randomAngle}deg) scale(${randomScale})`;
                lineGrid.appendChild(line);
            }
        }
        lineGrid.addEventListener('click', pointLinesToCursor);
        lineGrid.addEventListener('touchstart', pointLinesToCursor);
        RandomMouseClick()
    };
    const calculateAngle = (x1, y1, x2, y2) => {
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
        return angle;
    };
    const shortestRotation = (currentAngle, targetAngle) => {
        let difference = targetAngle - currentAngle;
        difference = ((difference + 180) % 360) - 180; 
        return currentAngle + difference;
    };
    const pointLinesToCursor = (event) => {
        const containerRect = lineGrid.getBoundingClientRect();
        const mouseX = event.clientX || (event.touches && event.touches[0].clientX);
        const mouseY = event.clientY || (event.touches && event.touches[0].clientY);
        if (
            mouseX >= containerRect.left &&
            mouseX <= containerRect.right &&
            mouseY >= containerRect.top &&
            mouseY <= containerRect.bottom
        ) {
            const lines = document.querySelectorAll('.hero-line');
            lines.forEach(line => {
                const lineRect = line.getBoundingClientRect();
                const lineX = lineRect.left + lineRect.width / 2;
                const lineY = lineRect.top + lineRect.height / 2;
                const targetAngle = calculateAngle(lineX, lineY, mouseX, mouseY);
                const currentAngle = parseFloat(line.dataset.currentAngle);
                const newAngle = shortestRotation(currentAngle, targetAngle);
                line.dataset.currentAngle = newAngle;
                const distance = Math.hypot(mouseX - lineX, mouseY - lineY) / 8;
                line.style.transform = `rotate(${newAngle}deg) scale(${Math.max(0.5, Math.min(distance, Math.random() * 64))})`;
            });
        }
    };
    const RandomMouseClick = () => {
        const containerRect = lineGrid.getBoundingClientRect();
        const randomX = Math.random() * (containerRect.width - gap) + containerRect.left;
        const randomY = Math.random() * (containerRect.height - gap) + containerRect.top;
        const lines = document.querySelectorAll('.hero-line');
        lines.forEach(line => {
            const lineRect = line.getBoundingClientRect();
            const lineX = lineRect.left + lineRect.width / 2;
            const lineY = lineRect.top + lineRect.height / 2;

            const targetAngle = calculateAngle(lineX, lineY, randomX, randomY);
            const currentAngle = parseFloat(line.dataset.currentAngle);

            const newAngle = shortestRotation(currentAngle, targetAngle);
            line.dataset.currentAngle = newAngle;
            line.style.transform = `rotate(${newAngle}deg) scale(${Math.random() * 40})`;
        });
    };
    generateLines();
    window.addEventListener('resize', () => {
        generateLines();
    });
});
// HERO LINE ANIMATION END //
