let todoInput //uzytkownik wpisze tresc zadania
let erroInfo // info o braku zadan
let addBtn // przycisk ADD
let ulList // lista zadan, tagi UL
let newTodo // nowo dodany LI

let popup // popup
let popupInfo // tekst w popupie
let todoToEdit // edytywany Todo
let popupInput // input w popupie
let popupAddBtn // przycisk "zatwierdz"
let popupCloseBtn // przycisk "anuluj"

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	erroInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')

	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopUp)
}

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		createToolsArea()

		ulList.append(newTodo)
		todoInput.value = ''
		erroInfo.textContent = ''
	} else {
		erroInfo.textContent = 'Wpisz treść zadania'
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTodo.append(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo()
	} else if (e.target.matches('.delete')) {
		console.log('delete')
	}
}

const editTodo = () => {
    popup.style.display = 'flex'
}

const closePopUp = () => {
    popup.style.display = 'none'
}


document.addEventListener('DOMContentLoaded', main)

