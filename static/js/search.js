const nav = document.querySelector('.nav-right');
const openSearch = document.querySelector('#search-open');

const inputWrapper = document.querySelector('.search-wrapper');
const searchForm = document.querySelector('#search-form');  
const input = document.querySelector('#search');  // input content

const closeSearch = document.querySelector('.input-close'); // close button
const submitButton = document.querySelector('#submit')  // search button



let open = false;

openSearch.addEventListener("click", openSearchField);
closeSearch.addEventListener('click', closeSearchField);
searchForm.addEventListener('submit', onSearch);
input.addEventListener('blur', closeSearchField); // !!! optional


function openSearchField () {
  nav.classList.add('hidden');
  inputWrapper.classList.remove('hidden');
  input.focus();
  open = true;
}


function closeSearchField () {
  nav.classList.remove('hidden');
  inputWrapper.classList.add('hidden');
  open = false;
}

function onSearch (e) {
  e.preventDefault();
  console.log('submit search:', input.value)
  // to do something
}