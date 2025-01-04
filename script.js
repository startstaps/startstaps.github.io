let svg = document.getElementById('tree');
let nodes = []; // Массив для хранения узлов

function addNode() {
    const name = prompt("Введите имя:");
    if (name) {
        const newNode = {
            id: nodes.length,
            name: name,
            x: Math.random() * 700 + 50, // Случайная позиция по оси X
            y: Math.random() * 500 + 50  // Случайная позиция по оси Y
        };
        nodes.push(newNode);
        drawTree();
    }
}

function drawTree() {
    svg.innerHTML = ''; // Очищаем SVG перед перерисовкой

    nodes.forEach(node => {
        // Рисуем узел
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute('class', 'node');
        circle.setAttribute('cx', node.x);
        circle.setAttribute('cy', node.y);
        circle.setAttribute('r', 20);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute('class', 'text');
        text.setAttribute('x', node.x);
        text.setAttribute('y', node.y + 5); // Центрируем текст
        text.textContent = node.name;

        svg.appendChild(circle);
        svg.appendChild(text);
    });
}