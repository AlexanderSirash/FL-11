const rootNode = document.getElementById('root');
const newActionButton = rootNode.querySelector('.action-button');
const newActionInput = rootNode.querySelector('.new-action_input');
const toDoList = rootNode.querySelector('.to-do-list');
const error = rootNode.querySelector('.error-notification');

const MAX_ITEMS = 10;
let dragNdropSource;

// Handle new action controls
newActionInput.addEventListener('input', (e) => {
    validateActionInput(e.target.value);
});

newActionButton.addEventListener('click', () => {
    buildTodoItem(newActionInput.value.trim());
    refreshActionField();
});

// Handle actions with to-do item
toDoList.addEventListener('click', (e) => {
    const target = e.target;

    // complete to-do
    if (target.classList.contains('checkbox')) {
        target.setAttribute('disabled', '');
        target.closest('.list-element').classList.add('disabled');
        return;
    }

    // init edit mode
    if (target.textContent === 'create') {
        const currentTodo = target.closest('.list-element');
        currentTodo.classList.add('edit');

        const value = currentTodo
            .querySelector('.item')
            .querySelector('span').innerText.trim();

        currentTodo.querySelector('.item-change')
            .querySelector('input').value = value;
    }

    // update to-do
    if (target.textContent === 'save') {
        const currentTodo = target.closest('.list-element');
        const value = currentTodo
            .querySelector('.item-change')
            .querySelector('input').value.trim();

        currentTodo.querySelector('.item__label').innerText = value;
        target.closest('li').classList.remove('edit');
    }

    // remove to-do
    if (target.textContent === 'delete') {
        target.closest('.list-element').remove();
        refreshActionField();
    }
});

// Handle drag and drop events
toDoList.addEventListener('dragstart', (e) => {
    onDragStarted(e);
}, false);

toDoList.addEventListener('dragover', (e) => {
    onDraggingOver(e);
}, false);
toDoList.addEventListener('drop', (e) => {
    onDropped(e);
}, false);

// To-do helpers
function isTodoListFull() {
    return toDoList.children.length >= MAX_ITEMS;
}

function refreshActionField() {
    const isFull = isTodoListFull();

    newActionInput.toggleAttribute('disabled', isFull);
    newActionButton.toggleAttribute('disabled', isFull);
    error.classList.toggle('hidden', !isFull);
}

function validateActionInput(value) {
    const isEmptyField = !/\S/.test(value);
    newActionButton.toggleAttribute('disabled', isEmptyField);
}

function buildTodoItem(todoText) {
    if (isTodoListFull()) {
        return;
    }

    const li = document.createElement('li');
    li.setAttribute('draggable', 'true');
    li.classList.add('list-element');

    const viewField = buildViewField(todoText);
    const editField = buildEditField(todoText);
    const deleteControl = buildDeleteControl();

    li.append(viewField, editField, deleteControl);

    toDoList.appendChild(li);
}

function buildViewField(todoText) {
    const span = document.createElement('span');
    span.classList.add('item');

    const label = document.createElement('label');
    const input = document.createElement('input');
    const labelSpan = document.createElement('span');
    const labelText = document.createTextNode(todoText);

    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox');
    labelSpan.classList.add('item__label');
    labelSpan.appendChild(labelText);

    label.append(input, labelSpan);

    const icon = buildIcon('create');

    span.append(label, icon);

    return span;
}

function buildEditField(todoText) {
    const span = document.createElement('span');
    span.classList.add('item-change');

    const label = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = todoText;
    label.appendChild(input);

    const icon = buildIcon('save');

    span.append(label, icon);

    return span;
}

function buildDeleteControl() {
    const icon = buildIcon('delete');
    const span = document.createElement('span');
    span.classList.add('delete-button');

    span.appendChild(icon);

    return span;
}

function buildIcon(iconType) {
    const icon = document.createElement('i');
    const iconText = document.createTextNode(iconType);

    icon.classList.add('material-icons');
    icon.appendChild(iconText);

    return icon;
}

// drag and drop handlers
function onDragStarted(e) {
    if (!e.target.classList.contains('list-element')) {
        return;
    }

    dragNdropSource = e.target;
    e.dataTransfer.setData('text/plain', e.target.innerHTML);
    e.dataTransfer.effectAllowed = 'move';
}

function onDraggingOver(e) {
    if (!e.target.classList.contains('list-element')) {
        return;
    }

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function onDropped(e) {
    if (!e.target.classList.contains('list-element')) {
        return;
    }

    e.preventDefault();
    e.stopPropagation();

    dragNdropSource.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/plain');
}
