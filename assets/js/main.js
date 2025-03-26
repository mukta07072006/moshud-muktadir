document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Counter animation
    const counters = document.querySelectorAll('.count');
    const speed = 200;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target + '+';
            }
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('hero-stats')) {
                    animateCounters();
                }
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.hero-stats, .section-title, .portfolio-item, .form-group').forEach(el => {
        observer.observe(el);
    });
    
    // Portfolio filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Load portfolio items dynamically
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        const portfolioData = [
            {
                id: 1,
                title: 'Minimalist Logo',
                category: 'logos',
                description: 'A clean and modern logo design for a tech startup',
                image: 'assets/images/portfolio1.jpg'
            },
            {
                id: 2,
                title: 'Social Media Post',
                category: 'social',
                description: 'Engaging social media content for a fashion brand',
                image: 'assets/images/portfolio2.jpg'
            },
            {
                id: 3,
                title: 'YouTube Thumbnail',
                category: 'thumbnails',
                description: 'Eye-catching thumbnail for a popular YouTuber',
                image: 'assets/images/portfolio3.jpg'
            },
            {
                id: 4,
                title: 'Brand Identity',
                category: 'branding',
                description: 'Complete brand identity for a coffee shop',
                image: 'assets/images/portfolio4.jpg'
            },
            {
                id: 5,
                title: 'Abstract Logo',
                category: 'logos',
                description: 'Creative abstract logo for a design agency',
                image: 'assets/images/portfolio5.jpg'
            },
            {
                id: 6,
                title: 'Instagram Story',
                category: 'social',
                description: 'Animated Instagram story for a fitness influencer',
                image: 'assets/images/portfolio6.jpg'
            }
        ];
        
        portfolioData.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.setAttribute('data-category', item.category);
            
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            
            portfolioGrid.appendChild(portfolioItem);
        });
    }
});

// Portfolio item tilt on mouse move
   document.querySelectorAll('.portfolio-item').forEach(item => {
     item.addEventListener('mousemove', (e) => {
       const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
       const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
       item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
     });
     item.addEventListener('mouseleave', () => {
       item.style.transform = 'rotateY(0) rotateX(0)';
     });
   });
