// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form Validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Highlight Active Section in Navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main h1');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Theme Toggle (Light/Dark Mode)
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Theme';
themeToggle.style.position = 'fixed';
themeToggle.style.top = '20px';
themeToggle.style.right = '20px';
themeToggle.style.padding = '10px 15px';
themeToggle.style.backgroundColor = '#333';
themeToggle.style.color = '#fff';
themeToggle.style.border = 'none';
themeToggle.style.cursor = 'pointer';
document.body.appendChild(themeToggle);

let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
    themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Add Dark Mode Styles
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background: #333;
        color: #f4f4f4;
    }
    .dark-mode main {
        background: #555;
        color: #fff;
    }
    .dark-mode nav a {
        color: #ffc107;
    }
    .dark-mode footer {
        background: #222;
    }
`;
document.head.appendChild(style);
