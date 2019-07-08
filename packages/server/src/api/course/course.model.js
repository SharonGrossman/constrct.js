import { Schema } from 'mongoose';
import { createSeedModel } from 'mongoose-plugin-seed';
import seed from './course.seed';
import { emitter } from './course.socket';

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

CourseSchema.post('save', doc => {
  emitter.emit('save', doc);
});

CourseSchema.post('findOneAndUpdate', doc => {
  emitter.emit('findOneAndUpdate', doc);
});

CourseSchema.post('findOneAndRemove', doc => {
  emitter.emit('findOneAndRemove', doc);
});

export default createSeedModel('Course', CourseSchema, seed);
