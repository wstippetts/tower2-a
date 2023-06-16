import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { EventSchema } from "../models/Event"
import { CommentSchema } from "../models/Comment.js"
import { TicketSchema } from "../models/Ticket.js"

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Events = mongoose.model('Event', EventSchema);
  Comments = mongoose.model('Comment', CommentSchema);
  Tickets = mongoose.model('Ticket', TicketSchema);
  MyTickets = mongoose.model('Ticket', TicketSchema);
}

export const dbContext = new DbContext()
