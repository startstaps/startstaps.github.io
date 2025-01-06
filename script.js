// script.js
const treeData = {
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

// Установка размеров и отступов
const margin = { top: 20, right: 120, bottom: 20, left: 120 },
    width = 960 - margin.right - margin.left,
    height = 600 - margin.top - margin.bottom;

// Создание svg-контейнера
const svg = d3.select("svg")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Создание дерева
const tree = d3.tree().size([height, width]);

// Преобразование данных в формат для D3
const root = d3.hierarchy(treeData);

// Генерация узлов и связей
tree(root);

// Связи
svg.selectAll(".link")
    .data(root.links())
    .enter().append("path")
    .attr("class", "link")
    .attr("d", d3.linkVertical()
        .x(d => d.y)
        .y(d => d.x));

// Узлы
const node = svg.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
    .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
    .attr("transform", d => `translate(${d.y},${d.x})`);

// Добавление круга к узлам
node.append("circle")
    .attr("r", 10);

// Добавление текста к узлам
node.append("text")
    .attr("dy", 3)
    .attr("x", d => d.children ? -12 : 12)
    .style("text-anchor", d => d.children ? "end" : "start")
    .text(d => d.data.name);