// Tech Paradise - JavaScript functionality

// Mock product data
const featuredProducts = [
    {
        id: "1",
        name: "MacBook Pro 16-inch M3 Max",
        price: 3499,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        rating: 4.9,
        reviewCount: 284,
        processor: "Apple M3 Max",
        ram: "32GB",
        storage: "1TB SSD",
        isOnSale: true,
        isFeatured: true
    },
    {
        id: "2",
        name: "Dell XPS 13 Plus",
        price: 1299,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        rating: 4.7,
        reviewCount: 156,
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "512GB SSD",
        isFeatured: true
    },
    {
        id: "3",
        name: "ASUS ROG Strix G15",
        price: 1599,
        originalPrice: 1899,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
        rating: 4.6,
        reviewCount: 203,
        processor: "AMD Ryzen 9",
        ram: "32GB",
        storage: "1TB SSD",
        isOnSale: true,
        isFeatured: true
    },
    {
        id: "4",
        name: "ThinkPad X1 Carbon Gen 11",
        price: 1849,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
        rating: 4.8,
        reviewCount: 127,
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "512GB SSD",
        isFeatured: true
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLucideIcons();
    setupMobileMenu();
    renderProducts();
    setupEventListeners();
});

// Initialize Lucide icons
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('active');
            
            if (isOpen) {
                mobileMenu.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            } else {
                mobileMenu.classList.add('active');
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            });
        });
    }
}

// Render products to the grid
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stars = generateStars(product.rating);
    const salePrice = product.originalPrice ? 
        `<span class="price-original">$${product.originalPrice.toLocaleString()}</span>` : '';
    const saleBadge = product.isOnSale ? 
        '<div class="product-sale-badge">Sale</div>' : '';
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${saleBadge}
        </div>
        <div class="product-content">
            <div class="product-header">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="rating-stars">
                        ${stars}
                    </div>
                    <span>${product.rating} (${product.reviewCount})</span>
                </div>
            </div>
            
            <div class="product-specs">
                <div class="product-spec">
                    <span>Processor:</span>
                    <span>${product.processor}</span>
                </div>
                <div class="product-spec">
                    <span>RAM:</span>
                    <span>${product.ram}</span>
                </div>
                <div class="product-spec">
                    <span>Storage:</span>
                    <span>${product.storage}</span>
                </div>
            </div>
            
            <div class="product-footer">
                <div class="product-price">
                    <span class="price-current">$${product.price.toLocaleString()}</span>
                    ${salePrice}
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i data-lucide="star" class="rating-star"></i>';
    }
    
    // Half star (simplified as full star for this implementation)
    if (hasHalfStar) {
        starsHTML += '<i data-lucide="star" class="rating-star"></i>';
    }
    
    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i data-lucide="star" class="rating-star" style="opacity: 0.3;"></i>';
    }
    
    return starsHTML;
}

// Setup event listeners
function setupEventListeners() {
    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = e.target.getAttribute('data-product-id');
            addToCart(productId);
        }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            // Implement search functionality here
            console.log('Searching for:', e.target.value);
        });
    }
    
    // Navigation link interactions
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navigation clicked:', this.textContent);
            // Implement navigation logic here
        });
    });
    
    // Category button interactions
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const categoryCard = this.closest('.category-card');
            const categoryTitle = categoryCard.querySelector('.category-title').textContent;
            console.log('Category clicked:', categoryTitle);
            // Implement category navigation logic here
        });
    });
    
    // Hero section button interactions
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Hero button clicked:', this.textContent.trim());
            // Implement hero button logic here
        });
    });
    
    // Initialize icons after dynamic content is added
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// Add to cart functionality
function addToCart(productId) {
    const product = featuredProducts.find(p => p.id === productId);
    if (product) {
        // Get current cart count
        const cartBadge = document.querySelector('.cart-badge');
        let currentCount = parseInt(cartBadge.textContent) || 0;
        
        // Update cart count
        cartBadge.textContent = currentCount + 1;
        
        // Show success message (you can replace this with a toast notification)
        showNotification(`${product.name} added to cart!`);
        
        console.log('Added to cart:', product);
    }
}

// Simple notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow-medium);
        z-index: 1000;
        transition: all 0.3s ease;
        transform: translateX(100%);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && mobileMenu) {
        mobileMenu.classList.remove('active');
        if (menuIcon) menuIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.product-card, .category-card');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});