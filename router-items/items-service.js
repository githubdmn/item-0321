


const items = require('../database/mongoose').Items;
const uuid = require('uuid').v4();

const Create = async () => {
    return await items.insertMany({
        id: uuid,
        value: 123,
        description: "my first test",
        tags: ['a', 'b', 'c']
    });
};

const Get = () => { };

const GetAll = async () => {
    return await items.find();
};

const Update = () => { };

const Delete = () => { };






module.exports.Create = Create;
module.exports.Get = Get;
module.exports.GetAll = GetAll;
module.exports.Update = Update;
module.exports.Delete = Delete;


