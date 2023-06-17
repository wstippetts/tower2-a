import { Profile } from "./Account.js";

export class Ticket extends Profile {
  constructor(data) {
    super(data.profile)
    this.ticketId = data.ticketIdthis.eventId = data.eventId
    this.accountId = data.eventId
    this.accountId = data.accountId
    this.profile = data.profile
    this.creator = new Profile(data.creator)
    this.event = data.event
  }
}

export class eventTicket extends Event {
  constructor(data) {
    super(data.ticket)
    this.ticketId = data.id
  }
}