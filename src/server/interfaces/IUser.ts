import { GenericId } from './GenericTypes';
import { Document } from 'mongoose';

export interface IUser {
  name: string;
  gender: string;
  email: string;
  picture: string;
  password: string;
  removed: boolean;
}

export interface IUserDocument extends Document {
  name: string;
  gender: string;
  email: string;
  picture: string;
  password: string;
  removed: boolean;
}

// Object from random user API:
export interface IRandomUserResponse {
  status: number,
  statusText: string,
  data: IRandomUserResponseData;
}
export interface IRandomUserResponseData {
  results: IRandomUser[];
  info: IRandomUserResponseInfo;
}

export interface IRandomUserResponseInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface IRandomUser {
  gender: string;
  name: IRandomUserName;
  location: IRandomUserLocation;
  email: string;
  login: IRandomUserLogin;
  dob: IRandomUserDob;
  registered: IRandomUserRegistered;
  phone: string;
  cell: string;
  id: IRandomUserId;
  picture: IRandomUserPicture
  nat: string;
}

export interface IRandomUserName {
  title: string,
  first: string,
  last: string
}

export interface IRandomUserLocation {
  street: IRandomUserLocationStreet;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: IRandomUserLocationCoordinates;
  timezone: IRandomUserLocationTimezone;
}

export interface IRandomUserLocationStreet {
  number: number;
  name: string;
}

export interface IRandomUserLocationCoordinates {
  latitude: string;
  longitude: string;
}

export interface IRandomUserLocationTimezone {
  offset: string;
  description: string;
}

export interface IRandomUserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface IRandomUserDob {
  date: string;
  age: number;
}

export interface IRandomUserRegistered {
  date: string;
  age: number;
}

export interface IRandomUserId {
  name: string;
  value: string;
}

export interface IRandomUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
