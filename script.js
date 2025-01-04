let tree = document.getElementById('tree');

function addNode() {
    const name = prompt("Введите имя:");
    if (name) {
        const newNode = document.createElement('div');
        newNode.classList.add('node');
        newNode.innerText = name;

        // Вставляем новый узел в дерево
        if (tree.children.length > 0) {
            const parent = tree.lastChild; // Добавляем к последнему элементу
            const container = document.createElement('div');
            container.appendChild(newNode);
            parent.appendChild(container);
        } else {
            tree.appendChild(newNode); // Если дерево пустое, просто добавляем узел
        }
    }
}