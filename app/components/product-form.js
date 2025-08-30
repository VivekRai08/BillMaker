import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductForm extends Component {
  @service store;
  @service gstCalculator;

  @tracked name = '';
  @tracked basePrice = '';
  @tracked gstRate = '';

  constructor() {
    super(...arguments);
    this.initializeForm();
  }

  initializeForm() {
    if (this.args.product) {
      // Editing existing product
      this.name = this.args.product.name || '';
      this.basePrice = this.args.product.basePrice?.toString() || '';
      this.gstRate = this.args.product.gstRate?.toString() || '';
    } else {
      // Adding new product
      this.resetForm();
    }
  }

  get isEditing() {
    return !!this.args.product;
  }

  get formTitle() {
    return this.isEditing ? 'Edit Product' : 'Add New Product';
  }

  get standardGSTRates() {
    return this.gstCalculator.getStandardGSTRates();
  }

  get isFormValid() {
    return this.name.trim() &&
           this.basePrice &&
           !isNaN(parseFloat(this.basePrice)) &&
           parseFloat(this.basePrice) > 0 &&
           this.gstRate &&
           !isNaN(parseFloat(this.gstRate)) &&
           this.gstCalculator.isValidGSTRate(parseFloat(this.gstRate));
  }

  get halfGSTRate() {
    if (this.gstRate && !isNaN(parseFloat(this.gstRate))) {
      return (parseFloat(this.gstRate) / 2).toFixed(2);
    }
    return '0.00';
  }

  get calculatedTotal() {
    if (this.basePrice && this.gstRate &&
        !isNaN(parseFloat(this.basePrice)) && !isNaN(parseFloat(this.gstRate))) {
      const base = parseFloat(this.basePrice);
      const gstPercent = parseFloat(this.gstRate);
      const gstAmount = base * (gstPercent / 100);
      return (base + gstAmount).toFixed(2);
    }
    return this.basePrice || '0.00';
  }

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  updateBasePrice(event) {
    this.basePrice = event.target.value;
  }

  @action
  updateGSTRate(event) {
    this.gstRate = event.target.value;
  }

  @action
  selectGSTRate(rate) {
    this.gstRate = rate.toString();
  }

  @action
  async saveProduct(event) {
    event.preventDefault();

    if (!this.isFormValid) {
      return;
    }

    const productData = {
      name: this.name.trim(),
      basePrice: parseFloat(this.basePrice),
      gstRate: parseFloat(this.gstRate)
    };

    try {
      if (this.isEditing) {
        this.store.updateProduct(this.args.product.id, productData);
      } else {
        this.store.addProduct(productData);
      }

      this.resetForm();
      if (this.args.onSave) {
        this.args.onSave();
      }
    } catch (error) {
      console.error('Error saving product:', error);
      // Handle error (could show a notification)
    }
  }

  @action
  cancelForm() {
    this.resetForm();
    if (this.args.onCancel) {
      this.args.onCancel();
    }
  }

  @action
  resetForm() {
    this.name = '';
    this.basePrice = '';
    this.gstRate = '';
  }
}
