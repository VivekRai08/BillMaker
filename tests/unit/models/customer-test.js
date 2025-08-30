import { setupTest } from 'bill-maker/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | customer', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('customer', {});
    assert.ok(model, 'model exists');
  });
});
