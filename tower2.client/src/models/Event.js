export class event {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.coverImg = data.coverImg
    this.location = data.location
    this.capacity = data.capacity
    this.startDate = data.startDate
    this.type = data.type
    this.isCanceled = data.isCanceled
    this.creatorId = data.creatorId
  }
}

export class EventTicket extends Event {
  constructor(data) {
    super(data.event)
    this.ticketId = data.id
  }
}