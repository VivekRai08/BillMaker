import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class InvoiceRoute extends Route {
  @service store;
  @service router;

  model(params) {
    const invoice = this.store.getInvoice(params.invoice_id);
    if (!invoice) {
      // Handle invoice not found
      this.router.transitionTo('invoices');
      return null;
    }
    return invoice;
  }
}
