# Bill Maker - Professional Billing Application

A full-stack web billing application built with Ember.js for shop owners to manage products and generate customer invoices with Indian GST calculations.

## 🚀 Features

### Product Management
- ✅ Add new products with name, base price, and GST rate
- ✅ Edit existing products
- ✅ Delete products
- ✅ View all products in a table format

### Customer Billing
- ✅ Enter customer name and phone number
- ✅ Select products from inventory
- ✅ Specify quantities for each product
- ✅ Real-time GST calculation (CGST/SGST split)
- ✅ Professional invoice generation

### Invoice Management
- ✅ Generate professional invoices
- ✅ Itemized bill with GST breakdown
- ✅ Print invoices directly
- ✅ Download invoices as PDF
- ✅ View all invoices with search and sorting
- ✅ Invoice history and tracking

### Technical Features
- ✅ Responsive design (works on desktop and mobile)
- ✅ In-memory data storage with localStorage persistence
- ✅ Indian GST compliance (CGST/SGST calculations)
- ✅ Professional invoice layout
- ✅ Modern Ember.js architecture

## 🛠️ Technology Stack

- **Frontend**: Ember.js with Ember CLI
- **Data Storage**: In-memory storage (localStorage for persistence)
- **Styling**: Responsive CSS with mobile-first approach
- **Build Tool**: Ember CLI
- **Package Manager**: npm

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Ember CLI** (will be installed via npm)

## 🚀 Installation & Setup

1. **Clone or download the project**
   ```bash
   cd bill-maker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📖 How to Use

### Getting Started
1. **Dashboard**: View quick stats and navigate to different sections
2. **Add Products**: Start by adding your products to the inventory
3. **Create Invoices**: Generate professional invoices for customers
4. **Manage Everything**: View and manage all your invoices

### Step-by-Step Guide

#### 1. Adding Products
- Navigate to "Products" section
- Click "Add Product" button
- Fill in product details:
  - Product Name
  - Base Price (₹)
  - GST Rate (%)
- Choose from standard GST rates (0%, 5%, 12%, 18%, 28%)
- Save the product

#### 2. Creating Invoices
- Navigate to "Billing" section
- Enter customer details (name and phone)
- Browse available products
- Click "Add to Bill" for each product
- Adjust quantities as needed
- Review the bill summary with GST calculations
- Click "Generate Invoice"

#### 3. Managing Invoices
- Navigate to "Invoices" section
- View all generated invoices
- Search by customer name or invoice ID
- Sort by date, amount, or customer
- Click "View" to see invoice details
- Print or download invoices as PDF

## 🧮 GST Calculation

The application automatically calculates GST according to Indian tax rules:

- **CGST**: Central GST (half of total GST)
- **SGST**: State GST (half of total GST)
- **Total GST**: (Base Price × Quantity × GST Rate) / 100
- **Grand Total**: Base Price + Total GST

Example:
- Product: ₹100, GST Rate: 18%, Quantity: 2
- Subtotal: ₹200
- CGST (9%): ₹18
- SGST (9%): ₹18
- Grand Total: ₹236

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- **Desktop computers** (1024px and above)
- **Tablets** (768px to 1023px)
- **Mobile phones** (320px to 767px)

## 🗂️ Project Structure

```
bill-maker/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── navigation.hbs   # Main navigation
│   │   ├── product-list.hbs # Product listing
│   │   ├── product-form.hbs # Add/edit products
│   │   ├── billing-form.hbs # Invoice creation
│   │   └── invoice-display.hbs # Invoice display
│   ├── controllers/         # Route controllers
│   ├── models/             # Data models
│   │   ├── product.js      # Product model
│   │   ├── customer.js     # Customer model
│   │   └── invoice.js      # Invoice model
│   ├── routes/             # Route handlers
│   │   ├── index.js        # Dashboard
│   │   ├── products.js     # Product management
│   │   ├── billing.js      # Invoice creation
│   │   ├── invoices.js     # Invoice listing
│   │   └── invoice.js      # Individual invoice
│   ├── services/           # Business logic services
│   │   ├── store.js        # Data storage service
│   │   └── gst-calculator.js # GST calculation service
│   ├── styles/
│   │   └── app.css         # Application styles
│   ├── templates/          # Route templates
│   └── router.js           # Route configuration
├── config/                 # Ember configuration
├── public/                 # Static assets
└── tests/                  # Test files
```

## 🔧 Configuration

### Shop Details
Currently configured for "My Shop" - you can modify:
- Shop name in `app/components/invoice-display.js`
- Shop address and GSTIN in the invoice template
- Contact information

### GST Rates
Standard Indian GST rates are pre-configured:
- 0% (exempted items)
- 5% (essential goods)
- 12% (processed foods)
- 18% (general goods)
- 28% (luxury items)

## 📊 Data Storage

- **Runtime**: In-memory storage for current session
- **Persistence**: localStorage for data retention across sessions
- **Backup**: Export functionality for data backup

## 🖨️ Printing & PDF

- **Print**: Uses browser's native print functionality
- **PDF**: Converts print layout to PDF (recommended: Chrome browser)
- **Layout**: Optimized for A4 paper size

## 🐛 Troubleshooting

### Common Issues

1. **Application not loading**
   - Ensure Node.js and npm are installed
   - Run `npm install` to install dependencies
   - Check if port 4200 is available

2. **Data not persisting**
   - Check browser's localStorage settings
   - Clear browser cache if needed

3. **Print/PDF issues**
   - Use Chrome browser for best results
   - Check print settings for A4 paper size

### Development Commands

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 🤝 Contributing

This is a complete, production-ready application. For modifications:

1. Follow Ember.js best practices
2. Maintain responsive design
3. Test on multiple devices
4. Update documentation

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the code comments
3. Test in different browsers

---

**Built with ❤️ using Ember.js**

*Professional billing solution for modern businesses*