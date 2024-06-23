/*
 * Open/Close Menu 
 */
// to identify the element HTML that activate the menu
var $menuBtn = document.getElementById('btn-hamburger');
// to attach an event to do more than one task in the same time
$menuBtn.onclick = function(e)
{
  // do some tasks
  // your code here
  // animation for button with cross line on click
  animatedMenu(this);    

  // avoid default behavior
  e.preventDefault();
};
function animatedMenu(x) 
{
    x.classList.toggle("animeOpenClose");
}