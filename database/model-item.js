


const Id = {
    type: String,
    min: 1,
    required: true
}
const Value = {
    type: Number,
    min: 1,
    required: true
}
const Description = {
    type: String,
    minlen: 4,
    maxlen: 255,
    required: true
}
const Tags = {
    type: [String],
    required: false
}


const ItemModel = {
    id: Id,
    value: Value,
    description: Description,
    tags: Tags
}



module.exports.Item = ItemModel;
