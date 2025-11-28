// Inject Header, Navbar & Footer automatically
function includeComponent(selector, file) {
    fetch(`/components/${file}`)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        });
}

// Load components
includeComponent("header", "header.html");
includeComponent("navbar", "navbar.html");
includeComponent("footer", "footer.html");