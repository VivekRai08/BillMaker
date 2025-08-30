import Service from '@ember/service';

export default class GstCalculatorService extends Service {
  /**
   * Calculate GST for a single product item
   * @param {number} basePrice - Base price of the product
   * @param {number} quantity - Quantity of the product
   * @param {number} gstRate - GST rate as percentage (e.g., 18 for 18%)
   * @returns {Object} GST calculation results
   */
  calculateItemGST(basePrice, quantity, gstRate) {
    const subtotal = basePrice * quantity;
    const gstAmount = (subtotal * gstRate) / 100;
    const cgstAmount = gstAmount / 2;
    const sgstAmount = gstAmount / 2;
    const totalPrice = subtotal + gstAmount;

    return {
      subtotal: subtotal,
      gstAmount: gstAmount,
      cgstAmount: cgstAmount,
      sgstAmount: sgstAmount,
      totalPrice: totalPrice
    };
  }

  /**
   * Calculate GST for multiple invoice items
   * @param {Array} items - Array of invoice items with product details
   * @returns {Object} Complete GST calculation for the invoice
   */
  calculateInvoiceGST(items) {
    let totalSubtotal = 0;
    let totalGST = 0;
    let totalCGST = 0;
    let totalSGST = 0;
    let grandTotal = 0;

    const calculatedItems = items.map(item => {
      const gstCalc = this.calculateItemGST(
        item.basePrice,
        item.quantity,
        item.gstRate
      );

      totalSubtotal += gstCalc.subtotal;
      totalGST += gstCalc.gstAmount;
      totalCGST += gstCalc.cgstAmount;
      totalSGST += gstCalc.sgstAmount;
      grandTotal += gstCalc.totalPrice;

      return {
        ...item,
        subtotal: gstCalc.subtotal,
        gstAmount: gstCalc.gstAmount,
        cgstAmount: gstCalc.cgstAmount,
        sgstAmount: gstCalc.sgstAmount,
        totalPrice: gstCalc.totalPrice
      };
    });

    return {
      items: calculatedItems,
      subtotal: totalSubtotal,
      totalGST: totalGST,
      cgst: totalCGST,
      sgst: totalSGST,
      grandTotal: grandTotal
    };
  }

  /**
   * Format currency amount for display
   * @param {number} amount - Amount to format
   * @returns {string} Formatted currency string
   */
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  }

  /**
   * Format GST rate for display
   * @param {number} rate - GST rate
   * @returns {string} Formatted GST rate string
   */
  formatGSTRate(rate) {
    return `${rate}%`;
  }

  /**
   * Validate GST rate
   * @param {number} rate - GST rate to validate
   * @returns {boolean} True if valid GST rate
   */
  isValidGSTRate(rate) {
    return typeof rate === 'number' && rate >= 0 && rate <= 100;
  }

  /**
   * Get standard GST rates for India
   * @returns {Array} Array of standard GST rates
   */
  getStandardGSTRates() {
    return [0, 5, 12, 18, 28];
  }
}
