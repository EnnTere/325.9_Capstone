import { mongoose } from "mongoose";
const { Schema, model } = mongoose;

////// Validation Options //////
//// Only run on create or save methods
// type: <data type>
// required: <boolean>
// immutable: <boolean> - unable to be changed
// lowercase: <boolean> - converts
// default: <value> default if nothing is entered
// ex. default: () => Date.now()

// const Schema = mongoose.Schema?? What is this for

const embedItemSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    smelly: {
        type: String,
        required: true,
        when: ()=> Date.now()
    },
    movieMeMovedByMovies: [
        {
            type: String,
            default: "Pepsi"
        }
    ],
    LD50: {
        type: Number,
        immutable: true,
        default: "Plague Hounds"
    },
    isPepsiOk: [
        {
            type: String,
            default: "The Lady Gentleman"
        },
        {
            type: Number
        }
    ],
  });