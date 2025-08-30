'use strict';

define("bill-maker/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks, 'en-us'); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("bill-maker/tests/integration/components/billing-form-test", ["qunit", "bill-maker/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | billing-form', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <BillingForm />
      */
      {
        "id": "jpPSqnqS",
        "block": "[[[8,[39,0],null,null,null]],[],[\"billing-form\"]]",
        "moduleName": "d:\\study\\projects\\bill maker\\bill-maker\\bill-maker\\tests\\integration\\components\\billing-form-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <BillingForm>
              template block text
            </BillingForm>
          
      */
      {
        "id": "WL2ypS8T",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"billing-form\"]]",
        "moduleName": "d:\\study\\projects\\bill maker\\bill-maker\\bill-maker\\tests\\integration\\components\\billing-form-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("bill-maker/tests/integration/components/invoice-display-test", ["qunit", "bill-maker/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | invoice-display', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <InvoiceDisplay />
      */
      {
        "id": "6uVMhJqj",
        "block": "[[[8,[39,0],null,null,null]],[],[\"invoice-display\"]]",
        "moduleName": "d:\\study\\projects\\bill maker\\bill-maker\\bill-maker\\tests\\integration\\components\\invoice-display-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <InvoiceDisplay>
              template block text
            </InvoiceDisplay>
          
      */
      {
        "id": "iCHdq5y1",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"invoice-display\"]]",
        "moduleName": "d:\\study\\projects\\bill maker\\bill-maker\\bill-maker\\tests\\integration\\components\\invoice-display-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("bill-maker/tests/integration/components/navigation-test", ["qunit", "bill-maker/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | navigation', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Navigation />
      */
      {
        "id": "sFJZajks",
        "block": "[[[8,[39,0],null,null,null]],[],[\"navigation\"]]",
        "moduleName": "d:\\study\\projects\\bill maker\\bill-maker\\bill-maker\\tests\\integration\\components\\navigation-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Navigation>
              template block text
            </Navigation>
          
      */
      {
        "id": "7noujGQl",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"navigation\"]]",
        "moduleName": "d:\\study\\projects\\bill maker\\bill-maker\\bill-maker\\tests\\integration\\components\\navigation-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("bill-maker/tests/integration/components/product-form-test", ["qunit", "bill-maker/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | product-form', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ProductForm />
      */
      {
        "id": "HI0xhTsx",
        "block": "[[[8,[39,0],null,null,null]],[],[\"product-form\"]]",
        "moduleName": "d:\\study\\projects\\bill maker\\bill-maker\\bill-maker\\tests\\integration\\components\\product-form-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ProductForm>
              template block text
            </ProductForm>
          
      */
      {
        "id": "/wBmD1w3",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"product-form\"]]",
        "moduleName": "d:\\study\\projects\\bill maker\\bill-maker\\bill-maker\\tests\\integration\\components\\product-form-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("bill-maker/tests/integration/components/product-list-test", ["qunit", "bill-maker/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | product-list', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ProductList />
      */
      {
        "id": "RduRLmPw",
        "block": "[[[8,[39,0],null,null,null]],[],[\"product-list\"]]",
        "moduleName": "d:\\study\\projects\\bill maker\\bill-maker\\bill-maker\\tests\\integration\\components\\product-list-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ProductList>
              template block text
            </ProductList>
          
      */
      {
        "id": "VQX7+BJ3",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"product-list\"]]",
        "moduleName": "d:\\study\\projects\\bill maker\\bill-maker\\bill-maker\\tests\\integration\\components\\product-list-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("bill-maker/tests/test-helper", ["bill-maker/app", "bill-maker/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit/test-loader", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _testLoader, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"bill-maker/app",0,"bill-maker/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit/test-loader",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.setupEmberOnerrorValidation)();
  (0, _testLoader.loadTests)();
  (0, _emberQunit.start)();
});
define("bill-maker/tests/unit/controllers/billing-test", ["qunit", "bill-maker/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Controller | billing', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:billing');
      assert.ok(controller);
    });
  });
});
define("bill-maker/tests/unit/controllers/index-test", ["qunit", "bill-maker/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("bill-maker/tests/unit/controllers/products-test", ["qunit", "bill-maker/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Controller | products', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:products');
      assert.ok(controller);
    });
  });
});
define("bill-maker/tests/unit/models/customer-test", ["bill-maker/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"bill-maker/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | customer', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      const store = this.owner.lookup('service:store');
      const model = store.createRecord('customer', {});
      assert.ok(model, 'model exists');
    });
  });
});
define("bill-maker/tests/unit/models/invoice-test", ["bill-maker/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"bill-maker/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | invoice', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      const store = this.owner.lookup('service:store');
      const model = store.createRecord('invoice', {});
      assert.ok(model, 'model exists');
    });
  });
});
define("bill-maker/tests/unit/models/product-test", ["bill-maker/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"bill-maker/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | product', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      const store = this.owner.lookup('service:store');
      const model = store.createRecord('product', {});
      assert.ok(model, 'model exists');
    });
  });
});
define("bill-maker/tests/unit/routes/billing-test", ["qunit", "bill-maker/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | billing', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:billing');
      assert.ok(route);
    });
  });
});
define("bill-maker/tests/unit/routes/index-test", ["qunit", "bill-maker/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("bill-maker/tests/unit/routes/invoice-test", ["qunit", "bill-maker/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | invoice', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:invoice');
      assert.ok(route);
    });
  });
});
define("bill-maker/tests/unit/routes/invoices-test", ["qunit", "bill-maker/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | invoices', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:invoices');
      assert.ok(route);
    });
  });
});
define("bill-maker/tests/unit/routes/products-test", ["qunit", "bill-maker/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | products', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:products');
      assert.ok(route);
    });
  });
});
define("bill-maker/tests/unit/services/gst-calculator-test", ["qunit", "bill-maker/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | gst-calculator', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:gst-calculator');
      assert.ok(service);
    });
  });
});
define("bill-maker/tests/unit/services/store-test", ["qunit", "bill-maker/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"bill-maker/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | store', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:store');
      assert.ok(service);
    });
  });
});
define('bill-maker/config/environment', [], function() {
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

require('bill-maker/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
