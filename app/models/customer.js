import Model, { attr } from '@ember-data/model';

export default class CustomerModel extends Model {
  @attr('string') name;
  @attr('string') phone;
  @attr('date') createdAt;
}
