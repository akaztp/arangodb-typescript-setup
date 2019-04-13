import createRouter = require('@arangodb/foxx/router');
const router = createRouter();
module.context.use(router);

import joi = require('joi');

router.get('/hello/:name', function (req, res) {
    res.send(`Hello ${req.pathParams.name}`);
})
    .pathParam('name', joi.string().required(), 'Name to greet.')
    .response('ok', 'A personalized greeting.')
    .summary('Personalized greeting')
    .description('Prints a personalized greeting.');