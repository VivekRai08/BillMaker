'use strict';



;define("bill-maker/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "bill-maker/config/environment", "@embroider/macros/es-compat2"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment, _esCompat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"bill-maker/config/environment",0,"@embroider/macros",0,"./deprecation-workflow"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  {
    (0, _esCompat.default)(require("bill-maker/deprecation-workflow"));
  }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("bill-maker/components/billing-form", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "PMgLC8ul",
    "block": "[[[18,1,null]],[\"&default\"],[\"yield\"]]",
    "moduleName": "bill-maker/components/billing-form.hbs",
    "isStrictMode": false
  });
  class BillingForm extends _component2.default {}
  _exports.default = BillingForm;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, BillingForm);
});
;define("bill-maker/components/invoice-display", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="invoice-container">
    <div class="invoice-header">
      <div class="invoice-actions">
        <button
          type="button"
          class="btn btn-secondary"
          {{on "click" this.printInvoice}}
        >
          <i class="icon-print"></i>
          Print Invoice
        </button>
        <button
          type="button"
          class="btn btn-primary"
          {{on "click" this.downloadPDF}}
        >
          <i class="icon-download"></i>
          Download PDF
        </button>
      </div>
    </div>
  
    <div class="invoice-printable">
      {{!-- Invoice Header --}}
      <div class="invoice-header-section">
        <div class="shop-details">
          <h1 class="shop-name">{{this.shopName}}</h1>
          <div class="shop-info">
            <p>123 Business Street</p>
            <p>City, State - 123456</p>
            <p>Phone: +91-9876543210</p>
            <p>GSTIN: 22AAAAA0000A1Z5</p>
          </div>
        </div>
        <div class="invoice-details">
          <h2>TAX INVOICE</h2>
          <div class="invoice-meta">
            <p><strong>Invoice No:</strong> {{@invoice.id}}</p>
            <p><strong>Date:</strong> {{this.invoiceDate}}</p>
            <p><strong>Time:</strong> {{this.invoiceTime}}</p>
          </div>
        </div>
      </div>
  
      {{!-- Customer Details --}}
      <div class="customer-details">
        <h3>Bill To:</h3>
        <div class="customer-info">
          <p><strong>{{@invoice.customerName}}</strong></p>
          {{#if @invoice.customerPhone}}
            <p>Phone: {{@invoice.customerPhone}}</p>
          {{/if}}
        </div>
      </div>
  
      {{!-- Invoice Items Table --}}
      <div class="invoice-items">
        <table class="invoice-table">
          <thead>
            <tr>
              <th class="item-sno">S.No</th>
              <th class="item-description">Description</th>
              <th class="item-quantity">Qty</th>
              <th class="item-rate">Rate</th>
              <th class="item-amount">Amount</th>
            </tr>
          </thead>
          <tbody>
            {{#each @invoice.items as |item index|}}
              <tr>
                <td class="item-sno">{{this.getItemNumber index}}</td>
                <td class="item-description">
                  <div class="item-name">{{item.productName}}</div>
                  <div class="item-gst">GST @ {{item.gstRate}}%</div>
                </td>
                <td class="item-quantity">{{item.quantity}}</td>
                <td class="item-rate">₹{{item.basePrice}}</td>
                <td class="item-amount">₹{{item.subtotal}}</td>
              </tr>
            {{/each}}
          </tbody>
        </table>
      </div>
  
      {{!-- Invoice Summary --}}
      <div class="invoice-summary">
        <div class="summary-section">
          <div class="summary-row">
            <span class="summary-label">Subtotal:</span>
            <span class="summary-value">₹{{@invoice.subtotal}}</span>
          </div>
          <div class="summary-row gst-breakdown">
            <span class="summary-label">CGST:</span>
            <span class="summary-value">₹{{@invoice.cgst}}</span>
          </div>
          <div class="summary-row gst-breakdown">
            <span class="summary-label">SGST:</span>
            <span class="summary-value">₹{{@invoice.sgst}}</span>
          </div>
          <div class="summary-row total-row">
            <span class="summary-label">Grand Total:</span>
            <span class="summary-value">₹{{@invoice.grandTotal}}</span>
          </div>
        </div>
      </div>
  
      {{!-- GST Summary --}}
      <div class="gst-summary">
        <h4>GST Summary</h4>
        <div class="gst-summary-content">
          <p><strong>Total GST Amount:</strong> ₹{{@invoice.totalGST}}</p>
          <p><strong>CGST (50%):</strong> ₹{{@invoice.cgst}}</p>
          <p><strong>SGST (50%):</strong> ₹{{@invoice.sgst}}</p>
        </div>
      </div>
  
      {{!-- Footer --}}
      <div class="invoice-footer">
        <div class="footer-content">
          <p><strong>Thank you for your business!</strong></p>
          <p class="disclaimer">
            This is a computer generated invoice and does not require signature.
          </p>
          <div class="footer-meta">
            <p>Generated on: {{this.invoiceDate}} at {{this.invoiceTime}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "x5/3C9J4",
    "block": "[[[10,0],[14,0,\"invoice-container\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"invoice-header\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"invoice-actions\"],[12],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-secondary\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,0,[\"printInvoice\"]]],null],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"icon-print\"],[12],[13],[1,\"\\n        Print Invoice\\n      \"],[13],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,0,[\"downloadPDF\"]]],null],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"icon-download\"],[12],[13],[1,\"\\n        Download PDF\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"invoice-printable\"],[12],[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"invoice-header-section\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"shop-details\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"shop-name\"],[12],[1,[30,0,[\"shopName\"]]],[13],[1,\"\\n        \"],[10,0],[14,0,\"shop-info\"],[12],[1,\"\\n          \"],[10,2],[12],[1,\"123 Business Street\"],[13],[1,\"\\n          \"],[10,2],[12],[1,\"City, State - 123456\"],[13],[1,\"\\n          \"],[10,2],[12],[1,\"Phone: +91-9876543210\"],[13],[1,\"\\n          \"],[10,2],[12],[1,\"GSTIN: 22AAAAA0000A1Z5\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"invoice-details\"],[12],[1,\"\\n        \"],[10,\"h2\"],[12],[1,\"TAX INVOICE\"],[13],[1,\"\\n        \"],[10,0],[14,0,\"invoice-meta\"],[12],[1,\"\\n          \"],[10,2],[12],[10,\"strong\"],[12],[1,\"Invoice No:\"],[13],[1,\" \"],[1,[30,1,[\"id\"]]],[13],[1,\"\\n          \"],[10,2],[12],[10,\"strong\"],[12],[1,\"Date:\"],[13],[1,\" \"],[1,[30,0,[\"invoiceDate\"]]],[13],[1,\"\\n          \"],[10,2],[12],[10,\"strong\"],[12],[1,\"Time:\"],[13],[1,\" \"],[1,[30,0,[\"invoiceTime\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"customer-details\"],[12],[1,\"\\n      \"],[10,\"h3\"],[12],[1,\"Bill To:\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"customer-info\"],[12],[1,\"\\n        \"],[10,2],[12],[10,\"strong\"],[12],[1,[30,1,[\"customerName\"]]],[13],[13],[1,\"\\n\"],[41,[30,1,[\"customerPhone\"]],[[[1,\"          \"],[10,2],[12],[1,\"Phone: \"],[1,[30,1,[\"customerPhone\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"invoice-items\"],[12],[1,\"\\n      \"],[10,\"table\"],[14,0,\"invoice-table\"],[12],[1,\"\\n        \"],[10,\"thead\"],[12],[1,\"\\n          \"],[10,\"tr\"],[12],[1,\"\\n            \"],[10,\"th\"],[14,0,\"item-sno\"],[12],[1,\"S.No\"],[13],[1,\"\\n            \"],[10,\"th\"],[14,0,\"item-description\"],[12],[1,\"Description\"],[13],[1,\"\\n            \"],[10,\"th\"],[14,0,\"item-quantity\"],[12],[1,\"Qty\"],[13],[1,\"\\n            \"],[10,\"th\"],[14,0,\"item-rate\"],[12],[1,\"Rate\"],[13],[1,\"\\n            \"],[10,\"th\"],[14,0,\"item-amount\"],[12],[1,\"Amount\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,16],[[28,[37,16],[[30,1,[\"items\"]]],null]],null],null,[[[1,\"            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,0,\"item-sno\"],[12],[1,[28,[30,0,[\"getItemNumber\"]],[[30,3]],null]],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"item-description\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"item-name\"],[12],[1,[30,2,[\"productName\"]]],[13],[1,\"\\n                \"],[10,0],[14,0,\"item-gst\"],[12],[1,\"GST @ \"],[1,[30,2,[\"gstRate\"]]],[1,\"%\"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"item-quantity\"],[12],[1,[30,2,[\"quantity\"]]],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"item-rate\"],[12],[1,\"₹\"],[1,[30,2,[\"basePrice\"]]],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"item-amount\"],[12],[1,\"₹\"],[1,[30,2,[\"subtotal\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[2,3]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"invoice-summary\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"summary-section\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"summary-row\"],[12],[1,\"\\n          \"],[10,1],[14,0,\"summary-label\"],[12],[1,\"Subtotal:\"],[13],[1,\"\\n          \"],[10,1],[14,0,\"summary-value\"],[12],[1,\"₹\"],[1,[30,1,[\"subtotal\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"summary-row gst-breakdown\"],[12],[1,\"\\n          \"],[10,1],[14,0,\"summary-label\"],[12],[1,\"CGST:\"],[13],[1,\"\\n          \"],[10,1],[14,0,\"summary-value\"],[12],[1,\"₹\"],[1,[30,1,[\"cgst\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"summary-row gst-breakdown\"],[12],[1,\"\\n          \"],[10,1],[14,0,\"summary-label\"],[12],[1,\"SGST:\"],[13],[1,\"\\n          \"],[10,1],[14,0,\"summary-value\"],[12],[1,\"₹\"],[1,[30,1,[\"sgst\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"summary-row total-row\"],[12],[1,\"\\n          \"],[10,1],[14,0,\"summary-label\"],[12],[1,\"Grand Total:\"],[13],[1,\"\\n          \"],[10,1],[14,0,\"summary-value\"],[12],[1,\"₹\"],[1,[30,1,[\"grandTotal\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"gst-summary\"],[12],[1,\"\\n      \"],[10,\"h4\"],[12],[1,\"GST Summary\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"gst-summary-content\"],[12],[1,\"\\n        \"],[10,2],[12],[10,\"strong\"],[12],[1,\"Total GST Amount:\"],[13],[1,\" ₹\"],[1,[30,1,[\"totalGST\"]]],[13],[1,\"\\n        \"],[10,2],[12],[10,\"strong\"],[12],[1,\"CGST (50%):\"],[13],[1,\" ₹\"],[1,[30,1,[\"cgst\"]]],[13],[1,\"\\n        \"],[10,2],[12],[10,\"strong\"],[12],[1,\"SGST (50%):\"],[13],[1,\" ₹\"],[1,[30,1,[\"sgst\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"invoice-footer\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"footer-content\"],[12],[1,\"\\n        \"],[10,2],[12],[10,\"strong\"],[12],[1,\"Thank you for your business!\"],[13],[13],[1,\"\\n        \"],[10,2],[14,0,\"disclaimer\"],[12],[1,\"\\n          This is a computer generated invoice and does not require signature.\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"footer-meta\"],[12],[1,\"\\n          \"],[10,2],[12],[1,\"Generated on: \"],[1,[30,0,[\"invoiceDate\"]]],[1,\" at \"],[1,[30,0,[\"invoiceTime\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@invoice\",\"item\",\"index\"],[\"div\",\"button\",\"on\",\"i\",\"h1\",\"p\",\"h2\",\"strong\",\"h3\",\"if\",\"table\",\"thead\",\"tr\",\"th\",\"tbody\",\"each\",\"-track-array\",\"td\",\"span\",\"h4\"]]",
    "moduleName": "bill-maker/components/invoice-display.hbs",
    "isStrictMode": false
  });
  let InvoiceDisplay = _exports.default = (_class = class InvoiceDisplay extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "gstCalculator", _descriptor, this);
    }
    get shopName() {
      return 'My Shop'; // You can make this configurable
    }
    get invoiceDate() {
      return new Date(this.args.invoice.createdAt).toLocaleDateString('en-IN');
    }
    get invoiceTime() {
      return new Date(this.args.invoice.createdAt).toLocaleTimeString('en-IN');
    }
    printInvoice() {
      window.print();
    }
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
    formatCurrency(amount) {
      return this.gstCalculator.formatCurrency(amount);
    }
    formatGSTRate(rate) {
      return this.gstCalculator.formatGSTRate(rate);
    }
    getItemNumber(index) {
      return index + 1;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "gstCalculator", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "printInvoice", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "printInvoice"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "downloadPDF", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "downloadPDF"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "formatCurrency", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "formatCurrency"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "formatGSTRate", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "formatGSTRate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getItemNumber", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getItemNumber"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InvoiceDisplay);
});
;define("bill-maker/components/navigation", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <h1>Bill Maker</h1>
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          <LinkTo @route="index" class="nav-link">
            <i class="icon-home"></i>
            Home
          </LinkTo>
        </li>
        <li class="nav-item">
          <LinkTo @route="products" class="nav-link">
            <i class="icon-products"></i>
            Products
          </LinkTo>
        </li>
        <li class="nav-item">
          <LinkTo @route="billing" class="nav-link">
            <i class="icon-billing"></i>
            Billing
          </LinkTo>
        </li>
      </ul>
    </div>
  </nav>
  
  <main class="main-content">
    {{yield}}
  </main>
  */
  {
    "id": "7FhoMcFg",
    "block": "[[[10,\"nav\"],[14,0,\"navbar\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"nav-container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"nav-brand\"],[12],[1,\"\\n      \"],[10,\"h1\"],[12],[1,\"Bill Maker\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"ul\"],[14,0,\"nav-menu\"],[12],[1,\"\\n      \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n        \"],[8,[39,5],[[24,0,\"nav-link\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"i\"],[14,0,\"icon-home\"],[12],[13],[1,\"\\n          Home\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n        \"],[8,[39,5],[[24,0,\"nav-link\"]],[[\"@route\"],[\"products\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"i\"],[14,0,\"icon-products\"],[12],[13],[1,\"\\n          Products\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[1,\"\\n        \"],[8,[39,5],[[24,0,\"nav-link\"]],[[\"@route\"],[\"billing\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"i\"],[14,0,\"icon-billing\"],[12],[13],[1,\"\\n          Billing\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,\"main\"],[14,0,\"main-content\"],[12],[1,\"\\n  \"],[18,1,null],[1,\"\\n\"],[13]],[\"&default\"],[\"nav\",\"div\",\"h1\",\"ul\",\"li\",\"link-to\",\"i\",\"main\",\"yield\"]]",
    "moduleName": "bill-maker/components/navigation.hbs",
    "isStrictMode": false
  });
  class Navigation extends _component2.default {
    constructor() {
      super(...arguments);
    }
  }
  _exports.default = Navigation;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, Navigation);
});
;define("bill-maker/components/product-form", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="product-form-container">
    <div class="form-header">
      <h3>{{this.formTitle}}</h3>
    </div>
  
    <form class="product-form" {{on "submit" this.saveProduct}}>
      <div class="form-group">
        <label for="product-name" class="form-label">Product Name *</label>
        <input
          type="text"
          id="product-name"
          class="form-control"
          value={{this.name}}
          {{on "input" this.updateName}}
          placeholder="Enter product name"
          required
        />
      </div>
  
      <div class="form-group">
        <label for="base-price" class="form-label">Base Price (₹) *</label>
        <input
          type="number"
          id="base-price"
          class="form-control"
          value={{this.basePrice}}
          {{on "input" this.updateBasePrice}}
          placeholder="0.00"
          min="0"
          step="0.01"
          required
        />
      </div>
  
      <div class="form-group">
        <label for="gst-rate" class="form-label">GST Rate (%) *</label>
        <div class="gst-rate-input-group">
          <input
            type="number"
            id="gst-rate"
            class="form-control"
            value={{this.gstRate}}
            {{on "input" this.updateGSTRate}}
            placeholder="18"
            min="0"
            max="100"
            step="0.01"
            required
          />
          <div class="gst-rate-suggestions">
            <span class="suggestions-label">Quick select:</span>
            {{#each this.standardGSTRates as |rate|}}
              <button
                type="button"
                class="gst-rate-btn {{if (eq this.gstRate rate.toString) 'active'}}"
                {{on "click" (fn this.selectGSTRate rate)}}
              >
                {{rate}}%
              </button>
            {{/each}}
          </div>
        </div>
      </div>
  
      {{#if (and this.basePrice this.gstRate)}}
        <div class="gst-preview">
          <h4>GST Calculation Preview</h4>
          <div class="preview-details">
            <div class="preview-row">
              <span>Base Price:</span>
              <span>₹{{this.basePrice}}</span>
            </div>
            <div class="preview-row">
              <span>GST Rate:</span>
              <span>{{this.gstRate}}%</span>
            </div>
            <div class="preview-row">
              <span>CGST:</span>
              <span>{{this.halfGSTRate}}%</span>
            </div>
            <div class="preview-row">
              <span>SGST:</span>
              <span>{{this.halfGSTRate}}%</span>
            </div>
            <div class="preview-row total-row">
              <span>Total with GST:</span>
              <span>₹{{this.calculatedTotal}}</span>
            </div>
          </div>
        </div>
      {{/if}}
  
      <div class="form-actions">
        <button
          type="button"
          class="btn btn-secondary"
          {{on "click" this.cancelForm}}
        >
          Cancel
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          disabled={{not this.isFormValid}}
        >
          {{if this.isEditing "Update Product" "Add Product"}}
        </button>
      </div>
    </form>
  </div>
  */
  {
    "id": "brz0j0Kc",
    "block": "[[[10,0],[14,0,\"product-form-container\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"form-header\"],[12],[1,\"\\n    \"],[10,\"h3\"],[12],[1,[30,0,[\"formTitle\"]]],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[11,\"form\"],[24,0,\"product-form\"],[4,[38,3],[\"submit\",[30,0,[\"saveProduct\"]]],null],[12],[1,\"\\n    \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n      \"],[10,\"label\"],[14,\"for\",\"product-name\"],[14,0,\"form-label\"],[12],[1,\"Product Name *\"],[13],[1,\"\\n      \"],[11,\"input\"],[24,1,\"product-name\"],[24,0,\"form-control\"],[16,2,[30,0,[\"name\"]]],[24,\"placeholder\",\"Enter product name\"],[24,\"required\",\"\"],[24,4,\"text\"],[4,[38,3],[\"input\",[30,0,[\"updateName\"]]],null],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n      \"],[10,\"label\"],[14,\"for\",\"base-price\"],[14,0,\"form-label\"],[12],[1,\"Base Price (₹) *\"],[13],[1,\"\\n      \"],[11,\"input\"],[24,1,\"base-price\"],[24,0,\"form-control\"],[16,2,[30,0,[\"basePrice\"]]],[24,\"placeholder\",\"0.00\"],[24,\"min\",\"0\"],[24,\"step\",\"0.01\"],[24,\"required\",\"\"],[24,4,\"number\"],[4,[38,3],[\"input\",[30,0,[\"updateBasePrice\"]]],null],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n      \"],[10,\"label\"],[14,\"for\",\"gst-rate\"],[14,0,\"form-label\"],[12],[1,\"GST Rate (%) *\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"gst-rate-input-group\"],[12],[1,\"\\n        \"],[11,\"input\"],[24,1,\"gst-rate\"],[24,0,\"form-control\"],[16,2,[30,0,[\"gstRate\"]]],[24,\"placeholder\",\"18\"],[24,\"min\",\"0\"],[24,\"max\",\"100\"],[24,\"step\",\"0.01\"],[24,\"required\",\"\"],[24,4,\"number\"],[4,[38,3],[\"input\",[30,0,[\"updateGSTRate\"]]],null],[12],[13],[1,\"\\n        \"],[10,0],[14,0,\"gst-rate-suggestions\"],[12],[1,\"\\n          \"],[10,1],[14,0,\"suggestions-label\"],[12],[1,\"Quick select:\"],[13],[1,\"\\n\"],[42,[28,[37,8],[[28,[37,8],[[30,0,[\"standardGSTRates\"]]],null]],null],null,[[[1,\"            \"],[11,\"button\"],[16,0,[29,[\"gst-rate-btn \",[52,[28,[37,11],[[30,0,[\"gstRate\"]],[30,1,[\"toString\"]]],null],\"active\"]]]],[24,4,\"button\"],[4,[38,3],[\"click\",[28,[37,12],[[30,0,[\"selectGSTRate\"]],[30,1]],null]],null],[12],[1,\"\\n              \"],[1,[30,1]],[1,\"%\\n            \"],[13],[1,\"\\n\"]],[1]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[41,[28,[37,13],[[30,0,[\"basePrice\"]],[30,0,[\"gstRate\"]]],null],[[[1,\"      \"],[10,0],[14,0,\"gst-preview\"],[12],[1,\"\\n        \"],[10,\"h4\"],[12],[1,\"GST Calculation Preview\"],[13],[1,\"\\n        \"],[10,0],[14,0,\"preview-details\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"preview-row\"],[12],[1,\"\\n            \"],[10,1],[12],[1,\"Base Price:\"],[13],[1,\"\\n            \"],[10,1],[12],[1,\"₹\"],[1,[30,0,[\"basePrice\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"preview-row\"],[12],[1,\"\\n            \"],[10,1],[12],[1,\"GST Rate:\"],[13],[1,\"\\n            \"],[10,1],[12],[1,[30,0,[\"gstRate\"]]],[1,\"%\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"preview-row\"],[12],[1,\"\\n            \"],[10,1],[12],[1,\"CGST:\"],[13],[1,\"\\n            \"],[10,1],[12],[1,[30,0,[\"halfGSTRate\"]]],[1,\"%\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"preview-row\"],[12],[1,\"\\n            \"],[10,1],[12],[1,\"SGST:\"],[13],[1,\"\\n            \"],[10,1],[12],[1,[30,0,[\"halfGSTRate\"]]],[1,\"%\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"preview-row total-row\"],[12],[1,\"\\n            \"],[10,1],[12],[1,\"Total with GST:\"],[13],[1,\"\\n            \"],[10,1],[12],[1,\"₹\"],[1,[30,0,[\"calculatedTotal\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n    \"],[10,0],[14,0,\"form-actions\"],[12],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-secondary\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"cancelForm\"]]],null],[12],[1,\"\\n        Cancel\\n      \"],[13],[1,\"\\n      \"],[10,\"button\"],[14,0,\"btn btn-primary\"],[15,\"disabled\",[28,[37,15],[[30,0,[\"isFormValid\"]]],null]],[14,4,\"submit\"],[12],[1,\"\\n        \"],[1,[52,[30,0,[\"isEditing\"]],\"Update Product\",\"Add Product\"]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"rate\"],[\"div\",\"h3\",\"form\",\"on\",\"label\",\"input\",\"span\",\"each\",\"-track-array\",\"button\",\"if\",\"eq\",\"fn\",\"and\",\"h4\",\"not\"]]",
    "moduleName": "bill-maker/components/product-form.hbs",
    "isStrictMode": false
  });
  let ProductForm = _exports.default = (_class = class ProductForm extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "gstCalculator", _descriptor2, this);
      _initializerDefineProperty(this, "name", _descriptor3, this);
      _initializerDefineProperty(this, "basePrice", _descriptor4, this);
      _initializerDefineProperty(this, "gstRate", _descriptor5, this);
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
      return this.name.trim() && this.basePrice && !isNaN(parseFloat(this.basePrice)) && parseFloat(this.basePrice) > 0 && this.gstRate && !isNaN(parseFloat(this.gstRate)) && this.gstCalculator.isValidGSTRate(parseFloat(this.gstRate));
    }
    get halfGSTRate() {
      if (this.gstRate && !isNaN(parseFloat(this.gstRate))) {
        return (parseFloat(this.gstRate) / 2).toFixed(2);
      }
      return '0.00';
    }
    get calculatedTotal() {
      if (this.basePrice && this.gstRate && !isNaN(parseFloat(this.basePrice)) && !isNaN(parseFloat(this.gstRate))) {
        const base = parseFloat(this.basePrice);
        const gstPercent = parseFloat(this.gstRate);
        const gstAmount = base * (gstPercent / 100);
        return (base + gstAmount).toFixed(2);
      }
      return this.basePrice || '0.00';
    }
    updateName(event) {
      this.name = event.target.value;
    }
    updateBasePrice(event) {
      this.basePrice = event.target.value;
    }
    updateGSTRate(event) {
      this.gstRate = event.target.value;
    }
    selectGSTRate(rate) {
      this.gstRate = rate.toString();
    }
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
    cancelForm() {
      this.resetForm();
      if (this.args.onCancel) {
        this.args.onCancel();
      }
    }
    resetForm() {
      this.name = '';
      this.basePrice = '';
      this.gstRate = '';
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "gstCalculator", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "name", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "basePrice", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "gstRate", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "updateName", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateName"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateBasePrice", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateBasePrice"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateGSTRate", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateGSTRate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectGSTRate", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "selectGSTRate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancelForm", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cancelForm"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resetForm", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "resetForm"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ProductForm);
});
;define("bill-maker/components/product-list", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="product-list-container">
    <div class="product-list-header">
      <h2>Products</h2>
      <button
        type="button"
        class="btn btn-primary"
        {{on "click" @onAddProduct}}
      >
        <i class="icon-add"></i>
        Add Product
      </button>
    </div>
  
    {{#if this.products.length}}
      <div class="product-table-container">
        <table class="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Base Price</th>
              <th>GST Rate</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {{#each this.products as |product|}}
              <tr>
                <td>{{product.name}}</td>
                <td>{{this.formatCurrency product.basePrice}}</td>
                <td>{{this.formatGSTRate product.gstRate}}</td>
                <td>{{product.createdAt}}</td>
                <td class="actions-cell">
                  <button
                    type="button"
                    class="btn btn-sm btn-secondary"
                    {{on "click" (fn this.editProduct product)}}
                  >
                    <i class="icon-edit"></i>
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    {{on "click" (fn this.deleteProduct product)}}
                  >
                    <i class="icon-delete"></i>
                    Delete
                  </button>
                </td>
              </tr>
            {{/each}}
          </tbody>
        </table>
      </div>
    {{else}}
      <div class="empty-state">
        <div class="empty-state-content">
          <i class="icon-products-large"></i>
          <h3>No products yet</h3>
          <p>Get started by adding your first product</p>
          <button
            type="button"
            class="btn btn-primary"
            {{on "click" @onAddProduct}}
          >
            Add Your First Product
          </button>
        </div>
      </div>
    {{/if}}
  </div>
  */
  {
    "id": "lI9Xe7+M",
    "block": "[[[10,0],[14,0,\"product-list-container\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"product-list-header\"],[12],[1,\"\\n    \"],[10,\"h2\"],[12],[1,\"Products\"],[13],[1,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,1]],null],[12],[1,\"\\n      \"],[10,\"i\"],[14,0,\"icon-add\"],[12],[13],[1,\"\\n      Add Product\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"products\",\"length\"]],[[[1,\"    \"],[10,0],[14,0,\"product-table-container\"],[12],[1,\"\\n      \"],[10,\"table\"],[14,0,\"product-table\"],[12],[1,\"\\n        \"],[10,\"thead\"],[12],[1,\"\\n          \"],[10,\"tr\"],[12],[1,\"\\n            \"],[10,\"th\"],[12],[1,\"Name\"],[13],[1,\"\\n            \"],[10,\"th\"],[12],[1,\"Base Price\"],[13],[1,\"\\n            \"],[10,\"th\"],[12],[1,\"GST Rate\"],[13],[1,\"\\n            \"],[10,\"th\"],[12],[1,\"Created\"],[13],[1,\"\\n            \"],[10,\"th\"],[12],[1,\"Actions\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,12],[[28,[37,12],[[30,0,[\"products\"]]],null]],null],null,[[[1,\"            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[12],[1,[30,2,[\"name\"]]],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,[28,[30,0,[\"formatCurrency\"]],[[30,2,[\"basePrice\"]]],null]],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,[28,[30,0,[\"formatGSTRate\"]],[[30,2,[\"gstRate\"]]],null]],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,[30,2,[\"createdAt\"]]],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"actions-cell\"],[12],[1,\"\\n                \"],[11,\"button\"],[24,0,\"btn btn-sm btn-secondary\"],[24,4,\"button\"],[4,[38,3],[\"click\",[28,[37,14],[[30,0,[\"editProduct\"]],[30,2]],null]],null],[12],[1,\"\\n                  \"],[10,\"i\"],[14,0,\"icon-edit\"],[12],[13],[1,\"\\n                  Edit\\n                \"],[13],[1,\"\\n                \"],[11,\"button\"],[24,0,\"btn btn-sm btn-danger\"],[24,4,\"button\"],[4,[38,3],[\"click\",[28,[37,14],[[30,0,[\"deleteProduct\"]],[30,2]],null]],null],[12],[1,\"\\n                  \"],[10,\"i\"],[14,0,\"icon-delete\"],[12],[13],[1,\"\\n                  Delete\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[2]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,0],[14,0,\"empty-state\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"empty-state-content\"],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"icon-products-large\"],[12],[13],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"No products yet\"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"Get started by adding your first product\"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,1]],null],[12],[1,\"\\n          Add Your First Product\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]],[13]],[\"@onAddProduct\",\"product\"],[\"div\",\"h2\",\"button\",\"on\",\"i\",\"if\",\"table\",\"thead\",\"tr\",\"th\",\"tbody\",\"each\",\"-track-array\",\"td\",\"fn\",\"h3\",\"p\"]]",
    "moduleName": "bill-maker/components/product-list.hbs",
    "isStrictMode": false
  });
  let ProductList = _exports.default = (_class = class ProductList extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "gstCalculator", _descriptor2, this);
    }
    get products() {
      return this.store.products;
    }
    editProduct(product) {
      // Pass the product to the parent component for editing
      if (this.args.onEditProduct) {
        this.args.onEditProduct(product);
      }
    }
    deleteProduct(product) {
      if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
        this.store.deleteProduct(product.id);
      }
    }
    formatCurrency(amount) {
      return this.gstCalculator.formatCurrency(amount);
    }
    formatGSTRate(rate) {
      return this.gstCalculator.formatGSTRate(rate);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "gstCalculator", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "editProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "editProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "formatCurrency", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "formatCurrency"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "formatGSTRate", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "formatGSTRate"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ProductList);
});
;define("bill-maker/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("bill-maker/controllers/billing", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object", "@ember/service"], function (_exports, _controller, _tracking, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let BillingController = _exports.default = (_class = class BillingController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "gstCalculator", _descriptor2, this);
      _initializerDefineProperty(this, "router", _descriptor3, this);
      _initializerDefineProperty(this, "customerName", _descriptor4, this);
      _initializerDefineProperty(this, "customerPhone", _descriptor5, this);
      _initializerDefineProperty(this, "selectedItems", _descriptor6, this);
      _initializerDefineProperty(this, "showInvoicePreview", _descriptor7, this);
    }
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
    updateCustomerName(event) {
      this.customerName = event.target.value;
    }
    updateCustomerPhone(event) {
      this.customerPhone = event.target.value;
    }
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
    updateItemQuantity(item, event) {
      const newQuantity = parseInt(event.target.value);
      if (newQuantity <= 0) {
        this.removeItemFromBill(item);
        return;
      }
      item.quantity = newQuantity;
      this.selectedItems = [...this.selectedItems];
    }
    removeItemFromBill(itemToRemove) {
      this.selectedItems = this.selectedItems.filter(item => item !== itemToRemove);
    }
    clearBill() {
      this.customerName = '';
      this.customerPhone = '';
      this.selectedItems = [];
      this.showInvoicePreview = false;
    }
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
    toggleInvoicePreview() {
      this.showInvoicePreview = !this.showInvoicePreview;
    }
    formatCurrency(amount) {
      return this.gstCalculator.formatCurrency(amount);
    }
    formatGSTRate(rate) {
      return this.gstCalculator.formatGSTRate(rate);
    }
    calculateItemTotal(basePrice, quantity) {
      return basePrice * quantity;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "gstCalculator", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "customerName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "customerPhone", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "selectedItems", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "showInvoicePreview", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "updateCustomerName", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateCustomerName"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateCustomerPhone", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateCustomerPhone"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addProductToBill", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addProductToBill"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateItemQuantity", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateItemQuantity"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeItemFromBill", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeItemFromBill"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearBill", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearBill"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "generateInvoice", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "generateInvoice"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleInvoicePreview", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleInvoicePreview"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "formatCurrency", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "formatCurrency"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "formatGSTRate", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "formatGSTRate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "calculateItemTotal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "calculateItemTotal"), _class.prototype), _class);
});
;define("bill-maker/controllers/index", ["exports", "@ember/controller", "@ember/service"], function (_exports, _controller, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let IndexController = _exports.default = (_class = class IndexController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "gstCalculator", _descriptor2, this);
    }
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
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "gstCalculator", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("bill-maker/controllers/products", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object", "@ember/service"], function (_exports, _controller, _tracking, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ProductsController = _exports.default = (_class = class ProductsController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "showProductForm", _descriptor2, this);
      _initializerDefineProperty(this, "editingProduct", _descriptor3, this);
      _initializerDefineProperty(this, "productName", _descriptor4, this);
      _initializerDefineProperty(this, "productPrice", _descriptor5, this);
      _initializerDefineProperty(this, "productGSTRate", _descriptor6, this);
    }
    get products() {
      return this.store.products;
    }
    showAddProductForm() {
      this.showProductForm = true;
      this.editingProduct = null;
      this.resetForm();
    }
    showEditProductForm(product) {
      this.showProductForm = true;
      this.editingProduct = product;
      this.productName = product.name;
      this.productPrice = product.basePrice.toString();
      this.productGSTRate = product.gstRate.toString();
    }
    hideProductForm() {
      this.showProductForm = false;
      this.editingProduct = null;
      this.resetForm();
    }
    updateProductName(event) {
      this.productName = event.target.value;
    }
    updateProductPrice(event) {
      this.productPrice = event.target.value;
    }
    updateProductGSTRate(event) {
      this.productGSTRate = event.target.value;
    }
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
    resetForm() {
      this.productName = '';
      this.productPrice = '';
      this.productGSTRate = '';
    }
    deleteProduct(product) {
      if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
        this.store.deleteProduct(product.id);
      }
    }
    handleProductSaved() {
      this.hideProductForm();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "showProductForm", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "editingProduct", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "productName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "productPrice", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "productGSTRate", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "showAddProductForm", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showAddProductForm"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showEditProductForm", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showEditProductForm"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideProductForm", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "hideProductForm"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateProductName", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateProductName"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateProductPrice", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateProductPrice"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateProductGSTRate", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateProductGSTRate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resetForm", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "resetForm"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleProductSaved", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleProductSaved"), _class.prototype), _class);
});
;define("bill-maker/data-adapter", ["exports", "@ember-data/debug/data-adapter"], function (_exports, _dataAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/data-adapter"eaimeta@70e063a35619d71f
});
;define("bill-maker/deprecation-workflow", ["ember-cli-deprecation-workflow"], function (_emberCliDeprecationWorkflow) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-deprecation-workflow"eaimeta@70e063a35619d71f
  /**
   * Docs: https://github.com/ember-cli/ember-cli-deprecation-workflow
   */
  (0, _emberCliDeprecationWorkflow.default)({
    /**
      false by default, but if a developer / team wants to be more aggressive about being proactive with
      handling their deprecations, this should be set to "true"
    */
    throwOnUnhandled: false,
    workflow: [
      /* ... handlers ... */
      /* to generate this list, run your app for a while (or run the test suite),
       * and then run in the browser console:
       *
       *    deprecationWorkflow.flushDeprecations()
       *
       * And copy the handlers here
       */
      /* example: */
      /* { handler: 'silence', matchId: 'template-action' }, */
    ]
  });
});
;define("bill-maker/helpers/app-version", ["exports", "@ember/component/helper", "bill-maker/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"bill-maker/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("bill-maker/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("bill-maker/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "bill-maker/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"bill-maker/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("bill-maker/initializers/ember-data", ["exports", "@ember-data/request-utils/deprecation-support"], function (_exports, _deprecationSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/request-utils/deprecation-support"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("bill-maker/models/customer", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let CustomerModel = _exports.default = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('date'), _class = class CustomerModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "phone", _descriptor2, this);
      _initializerDefineProperty(this, "createdAt", _descriptor3, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "phone", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "createdAt", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("bill-maker/models/invoice", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let InvoiceModel = _exports.default = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('number'), _dec4 = (0, _model.attr)('number'), _dec5 = (0, _model.attr)('number'), _dec6 = (0, _model.attr)('number'), _dec7 = (0, _model.attr)('number'), _dec8 = (0, _model.attr)('date'), _dec9 = (0, _model.attr)(), _class = class InvoiceModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "customerId", _descriptor, this);
      _initializerDefineProperty(this, "customerName", _descriptor2, this);
      _initializerDefineProperty(this, "subtotal", _descriptor3, this);
      _initializerDefineProperty(this, "totalGST", _descriptor4, this);
      _initializerDefineProperty(this, "cgst", _descriptor5, this);
      _initializerDefineProperty(this, "sgst", _descriptor6, this);
      _initializerDefineProperty(this, "grandTotal", _descriptor7, this);
      _initializerDefineProperty(this, "createdAt", _descriptor8, this);
      // Note: For simplicity, we'll store items as JSON in a single attribute
      // In a real app, you might want to create a separate InvoiceItem model
      _initializerDefineProperty(this, "items", _descriptor9, this);
    } // Array of invoice items
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "customerId", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "customerName", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "subtotal", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "totalGST", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "cgst", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "sgst", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "grandTotal", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "createdAt", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "items", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("bill-maker/models/product", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ProductModel = _exports.default = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('number'), _dec3 = (0, _model.attr)('number'), _dec4 = (0, _model.attr)('date'), _dec5 = (0, _model.attr)('date'), _class = class ProductModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "basePrice", _descriptor2, this);
      _initializerDefineProperty(this, "gstRate", _descriptor3, this);
      _initializerDefineProperty(this, "createdAt", _descriptor4, this);
      _initializerDefineProperty(this, "updatedAt", _descriptor5, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "basePrice", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "gstRate", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "createdAt", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "updatedAt", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("bill-maker/router", ["exports", "@ember/routing/router", "bill-maker/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"bill-maker/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('index', {
      path: '/'
    });
    this.route('products');
    this.route('billing');
    this.route('invoice', {
      path: '/invoice/:invoice_id'
    });
  });
});
;define("bill-maker/routes/billing", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class BillingRoute extends _route.default {}
  _exports.default = BillingRoute;
});
;define("bill-maker/routes/index", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let IndexRoute = _exports.default = (_class = class IndexRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "gstCalculator", _descriptor2, this);
    }
    get dashboardStats() {
      const products = this.store.products;
      const invoices = this.store.invoices;
      const customers = this.store.customers;
      const totalRevenue = invoices.reduce((sum, invoice) => sum + invoice.grandTotal, 0);
      const recentInvoices = invoices.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
      return {
        totalProducts: products.length,
        totalInvoices: invoices.length,
        totalCustomers: customers.length,
        totalRevenue: totalRevenue,
        recentInvoices: recentInvoices
      };
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "gstCalculator", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("bill-maker/routes/invoice", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let InvoiceRoute = _exports.default = (_class = class InvoiceRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
    }
    model(params) {
      const invoice = this.store.getInvoice(params.invoice_id);
      if (!invoice) {
        // Handle invoice not found
        this.router.transitionTo('invoices');
        return null;
      }
      return invoice;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("bill-maker/routes/products", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ProductsRoute extends _route.default {}
  _exports.default = ProductsRoute;
});
;define("bill-maker/services/gst-calculator", ["exports", "@ember/service"], function (_exports, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/service"eaimeta@70e063a35619d71f
  class GstCalculatorService extends _service.default {
    /**
     * Calculate GST for a single product item
     * @param {number} basePrice - Base price of the product
     * @param {number} quantity - Quantity of the product
     * @param {number} gstRate - GST rate as percentage (e.g., 18 for 18%)
     * @returns {Object} GST calculation results
     */
    calculateItemGST(basePrice, quantity, gstRate) {
      const subtotal = basePrice * quantity;
      const gstAmount = subtotal * gstRate / 100;
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
        const gstCalc = this.calculateItemGST(item.basePrice, item.quantity, item.gstRate);
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
  _exports.default = GstCalculatorService;
});
;define("bill-maker/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("bill-maker/services/store", ["exports", "@ember/service", "@glimmer/tracking"], function (_exports, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let StoreService = _exports.default = (_class = class StoreService extends _service.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "products", _descriptor, this);
      _initializerDefineProperty(this, "customers", _descriptor2, this);
      _initializerDefineProperty(this, "invoices", _descriptor3, this);
      this.loadFromStorage();

      // Make debug method available globally for console access
      if (typeof window !== 'undefined') {
        window.debugBillMakerStore = () => this.debugLocalStorage();
      }
    }

    // Load data from localStorage
    loadFromStorage() {
      try {
        const productsData = localStorage.getItem('bill-maker-products');
        const customersData = localStorage.getItem('bill-maker-customers');
        const invoicesData = localStorage.getItem('bill-maker-invoices');
        this.products = productsData ? JSON.parse(productsData) : [];
        this.customers = customersData ? JSON.parse(customersData) : [];
        this.invoices = invoicesData ? JSON.parse(invoicesData) : [];
        console.log('Store loaded:', {
          products: this.products.length,
          customers: this.customers.length,
          invoices: this.invoices.length
        });
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
        this.products = [];
        this.customers = [];
        this.invoices = [];
      }
    }

    // Save data to localStorage
    saveToStorage() {
      try {
        console.log('Store - Saving to localStorage:', {
          products: this.products.length,
          customers: this.customers.length,
          invoices: this.invoices.length
        });
        localStorage.setItem('bill-maker-products', JSON.stringify(this.products));
        localStorage.setItem('bill-maker-customers', JSON.stringify(this.customers));
        localStorage.setItem('bill-maker-invoices', JSON.stringify(this.invoices));
        console.log('Store - Successfully saved to localStorage');
      } catch (error) {
        console.error('Error saving data to localStorage:', error);
      }
    }

    // Product CRUD operations
    addProduct(productData) {
      const product = {
        id: this.generateId(),
        ...productData,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.products = [...this.products, product];
      this.saveToStorage();
      return product;
    }
    updateProduct(id, productData) {
      const index = this.products.findIndex(p => p.id === id);
      if (index !== -1) {
        this.products = this.products.map((product, i) => i === index ? {
          ...product,
          ...productData,
          updatedAt: new Date()
        } : product);
        this.saveToStorage();
        return this.products[index];
      }
      return null;
    }
    deleteProduct(id) {
      this.products = this.products.filter(p => p.id !== id);
      this.saveToStorage();
    }
    getProduct(id) {
      return this.products.find(p => p.id === id);
    }

    // Customer CRUD operations
    addCustomer(customerData) {
      const customer = {
        id: this.generateId(),
        ...customerData,
        createdAt: new Date()
      };
      this.customers = [...this.customers, customer];
      this.saveToStorage();
      return customer;
    }
    updateCustomer(id, customerData) {
      const index = this.customers.findIndex(c => c.id === id);
      if (index !== -1) {
        this.customers = this.customers.map((customer, i) => i === index ? {
          ...customer,
          ...customerData
        } : customer);
        this.saveToStorage();
        return this.customers[index];
      }
      return null;
    }
    deleteCustomer(id) {
      this.customers = this.customers.filter(c => c.id !== id);
      this.saveToStorage();
    }
    getCustomer(id) {
      return this.customers.find(c => c.id === id);
    }

    // Invoice CRUD operations
    addInvoice(invoiceData) {
      const invoice = {
        id: this.generateId(),
        ...invoiceData,
        createdAt: new Date()
      };
      this.invoices = [...this.invoices, invoice];
      console.log('Store - Added invoice:', invoice);
      console.log('Store - Total invoices now:', this.invoices.length);
      this.saveToStorage();
      return invoice;
    }
    getInvoice(id) {
      return this.invoices.find(i => i.id === id);
    }
    deleteInvoice(id) {
      this.invoices = this.invoices.filter(i => i.id !== id);
      this.saveToStorage();
    }

    // Utility method to generate unique IDs
    generateId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Clear all data (useful for testing)
    clearAllData() {
      this.products = [];
      this.customers = [];
      this.invoices = [];
      this.saveToStorage();
    }

    // Debug method to check localStorage contents
    debugLocalStorage() {
      try {
        const productsData = localStorage.getItem('bill-maker-products');
        const customersData = localStorage.getItem('bill-maker-customers');
        const invoicesData = localStorage.getItem('bill-maker-invoices');
        console.log('=== LOCALSTORAGE DEBUG ===');
        console.log('Raw products data:', productsData);
        console.log('Raw customers data:', customersData);
        console.log('Raw invoices data:', invoicesData);
        console.log('Parsed products:', productsData ? JSON.parse(productsData) : []);
        console.log('Parsed customers:', customersData ? JSON.parse(customersData) : []);
        console.log('Parsed invoices:', invoicesData ? JSON.parse(invoicesData) : []);
        console.log('==========================');
      } catch (error) {
        console.error('Error debugging localStorage:', error);
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "products", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "customers", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "invoices", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _class);
});
;define("bill-maker/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Bill Maker"}}
  
  <Navigation>
    {{outlet}}
  </Navigation>
  */
  {
    "id": "zlULI2Vn",
    "block": "[[[1,[28,[35,0],[\"Bill Maker\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"\\n  \"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[]]]]]],[],[\"page-title\",\"navigation\",\"component\",\"-outlet\"]]",
    "moduleName": "bill-maker/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("bill-maker/templates/billing", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Billing"}}
  
  <div class="billing-page">
    <div class="page-header">
      <h2>Create Invoice</h2>
    </div>
  
    <div class="card mb-4">
      <h3>Customer Details</h3>
      <div class="form-group">
        <label class="form-label">Customer Name *</label>
        <input
          type="text"
          class="form-control"
          value={{this.customerName}}
          {{on "input" this.updateCustomerName}}
          placeholder="Enter customer name"
          required
        >
      </div>
    </div>
  
    <div class="card mb-4">
      <h3>Available Products</h3>
      {{#if this.products.length}}
        <div class="products-grid">
          {{#each this.products as |product|}}
            <div class="product-card">
              <div class="product-info">
                <h4>{{product.name}}</h4>
                <div class="product-details">
                  <span class="price">₹{{product.basePrice}}</span>
                  <span class="gst-rate">GST: {{product.gstRate}}%</span>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                {{on "click" (fn this.addProductToBill product)}}
              >
                <i class="icon-add"></i>
                Add to Bill
              </button>
            </div>
          {{/each}}
        </div>
      {{else}}
        <div class="empty-state">
          <div class="empty-state-content">
            <i class="icon-products-large"></i>
            <h3>No products available</h3>
            <p>Please add products first to create invoices</p>
            <LinkTo @route="products" class="btn btn-primary">
              Add Products
            </LinkTo>
          </div>
        </div>
      {{/if}}
    </div>
  
    {{#if this.selectedItems.length}}
      <div class="card mb-4">
        <h3>Selected Items</h3>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {{#each this.selectedItems as |item|}}
                <tr>
                  <td>{{item.productName}}</td>
                  <td>₹{{item.basePrice}}</td>
                  <td>
                    <input
                      type="number"
                      class="quantity-input"
                      value={{item.quantity}}
                      min="1"
                      {{on "input" (fn this.updateItemQuantity item)}}
                    >
                  </td>
                  <td>₹{{this.calculateItemTotal item.basePrice item.quantity}}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-sm btn-danger"
                      {{on "click" (fn this.removeItemFromBill item)}}
                    >
                      <i class="icon-remove"></i>
                      Remove
                    </button>
                  </td>
                </tr>
              {{/each}}
            </tbody>
          </table>
        </div>
  
        <div class="bill-summary">
          <h4>Bill Summary</h4>
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>₹{{this.invoiceCalculation.subtotal}}</span>
          </div>
          <div class="summary-row">
            <span>CGST:</span>
            <span>₹{{this.invoiceCalculation.cgst}}</span>
          </div>
          <div class="summary-row">
            <span>SGST:</span>
            <span>₹{{this.invoiceCalculation.sgst}}</span>
          </div>
          <div class="summary-row total-row">
            <span>Grand Total:</span>
            <span>₹{{this.invoiceCalculation.grandTotal}}</span>
          </div>
        </div>
  
        <div class="form-actions">
          <button
            type="button"
            class="btn btn-success"
            {{on "click" this.generateInvoice}}
          >
            <i class="icon-generate"></i>
            Generate Invoice
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            {{on "click" this.clearBill}}
          >
            <i class="icon-clear"></i>
            Clear Bill
          </button>
        </div>
      </div>
    {{/if}}
  </div>
  */
  {
    "id": "86ZJVc1N",
    "block": "[[[1,[28,[35,0],[\"Billing\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"billing-page\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"page-header\"],[12],[1,\"\\n    \"],[10,\"h2\"],[12],[1,\"Create Invoice\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"card mb-4\"],[12],[1,\"\\n    \"],[10,\"h3\"],[12],[1,\"Customer Details\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n      \"],[10,\"label\"],[14,0,\"form-label\"],[12],[1,\"Customer Name *\"],[13],[1,\"\\n      \"],[11,\"input\"],[24,0,\"form-control\"],[16,2,[30,0,[\"customerName\"]]],[24,\"placeholder\",\"Enter customer name\"],[24,\"required\",\"\"],[24,4,\"text\"],[4,[38,6],[\"input\",[30,0,[\"updateCustomerName\"]]],null],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"card mb-4\"],[12],[1,\"\\n    \"],[10,\"h3\"],[12],[1,\"Available Products\"],[13],[1,\"\\n\"],[41,[30,0,[\"products\",\"length\"]],[[[1,\"      \"],[10,0],[14,0,\"products-grid\"],[12],[1,\"\\n\"],[42,[28,[37,9],[[28,[37,9],[[30,0,[\"products\"]]],null]],null],null,[[[1,\"          \"],[10,0],[14,0,\"product-card\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"product-info\"],[12],[1,\"\\n              \"],[10,\"h4\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n              \"],[10,0],[14,0,\"product-details\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"price\"],[12],[1,\"₹\"],[1,[30,1,[\"basePrice\"]]],[13],[1,\"\\n                \"],[10,1],[14,0,\"gst-rate\"],[12],[1,\"GST: \"],[1,[30,1,[\"gstRate\"]]],[1,\"%\"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[11,\"button\"],[24,0,\"btn btn-primary btn-sm\"],[24,4,\"button\"],[4,[38,6],[\"click\",[28,[37,13],[[30,0,[\"addProductToBill\"]],[30,1]],null]],null],[12],[1,\"\\n              \"],[10,\"i\"],[14,0,\"icon-add\"],[12],[13],[1,\"\\n              Add to Bill\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[1]],null],[1,\"      \"],[13],[1,\"\\n\"]],[]],[[[1,\"      \"],[10,0],[14,0,\"empty-state\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"empty-state-content\"],[12],[1,\"\\n          \"],[10,\"i\"],[14,0,\"icon-products-large\"],[12],[13],[1,\"\\n          \"],[10,\"h3\"],[12],[1,\"No products available\"],[13],[1,\"\\n          \"],[10,2],[12],[1,\"Please add products first to create invoices\"],[13],[1,\"\\n          \"],[8,[39,16],[[24,0,\"btn btn-primary\"]],[[\"@route\"],[\"products\"]],[[\"default\"],[[[[1,\"\\n            Add Products\\n          \"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"selectedItems\",\"length\"]],[[[1,\"    \"],[10,0],[14,0,\"card mb-4\"],[12],[1,\"\\n      \"],[10,\"h3\"],[12],[1,\"Selected Items\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"table-container\"],[12],[1,\"\\n        \"],[10,\"table\"],[14,0,\"table\"],[12],[1,\"\\n          \"],[10,\"thead\"],[12],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"th\"],[12],[1,\"Product\"],[13],[1,\"\\n              \"],[10,\"th\"],[12],[1,\"Price\"],[13],[1,\"\\n              \"],[10,\"th\"],[12],[1,\"Qty\"],[13],[1,\"\\n              \"],[10,\"th\"],[12],[1,\"Total\"],[13],[1,\"\\n              \"],[10,\"th\"],[12],[1,\"Actions\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,9],[[28,[37,9],[[30,0,[\"selectedItems\"]]],null]],null],null,[[[1,\"              \"],[10,\"tr\"],[12],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,2,[\"productName\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,\"₹\"],[1,[30,2,[\"basePrice\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,\"\\n                  \"],[11,\"input\"],[24,0,\"quantity-input\"],[16,2,[30,2,[\"quantity\"]]],[24,\"min\",\"1\"],[24,4,\"number\"],[4,[38,6],[\"input\",[28,[37,13],[[30,0,[\"updateItemQuantity\"]],[30,2]],null]],null],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,\"₹\"],[1,[28,[30,0,[\"calculateItemTotal\"]],[[30,2,[\"basePrice\"]],[30,2,[\"quantity\"]]],null]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,\"\\n                  \"],[11,\"button\"],[24,0,\"btn btn-sm btn-danger\"],[24,4,\"button\"],[4,[38,6],[\"click\",[28,[37,13],[[30,0,[\"removeItemFromBill\"]],[30,2]],null]],null],[12],[1,\"\\n                    \"],[10,\"i\"],[14,0,\"icon-remove\"],[12],[13],[1,\"\\n                    Remove\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n\"]],[2]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"bill-summary\"],[12],[1,\"\\n        \"],[10,\"h4\"],[12],[1,\"Bill Summary\"],[13],[1,\"\\n        \"],[10,0],[14,0,\"summary-row\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"Subtotal:\"],[13],[1,\"\\n          \"],[10,1],[12],[1,\"₹\"],[1,[30,0,[\"invoiceCalculation\",\"subtotal\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"summary-row\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"CGST:\"],[13],[1,\"\\n          \"],[10,1],[12],[1,\"₹\"],[1,[30,0,[\"invoiceCalculation\",\"cgst\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"summary-row\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"SGST:\"],[13],[1,\"\\n          \"],[10,1],[12],[1,\"₹\"],[1,[30,0,[\"invoiceCalculation\",\"sgst\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"summary-row total-row\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"Grand Total:\"],[13],[1,\"\\n          \"],[10,1],[12],[1,\"₹\"],[1,[30,0,[\"invoiceCalculation\",\"grandTotal\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"form-actions\"],[12],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-success\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"generateInvoice\"]]],null],[12],[1,\"\\n          \"],[10,\"i\"],[14,0,\"icon-generate\"],[12],[13],[1,\"\\n          Generate Invoice\\n        \"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-secondary\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"clearBill\"]]],null],[12],[1,\"\\n          \"],[10,\"i\"],[14,0,\"icon-clear\"],[12],[13],[1,\"\\n          Clear Bill\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[13]],[\"product\",\"item\"],[\"page-title\",\"div\",\"h2\",\"h3\",\"label\",\"input\",\"on\",\"if\",\"each\",\"-track-array\",\"h4\",\"span\",\"button\",\"fn\",\"i\",\"p\",\"link-to\",\"table\",\"thead\",\"tr\",\"th\",\"tbody\",\"td\"]]",
    "moduleName": "bill-maker/templates/billing.hbs",
    "isStrictMode": false
  });
});
;define("bill-maker/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Bill Maker - Dashboard"}}
  
  <div class="dashboard-page">
    <div class="dashboard-header">
      <h1>Welcome to Bill Maker</h1>
      <p>Your complete billing solution for shop management</p>
    </div>
  
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon products-icon">
          <i class="icon-products"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{this.totalProducts}}</div>
          <div class="stat-label">Total Products</div>
        </div>
        <LinkTo @route="products" class="stat-link">
          Manage Products
        </LinkTo>
      </div>
  
      <div class="stat-card">
        <div class="stat-icon invoices-icon">
          <i class="icon-invoices"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{this.totalInvoices}}</div>
          <div class="stat-label">Total Invoices</div>
        </div>
        <LinkTo @route="billing" class="stat-link">
          Create Invoice
        </LinkTo>
      </div>
  
      <div class="stat-card">
        <div class="stat-icon customers-icon">
          <i class="icon-customers"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number">{{this.totalCustomers}}</div>
          <div class="stat-label">Total Customers</div>
        </div>
        <LinkTo @route="billing" class="stat-link">
          Create Invoice
        </LinkTo>
      </div>
  
      <div class="stat-card">
        <div class="stat-icon revenue-icon">
          <i class="icon-revenue"></i>
        </div>
        <div class="stat-content">
          <div class="stat-number">₹{{this.totalRevenue}}</div>
          <div class="stat-label">Total Revenue</div>
        </div>
        <LinkTo @route="billing" class="stat-link">
          Create More
        </LinkTo>
      </div>
    </div>
  
    <div class="quick-actions">
      <h2>Quick Actions</h2>
      <div class="actions-grid">
        <LinkTo @route="products" class="action-card">
          <div class="action-icon">
            <i class="icon-add-product"></i>
          </div>
          <div class="action-content">
            <h3>Add Product</h3>
            <p>Add new products to your inventory</p>
          </div>
        </LinkTo>
  
        <LinkTo @route="billing" class="action-card">
          <div class="action-icon">
            <i class="icon-create-invoice"></i>
          </div>
          <div class="action-content">
            <h3>Create Invoice</h3>
            <p>Generate a new invoice for a customer</p>
          </div>
        </LinkTo>
  
      </div>
    </div>
  
    <div class="getting-started">
      <h2>Get Started with Bill Maker</h2>
      <p>Follow these simple steps to start creating professional invoices:</p>
  
      <div class="steps">
        <div class="step">
          <h4>1. Add Your Products</h4>
          <p>Create your product catalog with prices and GST rates</p>
          <LinkTo @route="products" class="btn btn-primary">
            Add Products
          </LinkTo>
        </div>
  
        <div class="step">
          <h4>2. Create Your First Invoice</h4>
          <p>Generate professional invoices with automatic GST calculations</p>
          <LinkTo @route="billing" class="btn btn-primary">
            Create Invoice
          </LinkTo>
        </div>
  
        <div class="step">
          <h4>3. Print or Download</h4>
          <p>Print invoices directly or download as PDF for records</p>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "bLYgFj9r",
    "block": "[[[1,[28,[35,0],[\"Bill Maker - Dashboard\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"dashboard-page\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"dashboard-header\"],[12],[1,\"\\n    \"],[10,\"h1\"],[12],[1,\"Welcome to Bill Maker\"],[13],[1,\"\\n    \"],[10,2],[12],[1,\"Your complete billing solution for shop management\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"stats-grid\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"stat-card\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"stat-icon products-icon\"],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"icon-products\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"stat-content\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"stat-number\"],[12],[1,[30,0,[\"totalProducts\"]]],[13],[1,\"\\n        \"],[10,0],[14,0,\"stat-label\"],[12],[1,\"Total Products\"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[8,[39,5],[[24,0,\"stat-link\"]],[[\"@route\"],[\"products\"]],[[\"default\"],[[[[1,\"\\n        Manage Products\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"stat-card\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"stat-icon invoices-icon\"],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"icon-invoices\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"stat-content\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"stat-number\"],[12],[1,[30,0,[\"totalInvoices\"]]],[13],[1,\"\\n        \"],[10,0],[14,0,\"stat-label\"],[12],[1,\"Total Invoices\"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[8,[39,5],[[24,0,\"stat-link\"]],[[\"@route\"],[\"billing\"]],[[\"default\"],[[[[1,\"\\n        Create Invoice\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"stat-card\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"stat-icon customers-icon\"],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"icon-customers\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"stat-content\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"stat-number\"],[12],[1,[30,0,[\"totalCustomers\"]]],[13],[1,\"\\n        \"],[10,0],[14,0,\"stat-label\"],[12],[1,\"Total Customers\"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[8,[39,5],[[24,0,\"stat-link\"]],[[\"@route\"],[\"billing\"]],[[\"default\"],[[[[1,\"\\n        Create Invoice\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"stat-card\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"stat-icon revenue-icon\"],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"icon-revenue\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"stat-content\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"stat-number\"],[12],[1,\"₹\"],[1,[30,0,[\"totalRevenue\"]]],[13],[1,\"\\n        \"],[10,0],[14,0,\"stat-label\"],[12],[1,\"Total Revenue\"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[8,[39,5],[[24,0,\"stat-link\"]],[[\"@route\"],[\"billing\"]],[[\"default\"],[[[[1,\"\\n        Create More\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"quick-actions\"],[12],[1,\"\\n    \"],[10,\"h2\"],[12],[1,\"Quick Actions\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"actions-grid\"],[12],[1,\"\\n      \"],[8,[39,5],[[24,0,\"action-card\"]],[[\"@route\"],[\"products\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"action-icon\"],[12],[1,\"\\n          \"],[10,\"i\"],[14,0,\"icon-add-product\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"action-content\"],[12],[1,\"\\n          \"],[10,\"h3\"],[12],[1,\"Add Product\"],[13],[1,\"\\n          \"],[10,2],[12],[1,\"Add new products to your inventory\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\\n      \"],[8,[39,5],[[24,0,\"action-card\"]],[[\"@route\"],[\"billing\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"action-icon\"],[12],[1,\"\\n          \"],[10,\"i\"],[14,0,\"icon-create-invoice\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"action-content\"],[12],[1,\"\\n          \"],[10,\"h3\"],[12],[1,\"Create Invoice\"],[13],[1,\"\\n          \"],[10,2],[12],[1,\"Generate a new invoice for a customer\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"getting-started\"],[12],[1,\"\\n    \"],[10,\"h2\"],[12],[1,\"Get Started with Bill Maker\"],[13],[1,\"\\n    \"],[10,2],[12],[1,\"Follow these simple steps to start creating professional invoices:\"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"steps\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"step\"],[12],[1,\"\\n        \"],[10,\"h4\"],[12],[1,\"1. Add Your Products\"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"Create your product catalog with prices and GST rates\"],[13],[1,\"\\n        \"],[8,[39,5],[[24,0,\"btn btn-primary\"]],[[\"@route\"],[\"products\"]],[[\"default\"],[[[[1,\"\\n          Add Products\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"step\"],[12],[1,\"\\n        \"],[10,\"h4\"],[12],[1,\"2. Create Your First Invoice\"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"Generate professional invoices with automatic GST calculations\"],[13],[1,\"\\n        \"],[8,[39,5],[[24,0,\"btn btn-primary\"]],[[\"@route\"],[\"billing\"]],[[\"default\"],[[[[1,\"\\n          Create Invoice\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"step\"],[12],[1,\"\\n        \"],[10,\"h4\"],[12],[1,\"3. Print or Download\"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"Print invoices directly or download as PDF for records\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"page-title\",\"div\",\"h1\",\"p\",\"i\",\"link-to\",\"h2\",\"h3\",\"h4\"]]",
    "moduleName": "bill-maker/templates/index.hbs",
    "isStrictMode": false
  });
});
;define("bill-maker/templates/invoice", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Invoice"}}
  
  <div style="padding: 20px; background: white; min-height: 400px;">
    <h1 style="color: #333;">Invoice</h1>
  
    {{#if @model}}
      <!-- Invoice Header -->
      <div style="border: 2px solid #333; padding: 20px; margin: 20px 0; background: #f9f9f9;">
        <h2 style="margin: 0 0 10px 0; color: #333;">TAX INVOICE</h2>
        <div style="display: flex; justify-content: space-between;">
          <div>
            <h3 style="margin: 0 0 5px 0;">My Shop</h3>
            <p style="margin: 5px 0;">123 Business Street</p>
            <p style="margin: 5px 0;">City, State - 123456</p>
            <p style="margin: 5px 0;">GSTIN: 22AAAAA0000A1Z5</p>
          </div>
          <div>
            <p><strong>Invoice No:</strong> {{@model.id}}</p>
            <p><strong>Date:</strong> {{@model.createdAt}}</p>
            <p><strong>Customer:</strong> {{@model.customerName}}</p>
          </div>
        </div>
      </div>
  
      <!-- Invoice Items -->
      <div style="margin-bottom: 20px;">
        <h3>Items</h3>
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
          <thead>
            <tr style="background: #f0f0f0;">
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">S.No</th>
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Product</th>
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Qty</th>
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Rate</th>
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">GST</th>
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Total</th>
            </tr>
          </thead>
          <tbody>
            {{#each @model.items as |item index|}}
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">{{index}}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{item.productName}}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{item.quantity}}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">₹{{item.basePrice}}</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{{item.gstRate}}%</td>
                <td style="padding: 10px; border: 1px solid #ddd;">₹{{item.subtotal}}</td>
              </tr>
            {{/each}}
          </tbody>
        </table>
      </div>
  
      <!-- Invoice Summary -->
      <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
        <div style="width: 300px; border: 1px solid #ddd; padding: 15px; background: #f9f9f9;">
          <h4 style="margin: 0 0 10px 0;">Bill Summary</h4>
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>Subtotal:</span>
            <span>₹{{@model.subtotal}}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>CGST:</span>
            <span>₹{{@model.cgst}}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>SGST:</span>
            <span>₹{{@model.sgst}}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px; border-top: 1px solid #ddd; padding-top: 5px; font-weight: bold; font-size: 16px;">
            <span>Grand Total:</span>
            <span>₹{{@model.grandTotal}}</span>
          </div>
        </div>
      </div>
  
      <!-- Actions -->
      <div style="margin-top: 30px; text-align: center;">
        <button
          onclick="window.print()"
          style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;"
        >
          Print Invoice
        </button>
        <button
          onclick="window.history.back()"
          style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Go Back
        </button>
      </div>
  
    {{else}}
     <div style="text-align: center; padding: 50px; background: #f8f9fa; border-radius: 8px; margin: 20px;">
       <h3>Invoice Not Found</h3>
       <p>The requested invoice could not be found.</p>
       <a href="/" style="padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px;">Back to Home</a>
     </div>
   {{/if}}
  
    <div style="margin-top: 20px; text-align: center;">
      <a href="/" style="padding: 10px 20px; background: #28a745; color: white; text-decoration: none; border-radius: 4px;">Back to Home</a>
    </div>
  </div>
  */
  {
    "id": "Cqv9CZkq",
    "block": "[[[1,[28,[35,0],[\"Invoice\"],null]],[1,\"\\n\\n\"],[10,0],[14,5,\"padding: 20px; background: white; min-height: 400px;\"],[12],[1,\"\\n  \"],[10,\"h1\"],[14,5,\"color: #333;\"],[12],[1,\"Invoice\"],[13],[1,\"\\n\\n\"],[41,[30,1],[[[1,\"    \"],[3,\" Invoice Header \"],[1,\"\\n    \"],[10,0],[14,5,\"border: 2px solid #333; padding: 20px; margin: 20px 0; background: #f9f9f9;\"],[12],[1,\"\\n      \"],[10,\"h2\"],[14,5,\"margin: 0 0 10px 0; color: #333;\"],[12],[1,\"TAX INVOICE\"],[13],[1,\"\\n      \"],[10,0],[14,5,\"display: flex; justify-content: space-between;\"],[12],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,\"h3\"],[14,5,\"margin: 0 0 5px 0;\"],[12],[1,\"My Shop\"],[13],[1,\"\\n          \"],[10,2],[14,5,\"margin: 5px 0;\"],[12],[1,\"123 Business Street\"],[13],[1,\"\\n          \"],[10,2],[14,5,\"margin: 5px 0;\"],[12],[1,\"City, State - 123456\"],[13],[1,\"\\n          \"],[10,2],[14,5,\"margin: 5px 0;\"],[12],[1,\"GSTIN: 22AAAAA0000A1Z5\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,2],[12],[10,\"strong\"],[12],[1,\"Invoice No:\"],[13],[1,\" \"],[1,[30,1,[\"id\"]]],[13],[1,\"\\n          \"],[10,2],[12],[10,\"strong\"],[12],[1,\"Date:\"],[13],[1,\" \"],[1,[30,1,[\"createdAt\"]]],[13],[1,\"\\n          \"],[10,2],[12],[10,\"strong\"],[12],[1,\"Customer:\"],[13],[1,\" \"],[1,[30,1,[\"customerName\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[3,\" Invoice Items \"],[1,\"\\n    \"],[10,0],[14,5,\"margin-bottom: 20px;\"],[12],[1,\"\\n      \"],[10,\"h3\"],[12],[1,\"Items\"],[13],[1,\"\\n      \"],[10,\"table\"],[14,5,\"width: 100%; border-collapse: collapse; border: 1px solid #ddd;\"],[12],[1,\"\\n        \"],[10,\"thead\"],[12],[1,\"\\n          \"],[10,\"tr\"],[14,5,\"background: #f0f0f0;\"],[12],[1,\"\\n            \"],[10,\"th\"],[14,5,\"padding: 10px; border: 1px solid #ddd; text-align: left;\"],[12],[1,\"S.No\"],[13],[1,\"\\n            \"],[10,\"th\"],[14,5,\"padding: 10px; border: 1px solid #ddd; text-align: left;\"],[12],[1,\"Product\"],[13],[1,\"\\n            \"],[10,\"th\"],[14,5,\"padding: 10px; border: 1px solid #ddd; text-align: left;\"],[12],[1,\"Qty\"],[13],[1,\"\\n            \"],[10,\"th\"],[14,5,\"padding: 10px; border: 1px solid #ddd; text-align: left;\"],[12],[1,\"Rate\"],[13],[1,\"\\n            \"],[10,\"th\"],[14,5,\"padding: 10px; border: 1px solid #ddd; text-align: left;\"],[12],[1,\"GST\"],[13],[1,\"\\n            \"],[10,\"th\"],[14,5,\"padding: 10px; border: 1px solid #ddd; text-align: left;\"],[12],[1,\"Total\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,14],[[28,[37,14],[[30,1,[\"items\"]]],null]],null],null,[[[1,\"            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,5,\"padding: 10px; border: 1px solid #ddd;\"],[12],[1,[30,3]],[13],[1,\"\\n              \"],[10,\"td\"],[14,5,\"padding: 10px; border: 1px solid #ddd;\"],[12],[1,[30,2,[\"productName\"]]],[13],[1,\"\\n              \"],[10,\"td\"],[14,5,\"padding: 10px; border: 1px solid #ddd;\"],[12],[1,[30,2,[\"quantity\"]]],[13],[1,\"\\n              \"],[10,\"td\"],[14,5,\"padding: 10px; border: 1px solid #ddd;\"],[12],[1,\"₹\"],[1,[30,2,[\"basePrice\"]]],[13],[1,\"\\n              \"],[10,\"td\"],[14,5,\"padding: 10px; border: 1px solid #ddd;\"],[12],[1,[30,2,[\"gstRate\"]]],[1,\"%\"],[13],[1,\"\\n              \"],[10,\"td\"],[14,5,\"padding: 10px; border: 1px solid #ddd;\"],[12],[1,\"₹\"],[1,[30,2,[\"subtotal\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[2,3]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[3,\" Invoice Summary \"],[1,\"\\n    \"],[10,0],[14,5,\"display: flex; justify-content: flex-end; margin-bottom: 20px;\"],[12],[1,\"\\n      \"],[10,0],[14,5,\"width: 300px; border: 1px solid #ddd; padding: 15px; background: #f9f9f9;\"],[12],[1,\"\\n        \"],[10,\"h4\"],[14,5,\"margin: 0 0 10px 0;\"],[12],[1,\"Bill Summary\"],[13],[1,\"\\n        \"],[10,0],[14,5,\"display: flex; justify-content: space-between; margin-bottom: 5px;\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"Subtotal:\"],[13],[1,\"\\n          \"],[10,1],[12],[1,\"₹\"],[1,[30,1,[\"subtotal\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"display: flex; justify-content: space-between; margin-bottom: 5px;\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"CGST:\"],[13],[1,\"\\n          \"],[10,1],[12],[1,\"₹\"],[1,[30,1,[\"cgst\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"display: flex; justify-content: space-between; margin-bottom: 5px;\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"SGST:\"],[13],[1,\"\\n          \"],[10,1],[12],[1,\"₹\"],[1,[30,1,[\"sgst\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"display: flex; justify-content: space-between; margin-bottom: 5px; border-top: 1px solid #ddd; padding-top: 5px; font-weight: bold; font-size: 16px;\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"Grand Total:\"],[13],[1,\"\\n          \"],[10,1],[12],[1,\"₹\"],[1,[30,1,[\"grandTotal\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[3,\" Actions \"],[1,\"\\n    \"],[10,0],[14,5,\"margin-top: 30px; text-align: center;\"],[12],[1,\"\\n      \"],[10,\"button\"],[14,\"onclick\",\"window.print()\"],[14,5,\"padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;\"],[12],[1,\"\\n        Print Invoice\\n      \"],[13],[1,\"\\n      \"],[10,\"button\"],[14,\"onclick\",\"window.history.back()\"],[14,5,\"padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;\"],[12],[1,\"\\n        Go Back\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"]],[]],[[[1,\"   \"],[10,0],[14,5,\"text-align: center; padding: 50px; background: #f8f9fa; border-radius: 8px; margin: 20px;\"],[12],[1,\"\\n     \"],[10,\"h3\"],[12],[1,\"Invoice Not Found\"],[13],[1,\"\\n     \"],[10,2],[12],[1,\"The requested invoice could not be found.\"],[13],[1,\"\\n     \"],[10,3],[14,6,\"/\"],[14,5,\"padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 4px;\"],[12],[1,\"Back to Home\"],[13],[1,\"\\n   \"],[13],[1,\"\\n\"]],[]]],[1,\"\\n  \"],[10,0],[14,5,\"margin-top: 20px; text-align: center;\"],[12],[1,\"\\n    \"],[10,3],[14,6,\"/\"],[14,5,\"padding: 10px 20px; background: #28a745; color: white; text-decoration: none; border-radius: 4px;\"],[12],[1,\"Back to Home\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@model\",\"item\",\"index\"],[\"page-title\",\"div\",\"h1\",\"if\",\"h2\",\"h3\",\"p\",\"strong\",\"table\",\"thead\",\"tr\",\"th\",\"tbody\",\"each\",\"-track-array\",\"td\",\"h4\",\"span\",\"button\",\"a\"]]",
    "moduleName": "bill-maker/templates/invoice.hbs",
    "isStrictMode": false
  });
});
;define("bill-maker/templates/products", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Products"}}
  
  <div class="products-page">
    <div class="page-header">
      <h2>Products</h2>
      {{#unless this.showProductForm}}
        <button
          type="button"
          class="btn btn-success"
          {{on "click" this.showAddProductForm}}
        >
          <i class="icon-add"></i>
          Add Product
        </button>
      {{/unless}}
    </div>
  
    {{#if this.showProductForm}}
      <div class="card">
        <h3>{{if this.editingProduct "Edit Product" "Add New Product"}}</h3>
        <form {{on "submit" this.saveProduct}}>
          <div class="form-group">
            <label class="form-label">Product Name *</label>
            <input
              type="text"
              class="form-control"
              value={{this.productName}}
              {{on "input" this.updateProductName}}
              placeholder="Enter product name"
              required
            >
          </div>
          <div class="form-group">
            <label class="form-label">Base Price (₹) *</label>
            <input
              type="number"
              class="form-control"
              value={{this.productPrice}}
              {{on "input" this.updateProductPrice}}
              placeholder="0.00"
              min="0"
              step="0.01"
              required
            >
          </div>
          <div class="form-group">
            <label class="form-label">GST Rate (%) *</label>
            <input
              type="number"
              class="form-control"
              value={{this.productGSTRate}}
              {{on "input" this.updateProductGSTRate}}
              placeholder="18"
              min="0"
              max="100"
              step="0.01"
              required
            >
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Save Product</button>
            <button type="button" class="btn btn-secondary" {{on "click" this.hideProductForm}}>Cancel</button>
          </div>
        </form>
      </div>
    {{else}}
      {{#if this.products.length}}
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>GST Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {{#each this.products as |product|}}
                <tr>
                  <td>{{product.name}}</td>
                  <td>₹{{product.basePrice}}</td>
                  <td>{{product.gstRate}}%</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-sm btn-warning"
                      {{on "click" (fn this.showEditProductForm product)}}
                    >
                      <i class="icon-edit"></i>
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-danger"
                      {{on "click" (fn this.deleteProduct product)}}
                    >
                      <i class="icon-delete"></i>
                      Delete
                    </button>
                  </td>
                </tr>
              {{/each}}
            </tbody>
          </table>
        </div>
      {{else}}
        <div class="empty-state">
          <div class="empty-state-content">
            <i class="icon-products-large"></i>
            <h3>No products yet</h3>
            <p>Get started by adding your first product</p>
            <button
              type="button"
              class="btn btn-primary"
              {{on "click" this.showAddProductForm}}
            >
              Add Your First Product
            </button>
          </div>
        </div>
      {{/if}}
    {{/if}}
  </div>
  */
  {
    "id": "gm/KodBR",
    "block": "[[[1,[28,[35,0],[\"Products\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"products-page\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"page-header\"],[12],[1,\"\\n    \"],[10,\"h2\"],[12],[1,\"Products\"],[13],[1,\"\\n\"],[41,[51,[30,0,[\"showProductForm\"]]],[[[1,\"      \"],[11,\"button\"],[24,0,\"btn btn-success\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"showAddProductForm\"]]],null],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"icon-add\"],[12],[13],[1,\"\\n        Add Product\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"showProductForm\"]],[[[1,\"    \"],[10,0],[14,0,\"card\"],[12],[1,\"\\n      \"],[10,\"h3\"],[12],[1,[52,[30,0,[\"editingProduct\"]],\"Edit Product\",\"Add New Product\"]],[13],[1,\"\\n      \"],[11,\"form\"],[4,[38,5],[\"submit\",[30,0,[\"saveProduct\"]]],null],[12],[1,\"\\n        \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n          \"],[10,\"label\"],[14,0,\"form-label\"],[12],[1,\"Product Name *\"],[13],[1,\"\\n          \"],[11,\"input\"],[24,0,\"form-control\"],[16,2,[30,0,[\"productName\"]]],[24,\"placeholder\",\"Enter product name\"],[24,\"required\",\"\"],[24,4,\"text\"],[4,[38,5],[\"input\",[30,0,[\"updateProductName\"]]],null],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n          \"],[10,\"label\"],[14,0,\"form-label\"],[12],[1,\"Base Price (₹) *\"],[13],[1,\"\\n          \"],[11,\"input\"],[24,0,\"form-control\"],[16,2,[30,0,[\"productPrice\"]]],[24,\"placeholder\",\"0.00\"],[24,\"min\",\"0\"],[24,\"step\",\"0.01\"],[24,\"required\",\"\"],[24,4,\"number\"],[4,[38,5],[\"input\",[30,0,[\"updateProductPrice\"]]],null],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n          \"],[10,\"label\"],[14,0,\"form-label\"],[12],[1,\"GST Rate (%) *\"],[13],[1,\"\\n          \"],[11,\"input\"],[24,0,\"form-control\"],[16,2,[30,0,[\"productGSTRate\"]]],[24,\"placeholder\",\"18\"],[24,\"min\",\"0\"],[24,\"max\",\"100\"],[24,\"step\",\"0.01\"],[24,\"required\",\"\"],[24,4,\"number\"],[4,[38,5],[\"input\",[30,0,[\"updateProductGSTRate\"]]],null],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"form-actions\"],[12],[1,\"\\n          \"],[10,\"button\"],[14,0,\"btn btn-primary\"],[14,4,\"submit\"],[12],[1,\"Save Product\"],[13],[1,\"\\n          \"],[11,\"button\"],[24,0,\"btn btn-secondary\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"hideProductForm\"]]],null],[12],[1,\"Cancel\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"products\",\"length\"]],[[[1,\"      \"],[10,0],[14,0,\"table-container\"],[12],[1,\"\\n        \"],[10,\"table\"],[14,0,\"table\"],[12],[1,\"\\n          \"],[10,\"thead\"],[12],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"th\"],[12],[1,\"Name\"],[13],[1,\"\\n              \"],[10,\"th\"],[12],[1,\"Price\"],[13],[1,\"\\n              \"],[10,\"th\"],[12],[1,\"GST Rate\"],[13],[1,\"\\n              \"],[10,\"th\"],[12],[1,\"Actions\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,18],[[28,[37,18],[[30,0,[\"products\"]]],null]],null],null,[[[1,\"              \"],[10,\"tr\"],[12],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,\"₹\"],[1,[30,1,[\"basePrice\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,1,[\"gstRate\"]]],[1,\"%\"],[13],[1,\"\\n                \"],[10,\"td\"],[12],[1,\"\\n                  \"],[11,\"button\"],[24,0,\"btn btn-sm btn-warning\"],[24,4,\"button\"],[4,[38,5],[\"click\",[28,[37,20],[[30,0,[\"showEditProductForm\"]],[30,1]],null]],null],[12],[1,\"\\n                    \"],[10,\"i\"],[14,0,\"icon-edit\"],[12],[13],[1,\"\\n                    Edit\\n                  \"],[13],[1,\"\\n                  \"],[11,\"button\"],[24,0,\"btn btn-sm btn-danger\"],[24,4,\"button\"],[4,[38,5],[\"click\",[28,[37,20],[[30,0,[\"deleteProduct\"]],[30,1]],null]],null],[12],[1,\"\\n                    \"],[10,\"i\"],[14,0,\"icon-delete\"],[12],[13],[1,\"\\n                    Delete\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n\"]],[1]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],[[[1,\"      \"],[10,0],[14,0,\"empty-state\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"empty-state-content\"],[12],[1,\"\\n          \"],[10,\"i\"],[14,0,\"icon-products-large\"],[12],[13],[1,\"\\n          \"],[10,\"h3\"],[12],[1,\"No products yet\"],[13],[1,\"\\n          \"],[10,2],[12],[1,\"Get started by adding your first product\"],[13],[1,\"\\n          \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"showAddProductForm\"]]],null],[12],[1,\"\\n            Add Your First Product\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]]]],[]]],[13]],[\"product\"],[\"page-title\",\"div\",\"h2\",\"unless\",\"button\",\"on\",\"i\",\"if\",\"h3\",\"form\",\"label\",\"input\",\"table\",\"thead\",\"tr\",\"th\",\"tbody\",\"each\",\"-track-array\",\"td\",\"fn\",\"p\"]]",
    "moduleName": "bill-maker/templates/products.hbs",
    "isStrictMode": false
  });
});
;define("bill-maker/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("bill-maker/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("bill-maker/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("bill-maker/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;

;define('bill-maker/config/environment', [], function() {
  var prefix = 'bill-maker';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("bill-maker/app")["default"].create({"name":"bill-maker","version":"0.0.0"});
          }
        
//# sourceMappingURL=bill-maker.map
