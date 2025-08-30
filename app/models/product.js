import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('number') basePrice;
  @attr('number') gstRate;
  @attr('date') createdAt;
  @attr('date') updatedAt;
}
