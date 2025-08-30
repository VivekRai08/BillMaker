import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class StoreService extends Service {
  @tracked products = [];
  @tracked customers = [];
  @tracked invoices = [];

  constructor() {
    super(...arguments);
    this.loadFromStorage();

    // Make debug method available globally for console access
    if (typeof window !== 'undefined') {
      window.debugBillMakerStore = () => this.debugLocalStorage();
    }
  }

  // Load data from localStorage
  loadFromStorage() {
    try {
      const productsData = localStorage.getItem('bill-maker-products');
      const customersData = localStorage.getItem('bill-maker-customers');
      const invoicesData = localStorage.getItem('bill-maker-invoices');

      this.products = productsData ? JSON.parse(productsData) : [];
      this.customers = customersData ? JSON.parse(customersData) : [];
      this.invoices = invoicesData ? JSON.parse(invoicesData) : [];

      console.log('Store loaded:', {
        products: this.products.length,
        customers: this.customers.length,
        invoices: this.invoices.length
      });
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      this.products = [];
      this.customers = [];
      this.invoices = [];
    }
  }

  // Save data to localStorage
  saveToStorage() {
    try {
      console.log('Store - Saving to localStorage:', {
        products: this.products.length,
        customers: this.customers.length,
        invoices: this.invoices.length
      });

      localStorage.setItem('bill-maker-products', JSON.stringify(this.products));
      localStorage.setItem('bill-maker-customers', JSON.stringify(this.customers));
      localStorage.setItem('bill-maker-invoices', JSON.stringify(this.invoices));

      console.log('Store - Successfully saved to localStorage');
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }

  // Product CRUD operations
  addProduct(productData) {
    const product = {
      id: this.generateId(),
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.products = [...this.products, product];
    this.saveToStorage();
    return product;
  }

  updateProduct(id, productData) {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products = this.products.map((product, i) =>
        i === index
          ? { ...product, ...productData, updatedAt: new Date() }
          : product
      );
      this.saveToStorage();
      return this.products[index];
    }
    return null;
  }

  deleteProduct(id) {
    this.products = this.products.filter(p => p.id !== id);
    this.saveToStorage();
  }

  getProduct(id) {
    return this.products.find(p => p.id === id);
  }

  // Customer CRUD operations
  addCustomer(customerData) {
    const customer = {
      id: this.generateId(),
      ...customerData,
      createdAt: new Date()
    };
    this.customers = [...this.customers, customer];
    this.saveToStorage();
    return customer;
  }

  updateCustomer(id, customerData) {
    const index = this.customers.findIndex(c => c.id === id);
    if (index !== -1) {
      this.customers = this.customers.map((customer, i) =>
        i === index ? { ...customer, ...customerData } : customer
      );
      this.saveToStorage();
      return this.customers[index];
    }
    return null;
  }

  deleteCustomer(id) {
    this.customers = this.customers.filter(c => c.id !== id);
    this.saveToStorage();
  }

  getCustomer(id) {
    return this.customers.find(c => c.id === id);
  }

  // Invoice CRUD operations
  addInvoice(invoiceData) {
    const invoice = {
      id: this.generateId(),
      ...invoiceData,
      createdAt: new Date()
    };
    this.invoices = [...this.invoices, invoice];
    console.log('Store - Added invoice:', invoice);
    console.log('Store - Total invoices now:', this.invoices.length);
    this.saveToStorage();
    return invoice;
  }

  getInvoice(id) {
    return this.invoices.find(i => i.id === id);
  }

  deleteInvoice(id) {
    this.invoices = this.invoices.filter(i => i.id !== id);
    this.saveToStorage();
  }

  // Utility method to generate unique IDs
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Clear all data (useful for testing)
  clearAllData() {
    this.products = [];
    this.customers = [];
    this.invoices = [];
    this.saveToStorage();
  }

  // Debug method to check localStorage contents
  debugLocalStorage() {
    try {
      const productsData = localStorage.getItem('bill-maker-products');
      const customersData = localStorage.getItem('bill-maker-customers');
      const invoicesData = localStorage.getItem('bill-maker-invoices');

      console.log('=== LOCALSTORAGE DEBUG ===');
      console.log('Raw products data:', productsData);
      console.log('Raw customers data:', customersData);
      console.log('Raw invoices data:', invoicesData);

      console.log('Parsed products:', productsData ? JSON.parse(productsData) : []);
      console.log('Parsed customers:', customersData ? JSON.parse(customersData) : []);
      console.log('Parsed invoices:', invoicesData ? JSON.parse(invoicesData) : []);
      console.log('==========================');
    } catch (error) {
      console.error('Error debugging localStorage:', error);
    }
  }
}
