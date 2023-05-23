const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
