const openMenu = document.getElementById('openMenu');
const  mainContainer = document.getElementById('mainContainer');
console.log(mainContainer);
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click' , openMianContiner);
closeMenu.addEventListener('click' , closeContainer);

function openMianContiner() {
    mainContainer.style.display = 'block';
  
}
function closeContainer() {
    mainContainer.style.display = 'none';
}