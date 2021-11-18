const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = mongoose.Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, require: true },
        level: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
