import { Schema } from "mongoose";

export const TicketSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: 'Event', requred: true },
  accountId: { type: Schema.Types.ObjectId, ref: 'Account', requred: true },
}, { timestamps: true, toJSON: { virtuals: true } })

TicketSchema.virtual('event', {
  localField: 'eventId',
  foreignField: '_id',
  justOne: true,
  ref: 'Event'
})

TicketSchema.virtual('profile', {
  localField: 'eventId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})