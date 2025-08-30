import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service store;
  @service gstCalculator;

  get totalProducts() {
    return this.store.products.length;
  }

  get totalInvoices() {
    return this.store.invoices.length;
  }

  get totalCustomers() {
    return this.store.customers.length;
  }

  get totalRevenue() {
    return this.store.invoices.reduce((sum, invoice) => sum + invoice.grandTotal, 0);
  }
}
