const nav = document.querySelectorAll(".nav-item");

nav.forEach(item => {
    item.addEventListener("click", () => {
        // Remove 'active' class from all nav items
        nav.forEach(navItem => navItem.classList.remove("active"));
        // Add 'active' class to the clicked nav item
        item.classList.add("active");
    });
});
