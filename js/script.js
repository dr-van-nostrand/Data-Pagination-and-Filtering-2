const list = document.querySelector('.student-list');
const listItemChildren = list.children;
const maxPage = 10;
const showPage = (listItemChildren, pageNum) => {
	let startIndex = (pageNum * maxPage) - maxPage;
	let endIndex = pageNum * maxPage;
	for (let i = 0; i < listItemChildren.length; i++) {
		if ((i >= startIndex) && (i < endIndex)) {
			listItemChildren[i].style.display = 'block';
		} else {
			listItemChildren[i].style.display = 'none';
		}
	}
};
let pageNum = Math.ceil(listItemChildren.length / maxPage);
const appendPageLinks = (listItemChildren) => {
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
		btn.addEventListener('click', function(event){
         event.preventDefault(showPage(listItemChildren, 1 + i));
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
       });
     }
};
appendPageLinks(listItemChildren);
showPage(listItemChildren, 1);




// 6. Loop over pagination links to remove active class from all links
// 7. Add the active class to the link that was just clicked. You can identify that

// clicked link using ​event.target
// Create the `appendPageLinks function` to generate, append, and add functionality to the pagination buttons.
