// import Mongoose module
const mongoose = require('mongoose');

mongoose.connect('mongodb://root:root@localhost/test_mongo_schema_creation');//连接上 myblog 数据库

// define 'Schema' as the 'mongoose.Schema'
var Schema = mongoose.Schema;


// Questions 
// [
//     "ObjectId",
//     "description",
//     "selection_limit",
//     "question_num",
//     "options": [
//         "description",
//         "option_num",
//         "count"
//     ]
// ]

var OptionsSchema = new Schema({
    description: String,
    option_num: Number,
    count: Number
})

var QuestionSchema = new Schema({
    question_num: Number,
    description: String,
    selection_limit: Number,
    opts: [OptionsSchema],
    // Things to add ...
});

var Question = mongoose.model('Question', QuestionSchema);

let multi_question_test = new Question({
    question_num: 1,
    description: "Quel est votre plat préféré ?",
    selection_limit: 1,
    opts: [
        {
            option_num: 1,
            description: "Sandwich",
            count: 0,
        },
        {
            option_num: 2,
            description: "Pizza",
            count: 0,
        },
        {
            option_num: 3,
            description: "SuShi",
            count: 0,
        }
    ]
})

multi_question_test.save((err,doc)=>{
    err && console.log(err)
})

// Question.create({

// })
