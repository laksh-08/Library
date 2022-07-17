let library = document.querySelector('.library');
let form = document.querySelector('form');
let inputTitle = document.querySelector('#title');
let inputAuthor = document.querySelector('#author');
let inputPages = document.querySelector('#pages');
let inputRead = document.querySelector('#read');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    makeList();
})

library.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
        index = e.target.parentElement.dataset.id;
        myLibrary[index] = '';
        book = document.querySelector(`[data-id="${index}"`);
        book.remove();
    }
    if (e.target.className.includes('readBtn')) {
        e.target.classList.toggle('done');
        if (e.target.innerText === 'Not Read') {
            e.target.innerText = 'Read';
        } else if (e.target.innerText === 'Read') {
            e.target.innerText = 'Not Read';
        }
    }
})

let myLibrary = [];

function Book(title,author,pages,status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
    myLibrary.push(newBook);
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    inputRead.checked = false;
    console.log(myLibrary)

}

function makeList() {
    for(book in myLibrary) {
        index = myLibrary.indexOf(myLibrary[book]);
        if (myLibrary[book] === '') {
            continue;
        } else if (document.querySelector(`[data-id="${index}"]`) === null) {
        item = document.createElement('div');
        item.classList = 'book';
        item.dataset.id = myLibrary.indexOf(myLibrary[book])
        item.innerHTML = 
        `<p class=\"title\">${myLibrary[book].title}</p>
        <p class=\"author\">${myLibrary[book].author}</p>
        <p class=\"pages\">${myLibrary[book].pages}</p>`;
        btn = document.createElement('button');
        del = document.createElement('button');
        del.innerText = 'Delete';
        del.classList = 'delete';
        btn.innerText = 'Not Read';
        btn.className = 'readBtn'
        if (myLibrary[book].status === true) {
            btn.classList.toggle('done');
            btn.innerText = 'Read';
        }
        item.appendChild(btn);
        item.appendChild(del);
        library.appendChild(item);
    }
}
}

myLibrary.push(new Book('The Knights', 'Laksh', '133'))
myLibrary.push(new Book('Night Dreams', 'Kesav', '145'))
myLibrary.push(new Book('The Adventure', 'Abimanyu', '152'))


makeList()