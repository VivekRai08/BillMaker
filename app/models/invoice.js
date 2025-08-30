import Model, { attr } from '@ember-data/model';

export default class InvoiceModel extends Model {
  @attr('string') customerId;
  @attr('string') customerName;
  @attr('number') subtotal;
  @attr('number') totalGST;
  @attr('number') cgst;
  @attr('number') sgst;
  @attr('number') grandTotal;
  @attr('date') createdAt;

  // Note: For simplicity, we'll store items as JSON in a single attribute
  // In a real app, you might want to create a separate InvoiceItem model
  @attr() items; // Array of invoice items
}
