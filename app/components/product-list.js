import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductList extends Component {
  @service store;
  @service gstCalculator;

  get products() {
    return this.store.products;
  }

  @action
  editProduct(product) {
    // Pass the product to the parent component for editing
    if (this.args.onEditProduct) {
      this.args.onEditProduct(product);
    }
  }

  @action
  deleteProduct(product) {
    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
      this.store.deleteProduct(product.id);
    }
  }

  @action
  formatCurrency(amount) {
    return this.gstCalculator.formatCurrency(amount);
  }

  @action
  formatGSTRate(rate) {
    return this.gstCalculator.formatGSTRate(rate);
  }
}
