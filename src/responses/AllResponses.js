const {ObjectId} = require("mongodb");
const {TodoDB} = require("../utils");


exports.addTodolist = async (title, date, file) => {
    let responseCreated = await TodoDB()
        .then(db => db.insertOne({title, order: 0, addedDate: date, files: file}));
    return responseCreated.insertedId;
}

exports.deleteTodolist = async (id) => {
    let result = await TodoDB().then(db => db.deleteOne({_id: ObjectId(id)}));
    return result.deletedCount === 1;
}

exports.updateTitleTodolist = async (id, title, date, file) => {
    let result = await TodoDB().then(db => db.updateOne({_id: ObjectId(id)}, {$set:{title, addedDate: date, file}}));
    return result.modifiedCount === 1;
}