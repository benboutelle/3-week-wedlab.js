console.log(` hello world`)


document.querySelector('form').addEventListener('submit', addMovie)
const message = document.querySelector('#message')


function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value

    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)


        const list = document.querySelector('ul')
        list.appendChild(movie)
        inputField = ' '
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'

}

function crossOffMovie(event) {
    event.target.classList.toggle('checked') 

    if (event.target.classList.contain('.checked') === true) {
        message.textContent = "movie watched!"
    } else {
        message.textContent = "movie added back"
    }
}