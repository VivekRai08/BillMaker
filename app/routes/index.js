import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service gstCalculator;

  get dashboardStats() {
    const products = this.store.products;
    const invoices = this.store.invoices;
    const customers = this.store.customers;

    const totalRevenue = invoices.reduce((sum, invoice) => sum + invoice.grandTotal, 0);
    const recentInvoices = invoices
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5);

    return {
      totalProducts: products.length,
      totalInvoices: invoices.length,
      totalCustomers: customers.length,
      totalRevenue: totalRevenue,
      recentInvoices: recentInvoices
    };
  }
}
