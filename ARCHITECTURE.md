# Bill Maker - Technical Architecture

## Project Overview
A full-stack web billing application built with Ember.js for shop owners to manage products and generate customer invoices with Indian GST calculations.

## Core Features
- **Product Management**: CRUD operations for products (name, base price, GST rate)
- **Customer Billing**: Select products, specify quantities, calculate GST
- **Invoice Generation**: Professional invoice with PDF/print functionality
- **GST Compliance**: CGST/SGST split calculation (India GST system)

## Technical Stack
- **Frontend**: Ember.js with Ember CLI
- **Data Storage**: In-memory storage (localStorage for persistence)
- **Styling**: Responsive CSS with mobile-first approach
- **PDF Generation**: Client-side PDF generation for invoices

## Data Models

### Product
```javascript
{
  id: string,
  name: string,
  basePrice: number,
  gstRate: number, // Percentage (e.g., 18 for 18%)
  createdAt: Date,
  updatedAt: Date
}
```

### Customer
```javascript
{
  id: string,
  name: string,
  phone?: string,
  createdAt: Date
}
```

### Invoice
```javascript
{
  id: string,
  customerId: string,
  customerName: string,
  items: InvoiceItem[],
  subtotal: number,
  totalGST: number,
  cgst: number,
  sgst: number,
  grandTotal: number,
  createdAt: Date
}
```

### InvoiceItem
```javascript
{
  productId: string,
  productName: string,
  quantity: number,
  basePrice: number,
  gstRate: number,
  gstAmount: number,
  cgstAmount: number,
  sgstAmount: number,
  totalPrice: number
}
```

## Application Structure

```
app/
├── components/
│   ├── product-list.js
│   ├── product-form.js
│   ├── billing-form.js
│   ├── invoice-display.js
│   └── navigation.js
├── controllers/
│   ├── products.js
│   ├── billing.js
│   └── invoices.js
├── models/
│   ├── product.js
│   ├── customer.js
│   └── invoice.js
├── routes/
│   ├── products.js
│   ├── billing.js
│   ├── invoices.js
│   └── index.js
├── services/
│   ├── store.js
│   └── gst-calculator.js
├── styles/
│   └── app.css
└── templates/
    ├── products.hbs
    ├── billing.hbs
    ├── invoices.hbs
    └── application.hbs
```

## Key Components

### 1. Product Management
- **Product List**: Display all products with edit/delete actions
- **Product Form**: Add/edit product details
- **Validation**: Ensure required fields and valid GST rates

### 2. Billing Interface
- **Customer Details**: Name input with optional phone
- **Product Selection**: Dropdown or searchable list
- **Quantity Input**: Numeric input with validation
- **Live Calculation**: Real-time GST and total calculation

### 3. Invoice Generation
- **Invoice Display**: Professional layout with shop details
- **GST Breakdown**: Separate CGST/SGST display
- **Print/PDF**: Browser print and PDF download options

## GST Calculation Logic

```javascript
// For each invoice item
const gstAmount = (basePrice * quantity * gstRate) / 100;
const cgstAmount = gstAmount / 2;
const sgstAmount = gstAmount / 2;
const totalPrice = (basePrice * quantity) + gstAmount;
```

## Responsive Design
- **Mobile-first approach**
- **Breakpoint strategy**: 320px, 768px, 1024px
- **Touch-friendly interfaces**
- **Optimized layouts for tablets and desktops**

## Data Persistence
- **In-memory storage** during session
- **localStorage** for data persistence across sessions
- **Export/Import** functionality for data backup

## Security Considerations
- **Client-side validation** for all inputs
- **Sanitization** of user inputs
- **No sensitive data storage** (in-memory only)

## Performance Optimizations
- **Component lazy loading**
- **Efficient re-rendering** with Ember's reactivity
- **Minimal DOM manipulation**
- **Optimized calculations** for large product lists

## Testing Strategy
- **Unit tests** for services and utilities
- **Integration tests** for components
- **Acceptance tests** for user workflows
- **Cross-browser testing** for compatibility

## Deployment
- **Static hosting** (GitHub Pages, Netlify, etc.)
- **Build optimization** with Ember CLI
- **Asset optimization** and minification