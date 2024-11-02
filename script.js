const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');

const colors = ['#ffdddd', '#d1e7dd', '#fefefe', '#d1ecf1']; 

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPos + 70 && section.offsetTop + section.offsetHeight > scrollPos + 70) {
            section.style.backgroundColor = colors[index]; 
            navbar.style.backgroundColor = (scrollPos > 50) ? '#005f73' : '#0077b6'; 
        }
    });
});