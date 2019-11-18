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

Router.route('/person') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/person/:id') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/person/:id/count') 
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




Router.route('/description/value') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/description/:value') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/description/:value/count') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/all') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/all/count') 
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


/*
---------------------------------------------------------------------
                                



                                SENSOR



---------------------------------------------------------------------
*/


Router.route('/sensor') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
})
.put((req, res, next) => { 
    res.end('When a PUT request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/sensor/area/:id') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/sensor/area/:id/count') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/sensor/datatype/:id') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/sensor/datatype/:id/count') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});



/*
---------------------------------------------------------------------
*/

Router.route('/sensor/:id/sensor') 
.get((req, res, next) => { 
    res.end('When a GET request is made, then this '
            + 'is the response sent to the client!'); 
});

/*
---------------------------------------------------------------------
*/

Router.route('/sensor/:id/sensor/count') 
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
})
.delete((req, res, next) => { 
    res.end('When a DELETE request is made, then this '
            + 'is the response sent to the client!'); 
}); 




module.exports = Router; 