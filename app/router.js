import EmberRouter from '@ember/routing/router';
import config from 'bill-maker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('products');
  this.route('billing');
  this.route('invoice', { path: '/invoice/:invoice_id' });
});
