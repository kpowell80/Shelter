const Pets = require('../controllers/pets');
   
module.exports = function(app){

    // Petss are here


    app.get('/pets', Pets.getAll);
    app.post('/pets', Pets.create);
    app.get('/pets/:_id', Pets.getOne);
    app.put('/pets/:_id', Pets.update);
    app.delete('/pets/:_id', Pets.delete);
    // app.click('/pets/:id', Pets.clicked)

    // reviews are here

  

}