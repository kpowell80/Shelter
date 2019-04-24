const mongoose = require ('mongoose');

const PetSchema = new mongoose.Schema({
    type : {
        type: String,
        required: [true, "<---Enter a type!"]
    },
    name: {
        type: String,
        // unique: true,
        required: [true, "<---Name is required"]
    },
    description: {
        type: String,
        minlength: [3, "Must be at least 3!!"],
        required: [true, "<-----Descriptions are required"],
       
    },
    skill: {
        type: String,
        
    },
    // skill2: {
    //     type: String,
    //     required: [true, "<---Another skill is required"]
    // },
    // skill3: {
    //     type: String,
    //     required: [true, "<---We want to get this dog a home, let's brag"]
    // },
    likes:{
        type: Number,
    }
}, {timestamps: true});

mongoose.model("Pet", PetSchema);

