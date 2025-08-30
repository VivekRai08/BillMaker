import { module, test } from 'qunit';
import { setupTest } from 'bill-maker/tests/helpers';

module('Unit | Controller | billing', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:billing');
    assert.ok(controller);
  });
});
