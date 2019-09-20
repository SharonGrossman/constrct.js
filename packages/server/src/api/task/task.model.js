import { Schema } from 'mongoose';
import { createSeedModel } from 'mongoose-plugin-seed';
import seed from './task.seed';
import { emitter } from './task.socket';

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  duration: String,
  course: {
    ref: 'Course',
    type: Schema.Types.ObjectId
  }
});

TaskSchema.post('save', doc => {
  emitter.emit('save', doc);
});

TaskSchema.post('findOneAndUpdate', doc => {
  emitter.emit('findOneAndUpdate', doc);
});

TaskSchema.post('findOneAndRemove', doc => {
  emitter.emit('findOneAndRemove', doc);
});

export default createSeedModel('Task', TaskSchema, seed);
