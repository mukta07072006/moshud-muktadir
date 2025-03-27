document.addEventListener('DOMContentLoaded', async function() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    // 1. Load hardcoded items (logos, thumbnails, etc.)
    const portfolioData = [ /* Your existing 9 items */ ];
    
    // 2. Load social posts from GitHub
    try {
        const response = await fetch('https://api.github.com/repos/mukta07072006/moshud-muktadir/contents/assets/images/social?ref=main');
        const files = await response.json();
        
        files.forEach(file => {
            if (file.name.match(/\.(jpg|jpeg|png|webp)$/i)) {
                const [platform, ...nameParts] = file.name.split('_');
                const title = nameParts.join(' ').replace(/\..+$/, '');
                
                portfolioData.push({
                    id: `social-${Date.now()}`,
                    title: title.replace(/_/g, ' '),
                    category: 'social', // Categorized as social
                    description: `${platform} Post`,
                    image: file.download_url
                });
            }
        });
    } catch (error) {
        console.error("Failed to load social posts:", error);
    }
    
    // 3. Render ALL items
    portfolioData.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'portfolio-item';
        itemElement.setAttribute('data-category', item.category);
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        portfolioGrid.appendChild(itemElement);
    });
    
    // 4. Initialize your EXISTING category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            const items = document.querySelectorAll('.portfolio-item');
            
            items.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                const showItem = category === 'all' || itemCategory === category;
                item.style.display = showItem ? 'block' : 'none';
            });
        });
    });
});
