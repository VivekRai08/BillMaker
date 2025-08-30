import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BillingController extends Controller {
  @service store;
  @service gstCalculator;
  @service router;

  @tracked customerName = '';
  @tracked customerPhone = '';
  @tracked selectedItems = [];
  @tracked showInvoicePreview = false;

  get products() {
    return this.store.products;
  }

  get invoiceCalculation() {
    if (this.selectedItems.length === 0) {
      return {
        subtotal: 0,
        totalGST: 0,
        cgst: 0,
        sgst: 0,
        grandTotal: 0,
        items: []
      };
    }

    return this.gstCalculator.calculateInvoiceGST(this.selectedItems);
  }

  @action
  updateCustomerName(event) {
    this.customerName = event.target.value;
  }

  @action
  updateCustomerPhone(event) {
    this.customerPhone = event.target.value;
  }

  @action
  addProductToBill(product) {
    const existingItem = this.selectedItems.find(item => item.productId === product.id);

    if (existingItem) {
      // Increase quantity if product already exists
      existingItem.quantity += 1;
      this.selectedItems = [...this.selectedItems];
    } else {
      // Add new item
      const newItem = {
        productId: product.id,
        productName: product.name,
        quantity: 1,
        basePrice: product.basePrice,
        gstRate: product.gstRate
      };
      this.selectedItems = [...this.selectedItems, newItem];
    }
  }

  @action
  updateItemQuantity(item, event) {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity <= 0) {
      this.removeItemFromBill(item);
      return;
    }

    item.quantity = newQuantity;
    this.selectedItems = [...this.selectedItems];
  }

  @action
  removeItemFromBill(itemToRemove) {
    this.selectedItems = this.selectedItems.filter(item => item !== itemToRemove);
  }

  @action
  clearBill() {
    this.customerName = '';
    this.customerPhone = '';
    this.selectedItems = [];
    this.showInvoicePreview = false;
  }

  @action
  generateInvoice() {
    console.log('Generating invoice...');
    console.log('Customer name:', this.customerName);
    console.log('Selected items:', this.selectedItems);
    console.log('Invoice calculation:', this.invoiceCalculation);

    if (!this.customerName.trim() || this.selectedItems.length === 0) {
      alert('Please enter customer name and add at least one product.');
      return;
    }

    // Create customer if doesn't exist
    let customer = this.store.customers.find(c => c.name === this.customerName.trim());
    if (!customer) {
      customer = this.store.addCustomer({
        name: this.customerName.trim(),
        phone: this.customerPhone.trim() || undefined
      });
      console.log('Created customer:', customer);
    }

    // Create invoice
    const invoiceData = {
      customerId: customer.id,
      customerName: customer.name,
      items: this.invoiceCalculation.items,
      subtotal: this.invoiceCalculation.subtotal,
      totalGST: this.invoiceCalculation.totalGST,
      cgst: this.invoiceCalculation.cgst,
      sgst: this.invoiceCalculation.sgst,
      grandTotal: this.invoiceCalculation.grandTotal
    };

    console.log('Invoice data:', invoiceData);

    const invoice = this.store.addInvoice(invoiceData);
    console.log('Created invoice:', invoice);

    // Navigate to invoice view
    console.log('Navigating to invoice:', invoice.id);
    this.router.transitionTo('invoice', invoice.id);
  }

  @action
  toggleInvoicePreview() {
    this.showInvoicePreview = !this.showInvoicePreview;
  }

  @action
  formatCurrency(amount) {
    return this.gstCalculator.formatCurrency(amount);
  }

  @action
  formatGSTRate(rate) {
    return this.gstCalculator.formatGSTRate(rate);
  }

  @action
  calculateItemTotal(basePrice, quantity) {
    return basePrice * quantity;
  }
}
