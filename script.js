let todoInput //uzytkownik wpisze tresc zadania
let erroInfo // info o braku zadan
let addBtn // przycisk ADD
let ulList // lista zadan, tagi UL
let newTodo // nowo dodany LI

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	erroInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
}
const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        todoInput.value = ''
        erroInfo.textContent = ''
	} else {
		erroInfo.textContent = 'Wpisz treść zadania'
	}
}

document.addEventListener('DOMContentLoaded', main)
