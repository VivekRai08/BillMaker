import { module, test } from 'qunit';
import { setupRenderingTest } from 'bill-maker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | billing-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BillingForm />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <BillingForm>
        template block text
      </BillingForm>
    `);

    assert.dom().hasText('template block text');
  });
});
