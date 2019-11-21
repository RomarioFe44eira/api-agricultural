const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.json({teste: "Testando"})
    })
    .post((req, res, next) => {
        //var description = req.body.description;
        console.log(req.body('description'))
    })
    .put((req, res, next) => {
        res.end('When a PUT request is made, then this '
            + 'is the response sent to the client!');
    });


/*
---------------------------------------------------------------------
*/
router.route('/count')
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    });

/*
---------------------------------------------------------------------
*/

router.route('/person')
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    });

/*
---------------------------------------------------------------------
*/

router.route('/person/:id')
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    });

/*
---------------------------------------------------------------------
*/

router.route('/person/:id/count')
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    });

/*
---------------------------------------------------------------------
*/

router.route('/description/value')
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    });

/*
---------------------------------------------------------------------
*/

router.route('/description/:value')
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    });

/*
---------------------------------------------------------------------
*/

router.route('/description/:value/count')
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    });

/*
---------------------------------------------------------------------
*/

router.route('/all')
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    });

/*
---------------------------------------------------------------------
*/

router.route('/all/count')
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    });

/*
---------------------------------------------------------------------
*/

router.route('/:id')
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    })
    .delete((req, res, next) => {
        res.end('When a DELETE request is made, then this '
            + 'is the response sent to the client!');
    });


module.exports = router; 