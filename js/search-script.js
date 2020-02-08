const div = document.createElement('div');
const searchField = document.createElement('input');

const btn = document.createElement('button');
const listSearch = document.querySelector('.student-list');
const listItem = listSearch.children;

btn.innerHTML = "Search";

div.className = 'student-search';
document.querySelector('.page-header').appendChild(div);
document.querySelector('.student-search').appendChild(searchField);
document.querySelector('.student-search').appendChild(btn);
document.querySelector('input').placeholder = 'Search for students...';
btn.setAttribute('type','button');


const searchNames = (searchInput, names) => {
	for (let i = 0; i < names.length; i++) {
    names[i].style.display = 'none';
		if (searchInput.length != 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
			names[i].style.display = 'block';
		}
  } 
};


  btn.addEventListener('click', (event) => {
    event.preventDefault();   
    searchNames(searchField, listItem );
    wrongNames(searchField, listItem );

  });

  searchField.addEventListener('keyup', () => {
    searchNames(searchField, listItem );
  
  });