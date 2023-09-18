const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");

const hideSidebar = () => {
  sidebar.classList.add("close");
  content.classList.remove("shifted");
};

const showSidebar = () => {
  sidebar.classList.remove("close");
  content.classList.add("shifted");
};

const toggleSidebar = () => {
  sidebar.classList.toggle("close");
  content.classList.toggle("shifted");
};

document.addEventListener("DOMContentLoaded", () => {
  sidebar.classList.add("close");
  content.classList.remove("shifted");
});

sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);
