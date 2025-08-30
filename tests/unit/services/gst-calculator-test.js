import { module, test } from 'qunit';
import { setupTest } from 'bill-maker/tests/helpers';

module('Unit | Service | gst-calculator', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:gst-calculator');
    assert.ok(service);
  });
});
