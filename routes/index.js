const user = require('./user');
const product = require('./product');
const order = require('./order');
const category = require('./category');
const topping = require('./topping');
const route = (app) => {
    app.use('/user', user);
    app.use('/product', product);
    app.use('/order', order);
    app.use('/category', category);

    app.use('/topping', topping);
    app.use('/', (req, res) => {
        res.status(200).send({ message: 'success' });
    });
};
module.exports = route;
