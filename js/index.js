const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector('.toggle');
const menuLinks = document.querySelectorAll('.menu-links li');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});



menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all menu links
    menuLinks.forEach(item => item.classList.remove('active'));
    
    // Add active class to the clicked menu link
    link.classList.add('active');
  });
});


const navbarToggle = body.querySelector('.navbar-toggler');
const navbarCollapse = body.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

