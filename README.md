# 🌶️ Spices Mecca

A modern, elegant e-commerce website offering authentic spices sourced from around the world — bringing rich aromas and vibrant flavors directly to your kitchen.

<img width="1822" height="911" alt="image" src="https://github.com/user-attachments/assets/96e1d982-be56-48e7-82e2-22083017e05e" />
<img width="1822" height="921" alt="image" src="https://github.com/user-attachments/assets/9a04f7fc-d91e-4dba-859d-b70fdd440910" />
<img width="1832" height="921" alt="image" src="https://github.com/user-attachments/assets/da10fdd4-b84d-4e2d-bb62-a6f47801f8c4" />
<img width="1828" height="921" alt="image" src="https://github.com/user-attachments/assets/2fe5e17f-50d1-48cc-9399-3eb11a2836e3" />
<img width="1832" height="555" alt="image" src="https://github.com/user-attachments/assets/8bd1cac4-1d21-4823-844b-412ece653ad4" />
<img width="1832" height="921" alt="image" src="https://github.com/user-attachments/assets/7642ad75-bc3a-4f10-8552-8b59fface509" />
<img width="1837" height="922" alt="image" src="https://github.com/user-attachments/assets/5b4923a0-1496-4828-ab76-418550b548ec" />
<img width="890" height="605" alt="image" src="https://github.com/user-attachments/assets/627b88d6-3378-4171-8f03-72e227f24133" />




---

## 📖 About

**Spices Mecca** was born from a passion for authentic flavors and a deep respect for culinary tradition. We partner directly with local farmers across Iran, India, Sri Lanka, and the Middle East to ensure **purity**, **freshness**, and **sustainability** in every grain.

> **Our Mission:**  
> To bring the soul of global spice markets to your kitchen, offering the finest herbs and blends for both home cooks and professional chefs.

---

## ✨ Features

### 🏠 **Core Pages**
- **Homepage (`index.html`):** Engaging landing page with hero section, About Us content, and full product catalog
- **About Page (`about.html`):** Company story, mission, values, and interactive accordions
- **Products Page (`services.html`):** Display of premium spices with images, prices, descriptions, search, and sorting
- **Contact Page (`contact.html`):** Contact form with validation, interactive map, and business information
- **Enquiry Page (`enquiry.html`):** Product inquiries, bulk orders, wholesale pricing, and partnership opportunities
- **Product Detail Pages:** Individual pages for each spice with detailed information, pricing, and Add to Cart functionality

### 🎨 **Interactive Features**

#### JavaScript Enhancements
- **Image Lightbox Gallery:** Click any product image to view in full-screen lightbox with navigation
- **Enhanced Search & Filter:** Real-time product search with sorting (price, name A-Z/Z-A)
- **Interactive Map:** Leaflet.js integration showing business location in Cape Town
- **Accordions:** Expandable sections on About page
- **Tabs:** Tabbed interface on Products page
- **Modal Dialogs:** Reusable modal system for displaying information
- **Animations:** Smooth fade-in, scroll animations, and transitions
- **Dynamic Content Loading:** Staggered product animations

#### Form Functionality
- **Contact Form:** Full validation with email compilation and AJAX submission
- **Enquiry Form:** Contextual responses based on enquiry type (bulk orders, wholesale, partnerships)
- **Real-time Validation:** Field-level validation with error messages
- **Character Counters:** Live feedback for text inputs
- **Email Integration:** Pre-filled email client integration

### 🔍 **SEO Optimization**

#### On-Page SEO
- **Meta Tags:** Comprehensive title tags, descriptions, and keywords for all pages
- **Open Graph Tags:** Social media sharing optimization
- **Header Structure:** Proper H1, H2, H3 hierarchy
- **Image Optimization:** Descriptive alt text for all images
- **URL Structure:** Clean, SEO-friendly URLs
- **Internal Linking:** Breadcrumbs and navigation links
- **Mobile-Friendly:** Fully responsive design

#### Technical SEO
- **robots.txt:** Search engine crawler instructions
- **sitemap.xml:** Complete site structure for search engines
- **Page Speed:** Optimized loading with compression and caching
- **Security Headers:** X-Frame-Options, X-XSS-Protection, CSP

---

## 🛒 Premium Products

| Spice Name | Description | Price | Origin |
|------------|-------------|-------|--------|
| 🌸 **Persian Saffron** | Pure, aromatic threads sourced from Iran | R150 | Iran |
| 🌿 **Ceylon Cinnamon** | Sweet and fragrant cinnamon from Sri Lanka | R49.99 | Sri Lanka |
| 💛 **Golden Turmeric** | Vibrant yellow spice known for its health benefits | R77.49 | India |
| ⚫ **Tellicherry Black Pepper** | Bold and spicy peppercorns from India | R29.99 | Kerala, India |
| 💚 **Persian Cardamom** | Premium green pods with deep aroma | R100 | Middle East |

Each product has its own dedicated page with detailed descriptions, features, and high-quality images.

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup with proper structure
- **CSS3** - Modern styling with animations and transitions
- **JavaScript (ES6+)** - Interactive features and form validation
- **Leaflet.js** - Interactive maps
- **Responsive Web Design** - Mobile-first approach

### Tools & Standards
- **SEO Best Practices** - Meta tags, sitemaps, robots.txt
- **Web Security** - Security headers, input validation
- **Performance Optimization** - Compression, caching, lazy loading
- **Accessibility** - ARIA labels, semantic HTML

---

## 📁 Project Structure

```
ST10477069-POE1-WEDE/
│
├── index.html                    # Homepage
├── about.html                    # About Us page
├── services.html                 # Products/Shop page
├── contact.html                  # Contact form page
├── enquiry.html                  # Product enquiry form
├── 
├── Persian-Saffron.html          # Product detail pages
├── Ceylon-Cinnamon.html
├── Golden-Turmeric.html
├── Tellicherry-Black-Pepper.html
├── Persian-Cardamom.html
│
├── robots.txt                    # SEO crawler instructions
├── sitemap.xml                   # Site structure for search engines
├── .htaccess                     # Server configuration & security
│
└── src/
    ├── images/                   # All image assets
    │   ├── logo.jpeg
    │   ├── map.jpeg
    │   ├── Saffron.jpeg
    │   ├── R.jpeg (Turmeric)
    │   ├── RB.jpeg (Cinnamon)
    │   ├── RK.jpeg (Pepper)
    │   └── RZ.jpeg (Cardamom)
    │
    ├── styles/
    │   └── style.css             # Main stylesheet
    │
    └── js/
        ├── main.js               # Main JavaScript (lightbox, search, animations)
        ├── form-validation.js    # Form validation and processing
        └── map.js                # Interactive map functionality
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A web server (optional, for local development)
  - **Option 1:** Use VS Code Live Server extension
  - **Option 2:** Use Python's HTTP server: `python -m http.server 8000`
  - **Option 3:** Use Node.js http-server: `npx http-server`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VCCT-WEDE5020-2025-G1/ST10477069-POE1-WEDE.git
   cd ST10477069-POE1-WEDE
   ```

2. **Open in your browser:**
   - Simply open `index.html` in your web browser
   - Or use a local development server (recommended)

### Running Locally

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Then navigate to: http://localhost:8000
```

---

## 📱 Usage

### Navigation
- **Home:** View featured products and company story
- **About:** Learn about Spices Mecca's mission and values
- **Products:** Browse all spices with search and filter options
- **Contact:** Send a general message with the contact form
- **Enquiry:** Submit product inquiries, bulk orders, or partnership requests

### Interactive Features

#### Product Search
- Use the search bar to filter products by name or description
- Sort by price (low to high, high to low) or name (A-Z, Z-A)

#### Image Lightbox
- Click any product image to view in full-screen mode
- Use arrow keys or navigation buttons to browse images
- Press ESC to close

#### Forms
- **Contact Form:** Submit general inquiries with message type selection
- **Enquiry Form:** Get contextual responses about products, pricing, and availability
- All forms include real-time validation and helpful error messages

#### Interactive Map
- View business location on the Contact page
- Click marker for contact information

---

## 🔧 Configuration

### Email Configuration
The contact form sends emails to the recipient specified in the code:
- **Recipient Email:** `spicesmecca@sm.com` (configured in `src/js/form-validation.js`)

### Map Configuration
Map location is configured in `src/js/map.js`:
- **Location:** Cape Town, South Africa
- **Coordinates:** -33.9249, 18.4241

### SEO Configuration
- **Canonical URLs:** Update `sitemap.xml` and meta tags with your actual domain
- **Search Engine:** Submit `sitemap.xml` to Google Search Console

---

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Features Breakdown

### 1. **Interactive Elements (JavaScript)**
   - ✅ Image lightbox gallery with navigation
   - ✅ Interactive map (Leaflet.js)
   - ✅ Animations and transitions
   - ✅ Advanced DOM manipulation
   - ✅ Accordions and tabs
   - ✅ Modal dialogs

### 2. **Dynamic Content**
   - ✅ Dynamic product loading with animations
   - ✅ Search functionality with filtering
   - ✅ Product sorting capabilities

### 3. **SEO Implementation**
   - ✅ Keyword research and integration
   - ✅ Title tags and meta descriptions
   - ✅ Header tag structure (H1-H3)
   - ✅ Image optimization (alt text)
   - ✅ URL structure
   - ✅ Internal linking
   - ✅ Mobile-friendliness
   - ✅ robots.txt and sitemap.xml
   - ✅ Page speed optimization
   - ✅ Security headers

### 4. **Form Functionality**
   - ✅ HTML5 form elements
   - ✅ Client-side validation (JavaScript)
   - ✅ HTML5 validation attributes
   - ✅ AJAX form submission
   - ✅ Error handling and messages
   - ✅ Email compilation and sending

---

## 🔒 Security Features

- Security headers configured in `.htaccess`
- Input validation and sanitization
- XSS protection
- Content Security Policy (CSP)
- HTTPS ready (uncomment redirect in `.htaccess` when SSL is enabled)

---

## 📊 Performance Optimizations

- Gzip compression enabled
- Browser caching configured
- Optimized images
- Deferred JavaScript loading
- Lazy loading ready
- Minimal external dependencies

---

## 🎨 Design Features

- Modern, clean UI design
- Consistent color scheme (brown/gold theme)
- Responsive grid layouts
- Smooth animations and transitions
- Professional typography (Playfair Display + Open Sans)
- Mobile-first responsive design

---

## 📞 Contact Information

- **Email:** spicesmecca@sm.com
- **Phone:** +27 649201185
- **Location:** Cape Town, South Africa
- **Business Hours:** Monday - Friday: 9:00 AM - 6:00 PM

---

## 🔗 Links

- **GitHub Repository:** [ST10477069-POE1-WEDE](https://github.com/VCCT-WEDE5020-2025-G1/ST10477069-POE1-WEDE)
- **GitHub README:** [View on GitHub](https://github.com/VCCT-WEDE5020-2025-G1/ST10477069-POE1-WEDE/blob/main/README.md)

---

## 🚧 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Admin dashboard
- [ ] Product inventory management
- [ ] API integration for real email sending

---

## 📄 License

This project is part of an academic assignment for WEDE5020.

---

## 👨‍💻 Development Notes

### Code Organization
- **Separation of Concerns:** HTML, CSS, and JavaScript are organized in separate files
- **Modular JavaScript:** Features are organized into classes for maintainability
- **Reusable Components:** Accordions, tabs, modals can be reused across pages

### Best Practices
- Semantic HTML5 elements
- CSS Grid and Flexbox for layouts
- Progressive enhancement approach
- Accessibility considerations (alt text, ARIA labels)
- SEO-friendly structure

---

## 🐛 Troubleshooting

### Map not displaying?
- Ensure internet connection (Leaflet.js loads from CDN)
- Check browser console for JavaScript errors

### Forms not validating?
- Ensure `form-validation.js` is loaded
- Check that form IDs match JavaScript selectors

### Images not loading?
- Verify image paths in `src/images/` directory
- Check that file names match exactly (case-sensitive)

---

## 📚 Documentation

For detailed documentation on specific features:
- **Forms:** See inline comments in `src/js/form-validation.js`
- **Lightbox:** See `src/js/main.js` Lightbox class
- **Map:** See `src/js/map.js` InteractiveMap class
- **Styles:** See `src/styles/style.css` for component styles

---

**Built with ❤️ for authentic spice lovers everywhere**

© 2025 Spices Mecca — Crafted with heritage and passion.

--------------------------------------------------------------------
ST10477069 POE

https://github.com/VCCT-WEDE5020-2025-G1/ST10477069-POE1-WEDE/blob/main/README.md

https://github.com/VCCT-WEDE5020-2025-G1/ST10477069-POE1-WEDE.git


