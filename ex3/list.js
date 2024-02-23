document.getElementById("todoList").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "LI") {
        e.target.style.color = getRandomColor();
    }
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function addTodo() {
    var name = document.getElementById('todo-name').value;
    var content = document.getElementById('todo-content').value;
    var list = document.getElementById('todo-list');
    
    if (name && content) {
        var entry = document.createElement('li');
        entry.innerHTML = `<strong>${name}</strong>: ${content}`;
        entry.onclick = function() {
            this.style.color = getRandomColor();
        };
        list.appendChild(entry);
        
    
        document.getElementById('todo-name').value = '';
        document.getElementById('todo-content').value = '';
    } else {
        alert('Please enter both name and content for the todo.');
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
