const sideMenu = document.querySelector('#sidemenu');
const navbar = document.querySelector(".nav");
const navLinks = document.querySelector(".nav ul"); // Fixed variable declaration

// Function to open the side menu
function openMenu() {
  sideMenu.style.right = '0';
}

// Function to close the side menu
function closeMenu() {
  sideMenu.style.right = '-100%';
}

// Change navbar style on scroll
window.addEventListener('scroll', () => {
  if (scrollY > 50) {
    navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
  } else {
    navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
  }
})

//-----light mode and dark mode-----



if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window
.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
}else{
  document.documentElement.classList.remove('dark')
}

function toggleTheme(){
  document.documentElement.classList.toggle('dark');

  if(document.documentElement.classList.contains('dark')){
    localStorage.theme = 'dark';
  }else{
    localStorage.theme = 'light';
}
}


