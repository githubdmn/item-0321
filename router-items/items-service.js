


const items = require('../database/mongoose').Items;
const uuid = require('uuid').v4();

const Create = async (item) => {
    return await items.insertMany({
        id: uuid,
        value: item.value,
        description: item.description,
        tags: item.tags
    });
};

const Get = async (id) => {
    try {
        const item = await items.findOne({ "id": id });
        if (item) {
            return item;
        } else {
            return 'No item found';
        }
    } catch (error) {
        return error;
    }
};

const GetAll = async () => {
    const result = await items.find();
    if (result.length) { return result; }
    else { return "The database is empty"; }
};

const Update = async (id, item) => {
    try {
        return await items.findOneAndUpdate({ "id": id },
            {
                value: item.value,
                description: item.description,
                tags: item.tags
            }, { useFindAndModify: false });
    } catch (error) {
        return error;
    }
};

const Delete = async (id) => {
    try {
        const item = await items.findOneAndDelete({ "id": id },
            { useFindAndModify: false });
        if (item) {
            return item;
        } else {
            return 'No item deleted';
        }
    } catch (error) {
        return error;
    }
};

const DeleteAll = async () => {
    return await items.deleteMany({});
}

module.exports.Create = Create;
module.exports.Get = Get;
module.exports.GetAll = GetAll;
module.exports.Update = Update;
module.exports.Delete = Delete;
module.exports.DeleteAll = DeleteAll;


