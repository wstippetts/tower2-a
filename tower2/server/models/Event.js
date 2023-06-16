import mongoose from "mongoose";
import { basicStringType } from "../db/constants.js";
export const Schema = mongoose.Schema;

export const EventSchema = new Schema({
  name: basicStringType,
  description: { ...basicStringType, maxLength: 1000 },
  coverImg: { ...basicStringType, maxLength: 5000 },
  location: basicStringType,
  capacity: { type: Number, required: true, min: 1 },
  startDate: { type: Date, required: true },
  type: { ...basicStringType, enum: ['concert', 'convention', 'sport', 'digital'] },
  isCanceled: { type: Boolean, default: false, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

EventSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

//TODO maybe change attendees to ticket?
EventSchema.virtual('attendees', {
  localField: 'ticketId',
  foreignField: '_id',
  ref: 'Ticket'
})