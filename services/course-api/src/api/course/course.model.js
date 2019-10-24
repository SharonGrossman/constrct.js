import { Schema } from 'mongoose';
import createSeed from 'mongoose-dependent-seed';
import seed from './course.seed';
import { emitter } from './course.socket';

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: String
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

export default createSeed('Course', CourseSchema, seed);
