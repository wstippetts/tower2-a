export class Comment {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.eventId = data.eventId
    this.creator = data.creator
    this.event = data.event
  }
}