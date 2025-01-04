let svg = document.getElementById('tree');
let nodes = []; // Массив для хранения узлов
let idCounter = 0; // Счетчик ID для узлов

// Начальный узел (корень дерева)
const root = {
    id: idCounter++,
    name: 'Корень',
    x: 400,
    y: 50,
    children: []
};

nodes.push(root);

function addNode() {
    const name = prompt("Введите имя:");
    const parentId = parseInt(prompt("Введите ID родителя (или оставьте пустым для корня):")) || root.id;

    const parentNode = nodes.find(node => node.id === parentId);
    
    if (name && parentNode) {
        const newNode = {
            id: idCounter++,
            name: name,
            x: parentNode.x + (Math.random() * 100 - 50), // Случайная позиция по оси X относительно родителя
            y: parentNode.y + 100, // Позиция ниже родителя
            children: []
        };

        parentNode.children.push(newNode);
        nodes.push(newNode);
        drawTree();
    } else {
        alert("Ошибка: имя не введено или родитель не найден.");
    }
}

function drawTree() {
    svg.innerHTML = ''; // Очищаем SVG перед перерисовкой
    drawNode(root);
}

function drawNode(node) {
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

    // Рисуем линии к потомкам
    node.children.forEach(child => {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute('class', 'line');
        line.setAttribute('x1', node.x);
        line.setAttribute('y1', node.y + 20); // Нижняя часть круга родителя
        line.setAttribute('x2', child.x);
        line.setAttribute('y2', child.y - 20); // Верхняя часть круга ребенка
        svg.appendChild(line);

        drawNode(child); // Рекурсивно рисуем потомков
    });
}