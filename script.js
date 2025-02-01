function handleSearch() {
    const query = document.getElementById("search").value.toLowerCase();
    if (query.includes("innovation")) {
        alert("Search results found for Innovation!");
    } else {
        alert("No results found. Please try 'Innovation'.");
    }
}

function openRegistration() {
    const userEmail = prompt("Enter your email for registration:");
    if (userEmail) {
        window.open(
            `mailto:ravindraprasadrai1212@gmail.com?subject=Event Registration&body=Please register me. My email is: ${userEmail}`,
            "_blank"
        );
    }
}

function revealSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealSections);
revealSections();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});