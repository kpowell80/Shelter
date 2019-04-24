const mongoose= require("mongoose"),
    Pet = mongoose.model("Pet");

class Pets{
    getAll(req, res){
        Pet.find({}, (err, pets) =>{
            if (err) {console.log(err);}
            res.json({status: "okay", pets:pets});
        });

    }
    getOne(req, res){
        Pet.findOne({_id: req.params._id}, (err, pet) => {
            if(err) { console.log(err); }
            res.json({status: 'okay', pet: pet});
        })
    }
    create(req, res){
        let a = new Pet(req.body);
        a.save(err =>{
            if(err){
                res.json({status:"not okay", errors:err});
            }else{
                res.json({status:"okay"});
            }
        });

    }
    update(req, res){
        Pet.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true}, err => {
            if(err) {
                res.json({status: "not ok", errors: err});
            } else {
                res.json({status: 'ok'});
            }
        });
    }
    delete(req, res){
       Pet.findOneAndDelete({_id: req.params._id}, err => {
            if(err) { console.log(err); }
            res.json({status: 'ok'});
        })
    }
  
}

module.exports = new Pets();
