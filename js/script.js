const list = document.querySelector('.student-list');
const listItemChildren = list.children;
const maxPage = 10;
const pageDiv = document.querySelector(".page");
const pageNum = Math.ceil(listItemChildren.length / maxPage);

// ShowPage Function
const showPage = (list, page) => {
	let startIndex = (page * maxPage) - maxPage;
	let endIndex = page * maxPage;
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i < endIndex) {
			list[i].style.display = 'block';
		} else {
			list[i].style.display = 'none';
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
btn.addEventListener('click', function() {
	searchNames(listItemChildren);
});
searchField.addEventListener('keyup', function() {
	searchNames(listItemChildren);
});

//No result div
const noResultDiv = document.createElement('div');
const noResultMessage = document.createElement('h3');
const mainDiv = document.querySelector('.page');
noResultDiv.className = 'no result';
noResultMessage.textContent = 'No data to be shown.';
noResultDiv.appendChild(noResultMessage);
noResultMessage.style.display = 'none';
mainDiv.appendChild(noResultDiv);

//search Funtion
function searchNames(list) {
	let searchStudents = [];
	for (let i = 0; i < list.length; i++) {
		list[i].style.display = 'none';
		if (searchField.value.length != 0 && list[i].querySelector('h3').textContent.toLowerCase().includes(searchField.value.toLowerCase())) {
			searchStudents.push(list[i]);
		}
	}
	if (searchStudents.length === 0) {
		noResultMessage.style.display = 'block';
		noResultDiv.style.display = 'block';
	} else {
		noResultDiv.style.display = 'none';
		showPage(searchStudents, 1);
		appendPageLinks(searchStudents);
	}
}

//Append Page Links Funtion
const appendPageLinks = (list) => {
	const paginationDiv = document.getElementsByClassName('pagination');
	if (paginationDiv.length != 0) {
		let removeDiv = document.querySelector(".pagination");
		pageDiv.removeChild(removeDiv);
	}
	
	const div = document.createElement('div');
	div.className = 'pagination';
	const ul = document.createElement('ul');
	document.querySelector('.page').appendChild(div);
	div.appendChild(ul);
	for (let i = 1; i <= pageNum; i++) {
		const li = document.createElement('li');
		li.innerHTML = "<a href='#'>" + i + "</a>";
		ul.appendChild(li);
		ul.firstElementChild.firstElementChild.className = 'active';
	}
	for (let i = 0; i < pageNum; i++) {
		const btn = document.getElementsByTagName('a')[i];
		btn.addEventListener('click', function(event) {
			event.preventDefault(showPage(list, 1 + i));
		});
	}
	for (let i = 0; i < pageNum; i++) {
		let btns = document.getElementsByTagName('a')[i];
		btns.addEventListener("click", function(e) {
			const clicked = document.getElementsByClassName('active')
			// // If there's no active class
			if (clicked.length > 0) {
				clicked[0].className = clicked[0].className.replace('active', "");
			}
			// // Add the active class to the current/clicked button
			e.target.classList.add("active");
			showPage(list, e.target.textContent);
		})
	}
}

showPage(listItemChildren, 1);
appendPageLinks(listItemChildren);