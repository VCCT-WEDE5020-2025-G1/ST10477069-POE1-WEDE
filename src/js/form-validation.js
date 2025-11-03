// ==========================================
// FORM VALIDATION AND PROCESSING
// ==========================================

class FormValidator {
  constructor() {
    this.init();
  }

  init() {
    // Initialize enquiry form if it exists
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
      this.setupEnquiryForm(enquiryForm);
    }

    // Initialize contact form if it exists
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
      this.setupContactForm(contactForm);
    }
  }

  setupEnquiryForm(form) {
    const enquiryType = document.getElementById('enquiryType');
    const productGroup = document.getElementById('productGroup');
    const quantityGroup = document.getElementById('quantityGroup');

    // Show/hide product and quantity fields based on enquiry type
    if (enquiryType) {
      enquiryType.addEventListener('change', () => {
        const type = enquiryType.value;
        if (type === 'product' || type === 'bulk' || type === 'wholesale') {
          productGroup.style.display = 'block';
          quantityGroup.style.display = type === 'bulk' || type === 'wholesale' ? 'block' : 'none';
        } else {
          productGroup.style.display = 'none';
          quantityGroup.style.display = 'none';
        }
      });
    }

    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.validateEnquiryForm(form)) {
        this.processEnquiryForm(form);
      }
    });

    // Real-time validation
    this.setupRealTimeValidation(form);
  }

  setupContactForm(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.validateContactForm(form)) {
        this.processContactForm(form);
      }
    });

    this.setupRealTimeValidation(form);
  }

  setupRealTimeValidation(form) {
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });

      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          this.validateField(input);
        }
      });
    });
  }

  validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup?.querySelector('.error-message');
    
    let isValid = true;
    let errorText = '';

    // Remove previous error state
    if (formGroup) {
      formGroup.classList.remove('error');
    }

    // Check if required
    if (field.hasAttribute('required') && !field.value.trim()) {
      isValid = false;
      errorText = `${field.previousElementSibling?.textContent || 'This field'} is required`;
    }

    // Email validation
    if (field.type === 'email' && field.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        isValid = false;
        errorText = 'Please enter a valid email address';
      }
    }

    // Phone validation
    if (field.type === 'tel' && field.value) {
      const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
      if (!phoneRegex.test(field.value.replace(/\s/g, ''))) {
        isValid = false;
        errorText = 'Please enter a valid phone number';
      }
    }

    // Pattern validation
    if (field.hasAttribute('pattern') && field.value) {
      const pattern = new RegExp(field.getAttribute('pattern'));
      if (!pattern.test(field.value)) {
        isValid = false;
        errorText = 'Please enter a valid format';
      }
    }

    // Update error state
    if (!isValid && formGroup) {
      formGroup.classList.add('error');
      if (errorMessage) {
        errorMessage.textContent = errorText || 'Please correct this field';
      }
    }

    return isValid;
  }

  validateEnquiryForm(form) {
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateContactForm(form) {
    const fields = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  processEnquiryForm(form) {
    const submitBtn = document.getElementById('submitBtn');
    const responseMessage = document.getElementById('responseMessage');
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    // Get form data
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      enquiryType: formData.get('enquiryType'),
      product: formData.get('product') || '',
      quantity: formData.get('quantity') || '',
      message: formData.get('message')
    };

    // Simulate processing delay
    setTimeout(() => {
      // Generate response based on enquiry type
      const response = this.generateEnquiryResponse(data);
      
      // Show response
      responseMessage.className = 'response-message show';
      responseMessage.innerHTML = response;

      // Reset form
      form.reset();
      document.getElementById('productGroup').style.display = 'none';
      document.getElementById('quantityGroup').style.display = 'none';

      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Enquiry';

      // Scroll to response
      responseMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Hide response after 10 seconds
      setTimeout(() => {
        responseMessage.classList.remove('show');
      }, 10000);
    }, 1500);
  }

  generateEnquiryResponse(data) {
    const enquiryType = data.enquiryType;
    let response = `<h3>Thank you, ${data.name}!</h3><p>Your enquiry has been received. Here's the information you requested:</p>`;

    switch(enquiryType) {
      case 'product':
        const productName = data.product ? this.getProductName(data.product) : 'your selected product';
        response += `
          <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 8px;">
            <h4 style="color: #4b2e1d; margin-top: 0;">Product Information: ${productName}</h4>
            <p><strong>Availability:</strong> ✓ In Stock</p>
            <p><strong>Current Pricing:</strong> ${this.getProductPrice(data.product)}</p>
            <p><strong>Shipping:</strong> Available nationwide. Free shipping on orders over R500.</p>
            <p><strong>Processing Time:</strong> Orders are typically processed within 1-2 business days.</p>
            <p style="margin-top: 15px;">Our team will contact you at <strong>${data.email}</strong> or <strong>${data.phone}</strong> within 24 hours with more detailed information.</p>
          </div>
        `;
        break;

      case 'bulk':
        const quantity = data.quantity || 'your specified quantity';
        response += `
          <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 8px;">
            <h4 style="color: #4b2e1d; margin-top: 0;">Bulk Order Inquiry</h4>
            <p><strong>Product:</strong> ${data.product ? this.getProductName(data.product) : 'Multiple products'}</p>
            <p><strong>Quantity:</strong> ${quantity} kg</p>
            <p><strong>Bulk Pricing:</strong> Discounts available for orders over 10kg. Bulk orders receive 10-20% discount depending on quantity.</p>
            <p><strong>Minimum Order:</strong> 5kg per product for bulk pricing</p>
            <p><strong>Delivery:</strong> Free delivery for bulk orders over 20kg within Cape Town area.</p>
            <p style="margin-top: 15px;">Our sales team will prepare a custom quote for ${quantity}kg and contact you within 48 hours at <strong>${data.email}</strong>.</p>
          </div>
        `;
        break;

      case 'wholesale':
        response += `
          <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 8px;">
            <h4 style="color: #4b2e1d; margin-top: 0;">Wholesale Pricing Inquiry</h4>
            <p><strong>Wholesale Terms:</strong></p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Minimum order value: R5,000</li>
              <li>Wholesale discounts: 25-35% off retail prices</li>
              <li>Payment terms: Net 30 days (subject to credit approval)</li>
              <li>Delivery: Available nationwide, logistics arranged based on location</li>
            </ul>
            <p><strong>Partnership Benefits:</strong></p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Exclusive pricing for verified wholesale partners</li>
              <li>Priority customer support</li>
              <li>Marketing materials and product catalogs</li>
              <li>Co-branding opportunities</li>
            </ul>
            <p style="margin-top: 15px;">Our wholesale manager will contact you at <strong>${data.email}</strong> or <strong>${data.phone}</strong> within 2 business days to discuss partnership opportunities.</p>
          </div>
        `;
        break;

      case 'partnership':
        response += `
          <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 8px;">
            <h4 style="color: #4b2e1d; margin-top: 0;">Partnership/Distributor Opportunity</h4>
            <p>Thank you for your interest in partnering with Spices Mecca!</p>
            <p><strong>What We Offer:</strong></p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Competitive distributor pricing</li>
              <li>Marketing support and materials</li>
              <li>Product training and knowledge sharing</li>
              <li>Exclusive regional distribution opportunities</li>
              <li>Flexible terms and support</li>
            </ul>
            <p><strong>Next Steps:</strong></p>
            <p>Our partnership team will review your inquiry and contact you at <strong>${data.email}</strong> within 3-5 business days to schedule a discussion about potential collaboration.</p>
          </div>
        `;
        break;

      case 'sponsorship':
        response += `
          <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 8px;">
            <h4 style="color: #4b2e1d; margin-top: 0;">Sponsorship Opportunity</h4>
            <p>Thank you for considering Spices Mecca as a potential sponsor!</p>
            <p><strong>Sponsorship Areas We Support:</strong></p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Culinary events and competitions</li>
              <li>Food and hospitality industry initiatives</li>
              <li>Community events and festivals</li>
              <li>Educational programs</li>
            </ul>
            <p>Our sponsorship committee will review your proposal and contact you at <strong>${data.email}</strong> within 1 week to discuss your sponsorship request.</p>
          </div>
        `;
        break;

      default:
        response += `<p>We've received your enquiry and will get back to you soon at <strong>${data.email}</strong>.</p>`;
    }

    response += `<p style="margin-top: 15px; font-size: 14px; color: #6b4a33;">Reference Number: <strong>ENQ-${Date.now().toString().slice(-6)}</strong></p>`;

    return response;
  }

  getProductName(productValue) {
    const products = {
      'saffron': 'Persian Saffron',
      'cinnamon': 'Ceylon Cinnamon',
      'turmeric': 'Golden Turmeric',
      'pepper': 'Tellicherry Black Pepper',
      'cardamom': 'Persian Cardamom',
      'multiple': 'Multiple Products',
      'other': 'Other Products'
    };
    return products[productValue] || productValue;
  }

  getProductPrice(productValue) {
    const prices = {
      'saffron': 'R150 per gram',
      'cinnamon': 'R49.99 per 100g',
      'turmeric': 'R77.49 per 100g',
      'pepper': 'R29.99 per 100g',
      'cardamom': 'R100 per 100g'
    };
    return prices[productValue] || 'Please contact us for pricing';
  }

  processContactForm(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Get form data
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Simulate processing
    setTimeout(() => {
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'response-message show';
      successMsg.style.cssText = 'display: block; padding: 20px; border-radius: 12px; margin-top: 20px; background: #e8f5e9; border-left: 4px solid #4caf50; color: #2e7d32;';
      successMsg.innerHTML = `
        <h3 style="margin-top: 0;">Message Sent Successfully!</h3>
        <p>Thank you, ${data.name}! Your message has been received.</p>
        <p>We'll get back to you at <strong>${data.email}</strong> regarding "${data.subject}" as soon as possible.</p>
        <p style="font-size: 14px; margin-top: 10px;">We typically respond within 24-48 hours.</p>
      `;
      
      form.parentElement.appendChild(successMsg);

      // Reset form
      form.reset();

      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';

      // Scroll to message
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Hide message after 8 seconds
      setTimeout(() => {
        successMsg.classList.remove('show');
        setTimeout(() => successMsg.remove(), 300);
      }, 8000);
    }, 1500);
  }
}

// Initialize form validation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new FormValidator();
});

