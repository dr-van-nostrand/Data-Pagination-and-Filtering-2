const list = document.querySelector('.student-list');
const listItemChildren = list.children;

const mainDiv = document.querySelector('.page');
const pageDiv = document.getElementsByClassName('page');

const maxPage = 10;

const showPage = (list, page) => {
	let startIndex = (page * maxPage) - maxPage;
	let endIndex = page * maxPage;
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i < endIndex) {
			list[i].style.display = "block";
		} else {
			list[i].style.display = "none";
		}
	}
}

// Create Search field and Button
const div = document.createElement('div');
const searchField = document.createElement('input');
const btn = document.createElement('button');

btn.innerHTML = "Search";
div.className = 'student-search';
document.querySelector('.page-header').appendChild(div);
document.querySelector('.student-search').appendChild(searchField);
document.querySelector('.student-search').appendChild(btn);
document.querySelector('input').placeholder = 'Search for students...';
btn.setAttribute('type', 'button');
btn.addEventListener('click', function () {
	searchNames(listItemChildren );
});
searchField.addEventListener('keyup', function () {
	searchNames(listItemChildren);
});

//No result div
const noResultDiv = document.createElement('div');
const noResultMessage = document.createElement('h3');
noResultDiv.className = 'no result';

noResultMessage.textContent = 'No data to be shown.';
noResultDiv.appendChild(noResultMessage);
noResultMessage.style.display = 'none';
mainDiv.appendChild(noResultDiv);

//search Funtion
function searchNames(list) {
	let searchStudents = [];

	const paginationDiv = document.getElementsByClassName('pagination');
	if(paginationDiv.length != 0) {
		pageDiv[0].removeChild(paginationDiv[0]);
	}
	for (let i = 0; i < list.length; i++) {
		list[i].style.display = 'none';
		if (searchField.value.length != 0 && list[i].textContent.toLowerCase().includes(searchField.value.toLowerCase())) {
			list[i].style.display = 'block';
			searchStudents.push(list);
		}
	}
	if ( searchStudents.length === 0 ) {
		noResultMessage.style.display = 'block';
		noResultDiv.style.display = 'block';
	} else {
		noResultDiv.style.display = 'none';
		showPage(searchStudents, 1);
		appendPageLinks(searchStudents);
	}    console.log(searchStudents);
}

//Append Page Links Funtion

let pageNum = Math.ceil(listItemChildren.length / maxPage);
function appendPageLinks (list) {
	const div = document.createElement('div');
	const ul = document.createElement('ul');
	div.className = 'pagination';
	document.querySelector('.page').appendChild(div);
	document.querySelector('.pagination').appendChild(ul);

	for (let i = 1; i <= pageNum; i++) {
		const li = document.createElement('li');
		li.innerHTML = "<a href='#'>" + i + "</a>";
		ul.appendChild(li);
	};
	for (let i = 0; i < pageNum; i++) {
		const btn = document.getElementsByTagName('a')[i];
		btn.addEventListener('click', function(event) {
			event.preventDefault(showPage(list, 1 + i));
		});
	};
	for (let i = 0; i < pageNum; i++) {
		const btns = document.getElementsByTagName('a')[i];
		btns.addEventListener("click", function() {
			const clicked = document.getElementsByClassName('active');
			// // If there's no active class
			if (clicked.length > 0) {
				clicked[0].className = clicked[0].className.replace('active', "");
			}
			// // Add the active class to the current/clicked button
			this.className += 'active';
		})
	}
}

showPage(listItemChildren, 1);
appendPageLinks(listItemChildren);