const express = require('express'); 
const Router = express.Router(); 
   
Router.route('/') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
}) 
.post((req, res, next) => { 
    res.end('When a POST request is made, then this '
            + 'is the response sent to the client!'); 
}) 
.put((req, res, next) => { 
    res.end('When a PUT request is made, then this '
            + 'is the response sent to the client!'); 
});


/*
---------------------------------------------------------------------
*/
Router.route('/count') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/device') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/device/:id') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/device/:id/count') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/


Router.route('/sensor/:id') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/sensor/:id/count') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/area/:id') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/area/:id/count') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/




Router.route('/datatype/:id') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/datatype/:id/count') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/device/:deviceid/datatype/:datatypeid') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/device/:deviceid/datatype/:datatypeid/count') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/



Router.route('/:id') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
})
.delete((req, res, next) => { 
    res.end('When a DELETE request is made, then this '
            + 'is the response sent to the client!'); 
}); 


module.exports = Router; 