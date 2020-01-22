/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 

   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

   
 
   // list.getElementsByClassName("student-item")[30].style.backgroundColor = "red";


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/



const list = document.querySelector('.student-list');
const listItemChildren = list.children;

const maxPage = 10;

const showPage = (listItemChildren, pageNum ) => {
   let startIndex = (pageNum * maxPage) - maxPage;
   let endIndex = pageNum * maxPage;

   for (let i = 0; i < listItemChildren.length; i ++) {
      if (( i >= startIndex)  && (i <= endIndex )) {
         listItemChildren[i].style.display = 'block';
            } else {
               listItemChildren[i].style.display = 'none';
            } 
         }
      };              

let pageNum = Math.ceil(listItemChildren.length/maxPage);

const appendPageLinks = (listItemChildren) => {
   const div = document.createElement( 'div' );
   const ul = document.createElement( 'ul' );
   div.className = 'pagination';
   document.querySelector('.page').appendChild(div);
   document.querySelector('.pagination').appendChild(ul);

   for (let i = 1; i <= pageNum; i++) {
      const li = document.createElement( 'li' );
      li.innerHTML="<a href=''>"+ i +"</a>";
      ul.appendChild(li);
      };  
      
      const btn4 = document.getElementsByTagName('a')[1];
         btn4.addEventListener('click',  () => { 
            showPage(listItemChildren, 2); 
         });   
   }; 

appendPageLinks(listItemChildren);
showPage(listItemChildren, 1);






// 5. ​Add an event listener to each a​ ​ tag. When they are clicked
// ​call the showPage function to display the appropriate page

// 6. Loop over pagination links to remove active class from all links
// 7. Add the active class to the link that was just clicked. You can identify that
// clicked link using ​event.target
// Create the `appendPageLinks function` to generate, append, and add functionality to the pagination buttons.
