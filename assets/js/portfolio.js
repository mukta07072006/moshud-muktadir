document.addEventListener('DOMContentLoaded', function() {
    // Portfolio filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
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
            },
            {
                id: 7,
                title: 'Business Card',
                category: 'print',
                description: 'Elegant business card design for a consultant',
                image: 'assets/images/portfolio7.jpg'
            },
            {
                id: 8,
                title: 'Packaging Design',
                category: 'branding',
                description: 'Sustainable packaging for a skincare brand',
                image: 'assets/images/portfolio8.jpg'
            },
            {
                id: 9,
                title: 'Book Cover',
                category: 'print',
                description: 'Captivating cover design for a novel',
                image: 'assets/images/portfolio9.jpg'
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
