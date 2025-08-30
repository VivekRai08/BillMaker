import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductsController extends Controller {
  @service store;

  @tracked showProductForm = false;
  @tracked editingProduct = null;
  @tracked productName = '';
  @tracked productPrice = '';
  @tracked productGSTRate = '';

  get products() {
    return this.store.products;
  }

  @action
  showAddProductForm() {
    this.showProductForm = true;
    this.editingProduct = null;
    this.resetForm();
  }

  @action
  showEditProductForm(product) {
    this.showProductForm = true;
    this.editingProduct = product;
    this.productName = product.name;
    this.productPrice = product.basePrice.toString();
    this.productGSTRate = product.gstRate.toString();
  }

  @action
  hideProductForm() {
    this.showProductForm = false;
    this.editingProduct = null;
    this.resetForm();
  }

  @action
  updateProductName(event) {
    this.productName = event.target.value;
  }

  @action
  updateProductPrice(event) {
    this.productPrice = event.target.value;
  }

  @action
  updateProductGSTRate(event) {
    this.productGSTRate = event.target.value;
  }

  @action
  async saveProduct(event) {
    event.preventDefault();

    if (!this.productName.trim() || !this.productPrice || !this.productGSTRate) {
      alert('Please fill in all fields');
      return;
    }

    const productData = {
      name: this.productName.trim(),
      basePrice: parseFloat(this.productPrice),
      gstRate: parseFloat(this.productGSTRate)
    };

    try {
      if (this.editingProduct) {
        this.store.updateProduct(this.editingProduct.id, productData);
      } else {
        this.store.addProduct(productData);
      }

      this.hideProductForm();
      alert('Product saved successfully!');
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error saving product. Please try again.');
    }
  }

  @action
  resetForm() {
    this.productName = '';
    this.productPrice = '';
    this.productGSTRate = '';
  }

  @action
  deleteProduct(product) {
    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
      this.store.deleteProduct(product.id);
    }
  }

  @action
  handleProductSaved() {
    this.hideProductForm();
  }
}
