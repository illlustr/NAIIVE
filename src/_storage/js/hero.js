// HERO LINE LOGIC START //
document.addEventListener("DOMContentLoaded", () => {
    const lineGrid = document.querySelector('.hero-grid');
    const gap = 80;

    const generateLines = () => {
        lineGrid.innerHTML = '';
        const { offsetWidth: gridWidth, offsetHeight: gridHeight } = lineGrid;
        const columns = Math.floor(gridWidth / gap);
        const rows = Math.floor(gridHeight / gap);

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                createLine(col, row);
            }
        }

        ['click', 'touchstart'].forEach(event => lineGrid.addEventListener(event, pointLinesToCursor));
        RandomMouseClick();
    };

    const createLine = (col, row) => {
        const line = document.createElement('div');
        line.classList.add('hero-line');
        const x = (col * gap) + (gap / 2);
        const y = (row * gap) + (gap / 2);

        line.style.left = `${x}px`;
        line.style.top = `${y}px`;

        const randomAngle = Math.random() * 360;
        line.dataset.currentAngle = randomAngle;
        line.style.transform = `rotate(${randomAngle}deg)`;

        lineGrid.appendChild(line);
    };

    const calculateAngle = (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

    const shortestRotation = (currentAngle, targetAngle) => {
        let difference = targetAngle - currentAngle;
        return currentAngle + ((difference + 180) % 360) - 180;
    };

    const pointLinesToCursor = (event) => {
        const { left: gridLeft, top: gridTop, right: gridRight, bottom: gridBottom } = lineGrid.getBoundingClientRect();
        const mouseX = event.clientX || (event.touches && event.touches[0].clientX);
        const mouseY = event.clientY || (event.touches && event.touches[0].clientY);

        if (mouseX >= gridLeft && mouseX <= gridRight && mouseY >= gridTop && mouseY <= gridBottom) {
            const lines = document.querySelectorAll('.hero-line');
            lines.forEach(line => rotateLineToCursor(line, mouseX, mouseY));
        }
    };

    const rotateLineToCursor = (line, mouseX, mouseY) => {
        const { left: lineLeft, top: lineTop, width: lineWidth, height: lineHeight } = line.getBoundingClientRect();
        const lineX = lineLeft + (lineWidth / 2);
        const lineY = lineTop + (lineHeight / 2);
        const targetAngle = calculateAngle(lineX, lineY, mouseX, mouseY);
        const currentAngle = parseFloat(line.dataset.currentAngle);

        const newAngle = shortestRotation(currentAngle, targetAngle);
        line.dataset.currentAngle = newAngle;

        const distance = Math.hypot(mouseX - lineX, mouseY - lineY) / 8;
        line.style.transform = `rotate(${newAngle}deg) scale(${Math.max(0.5, Math.min(distance, Math.random() * 64))})`;
    };

    const RandomMouseClick = () => {
        const { left: gridLeft, top: gridTop, width: gridWidth, height: gridHeight } = lineGrid.getBoundingClientRect();
        const randomX = Math.random() * (gridWidth - gap) + gridLeft;
        const randomY = Math.random() * (gridHeight - gap) + gridTop;
        const lines = document.querySelectorAll('.hero-line');
        
        lines.forEach(line => {
            rotateLineToCursor(line, randomX, randomY);
        });
    };

    generateLines();
    window.addEventListener('resize', generateLines);
});

// HERO LINE LOGIC END //