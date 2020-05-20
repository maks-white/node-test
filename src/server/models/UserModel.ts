import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { IUserDocument } from '../interfaces';


const UserModel: Schema = new Schema({
	name: {
    type: String,
    unique: false,
    required: false,
  },
	gender: {
    type: String,
    unique: false,
    required: false,
  },
	email: {
    type: String,
    unique: true,
    required: true,
  },
	picture: {
    type: String,
    unique: false,
    required: false,
  },
	password: {
    type: String,
    unique: false,
    required: true,
  },
  removed: {
    type: Boolean,
    unique: false,
    required: true,
  },
});

const User = mongoose.model<IUserDocument>('User', UserModel);
export default User;
