import { module, test } from 'qunit';
import { setupTest } from 'bill-maker/tests/helpers';

module('Unit | Route | invoices', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:invoices');
    assert.ok(route);
  });
});
