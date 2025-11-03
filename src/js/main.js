// ==========================================
// LIGHTBOX GALLERY
// ==========================================
class Lightbox {
  constructor() {
    this.init();
  }

  init() {
    // Create lightbox HTML
    const lightboxHTML = `
      <div id="lightbox" class="lightbox">
        <span class="lightbox-close">&times;</span>
        <span class="lightbox-prev">&#10094;</span>
        <span class="lightbox-next">&#10095;</span>
        <img class="lightbox-image" src="" alt="">
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    // Get all product images
    const productImages = document.querySelectorAll('.product-card img, .product-detail img, .gallery img');
    this.images = Array.from(productImages).map(img => ({
      src: img.src,
      alt: img.alt
    }));
    this.currentIndex = 0;

    productImages.forEach((img, index) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        this.currentIndex = index;
        this.openLightbox(this.images, this.currentIndex);
      });
    });

    // Lightbox controls
    const self = this;
    document.querySelector('.lightbox-close').addEventListener('click', () => this.closeLightbox());
    document.querySelector('.lightbox-prev').addEventListener('click', () => {
      self.currentIndex = (self.currentIndex - 1 + self.images.length) % self.images.length;
      self.openLightbox(self.images, self.currentIndex);
    });
    document.querySelector('.lightbox-next').addEventListener('click', () => {
      self.currentIndex = (self.currentIndex + 1) % self.images.length;
      self.openLightbox(self.images, self.currentIndex);
    });
    
    // Close on background click
    document.getElementById('lightbox').addEventListener('click', (e) => {
      if (e.target.id === 'lightbox') {
        this.closeLightbox();
      }
    });

    // Keyboard navigation
    const self = this;
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('lightbox').classList.contains('active')) {
        if (e.key === 'Escape') this.closeLightbox();
        if (e.key === 'ArrowLeft') {
          self.currentIndex = (self.currentIndex - 1 + self.images.length) % self.images.length;
          self.openLightbox(self.images, self.currentIndex);
        }
        if (e.key === 'ArrowRight') {
          self.currentIndex = (self.currentIndex + 1) % self.images.length;
          self.openLightbox(self.images, self.currentIndex);
        }
      }
    });
  }

  openLightbox(images, index) {
    const lightbox = document.getElementById('lightbox');
    const img = lightbox.querySelector('.lightbox-image');
    const caption = lightbox.querySelector('.lightbox-caption');
    
    img.src = images[index].src;
    caption.textContent = images[index].alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
  }

}

// ==========================================
// ENHANCED SEARCH WITH FILTER & SORT
// ==========================================
class ProductSearch {
  constructor() {
    this.products = [];
    this.init();
  }

  init() {
    const searchInput = document.getElementById('productSearch');
    const sortSelect = document.getElementById('productSort');
    
    if (searchInput) {
      // Collect all products
      this.collectProducts();
      
      // Search functionality
      searchInput.addEventListener('input', (e) => this.filterProducts(e.target.value));
      
      // Sort functionality
      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => this.sortProducts(e.target.value));
      }
    }
  }

  collectProducts() {
    const productCards = document.querySelectorAll('.product-card');
    this.products = Array.from(productCards).map(card => ({
      element: card,
      name: card.querySelector('h3')?.textContent.trim() || '',
      price: parseFloat(card.querySelector('.price')?.textContent.replace(/[^0-9.]/g, '') || 0),
      description: card.querySelector('p')?.textContent.trim() || ''
    }));
  }

  filterProducts(searchTerm) {
    const term = searchTerm.toLowerCase();
    this.products.forEach(product => {
      const matches = 
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);
      product.element.style.display = matches ? '' : 'none';
    });
  }

  sortProducts(sortBy) {
    const visibleProducts = this.products.filter(p => p.element.style.display !== 'none');
    
    visibleProducts.sort((a, b) => {
      switch(sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    // Reorder in DOM
    const grid = document.querySelector('.product-grid');
    visibleProducts.forEach(product => {
      grid.appendChild(product.element);
    });
  }
}

// ==========================================
// ACCORDION
// ==========================================
class Accordion {
  constructor(selector) {
    this.accordions = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    this.accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-header');
      const content = accordion.querySelector('.accordion-content');
      
      if (header && content) {
        header.addEventListener('click', () => {
          const isActive = accordion.classList.contains('active');
          
          // Close all other accordions
          this.accordions.forEach(acc => {
            if (acc !== accordion) {
              acc.classList.remove('active');
              acc.querySelector('.accordion-content').style.maxHeight = null;
            }
          });
          
          // Toggle current
          accordion.classList.toggle('active');
          if (isActive) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      }
    });
  }
}

// ==========================================
// TABS
// ==========================================
class Tabs {
  constructor(selector) {
    this.tabContainer = document.querySelector(selector);
    this.init();
  }

  init() {
    if (!this.tabContainer) return;
    
    const tabButtons = this.tabContainer.querySelectorAll('.tab-button');
    const tabContents = this.tabContainer.querySelectorAll('.tab-content');

    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Remove active class from all
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked
        button.classList.add('active');
        if (tabContents[index]) {
          tabContents[index].classList.add('active');
        }
      });
    });
  }
}

// ==========================================
// MODAL
// ==========================================
class Modal {
  constructor() {
    this.init();
  }

  init() {
    // Create modal HTML
    const modalHTML = `
      <div id="modal" class="modal">
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          <div class="modal-body"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Close modal handlers
    document.querySelector('.modal-close').addEventListener('click', () => this.close());
    document.getElementById('modal').addEventListener('click', (e) => {
      if (e.target.id === 'modal') {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.getElementById('modal').classList.contains('active')) {
        this.close();
      }
    });
  }

  open(content) {
    const modal = document.getElementById('modal');
    const body = modal.querySelector('.modal-body');
    body.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Global modal instance
window.modal = new Modal();

// ==========================================
// ANIMATIONS
// ==========================================
class Animations {
  constructor() {
    this.init();
  }

  init() {
    // Fade in on scroll
    this.fadeInOnScroll();
    
    // Stagger animations
    this.staggerAnimations();
    
    // Smooth scroll
    this.smoothScroll();
  }

  fadeInOnScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  staggerAnimations() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('fade-in');
    });
  }

  smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }
}

// ==========================================
// DYNAMIC CONTENT LOADING
// ==========================================
class DynamicContent {
  constructor() {
    this.init();
  }

  init() {
    // Load products dynamically
    this.loadProducts();
    
    // Infinite scroll (if needed)
    this.setupInfiniteScroll();
  }

  async loadProducts() {
    // Simulate API call - in real app, fetch from API
    const productContainer = document.querySelector('.product-grid');
    if (!productContainer) return;

    // Add loading indicator
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<div class="spinner"></div>';
    
    // Simulate loading delay
    setTimeout(() => {
      loader.remove();
      this.animateProducts();
    }, 500);
  }

  animateProducts() {
    const products = document.querySelectorAll('.product-card');
    products.forEach((product, index) => {
      product.style.opacity = '0';
      product.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        product.style.transition = 'all 0.5s ease';
        product.style.opacity = '1';
        product.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  setupInfiniteScroll() {
    // Could be implemented for lazy loading more products
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        // Load more products
      }
    });
  }
}

// ==========================================
// INITIALIZE ALL FEATURES
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize lightbox
  new Lightbox();
  
  // Initialize search
  new ProductSearch();
  
  // Initialize accordions
  new Accordion('.accordion');
  
  // Initialize tabs
  new Tabs('.tabs-container');
  
  // Initialize animations
  new Animations();
  
  // Initialize dynamic content
  new DynamicContent();
});

