import {Request, Response, Application} from 'express';
let rewrite = require('express-urlrewrite');

export function middleware(app:Application) {
  app.use(rewrite('/services/:id', '/services?service_type=:id'));
  app.use(rewrite('/products/:id', '/products?product_type=:id'));
}
