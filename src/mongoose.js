export const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsScheme = new Schema(
    {
      title: String,
      description: Object,
      fileName: String,
      author: String,
      dateCreate: Date,
    }, {versionKey: false});

// const storyScheme = new Schema({
//   idCount: String,
//   isActive: Boolean,
//   limit: Number,
//   dateStart: Date,
//   dateStop: Date,
// }, {versionKey: false});

export const News = mongoose.model('News', newsScheme);
// export const Story = mongoose.model('Story', storyScheme);


