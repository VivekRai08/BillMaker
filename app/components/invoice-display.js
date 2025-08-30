import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class InvoiceDisplay extends Component {
  @service gstCalculator;

  get shopName() {
    return 'My Shop'; // You can make this configurable
  }

  get invoiceDate() {
    return new Date(this.args.invoice.createdAt).toLocaleDateString('en-IN');
  }

  get invoiceTime() {
    return new Date(this.args.invoice.createdAt).toLocaleTimeString('en-IN');
  }

  @action
  printInvoice() {
    window.print();
  }

  @action
  downloadPDF() {
    // For now, we'll use the browser's print to PDF functionality
    // In a real application, you might integrate with a PDF generation library
    const printContent = document.querySelector('.invoice-printable');
    if (printContent) {
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent.outerHTML;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload(); // Refresh to restore original content
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

  @action
  getItemNumber(index) {
    return index + 1;
  }
}
