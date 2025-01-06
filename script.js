// script.js
const familyTreeData = {
    name: "Прадедушка",
    children: [
        {
            name: "Дедушка",
            children: [
                { name: "Отец", children: [] },
                { name: "Дядя", children: [] }
            ]
        },
        {
            name: "Бабушка",
            children: [
                { name: "Тетя", children: [] }
            ]
        }
    ]
};

function createNode(data) {
    const node = document.createElement('div');
    node.className = 'node';
    node.innerText = data.name;

    if (data.children.length > 0) {
        const line = document.createElement('div');
        line.className = 'line';
        node.appendChild(line);

        const childrenContainer = document.createElement('div');
        childrenContainer.style.display = 'flex';
        data.children.forEach(child => {
            const childNode = createNode(child);
            childrenContainer.appendChild(childNode);
        });
        node.appendChild(childrenContainer);
    }

    return node;
}

const familyTreeContainer = document.getElementById('family-tree');
const familyTreeNode = createNode(familyTreeData);
familyTreeContainer.appendChild(familyTreeNode);