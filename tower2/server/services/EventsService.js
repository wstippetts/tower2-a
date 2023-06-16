import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class EventsService {
  async getEventById(eventId) {
    const event = await dbContext.Events.findById(eventId).populate('creator')
    if (!event) {
      throw new BadRequest('event not found, please try again')
    }
    return event
  }

  async getAllEvents() {
    const events = await dbContext.Events.find().populate('creator')
    return events
  }

  async createEvent(eventData) {
    const event = await dbContext.Events.create(eventData)
    await event.populate('creator')
    return event
  }

  async updateEventById(eventId, eventData, requestorId) {
    const foundEvent = await this.getEventById(eventId)
    if (foundEvent.isCanceled == true) {
      throw new BadRequest('sorry, this event is cancelled')
    }
    if (requestorId != foundEvent.creatorId.toString()) {
      throw new Forbidden('sorry, please contact the event creator to make changes to this event')
    }
    if (requestorId == foundEvent.creatorId.toString()) {
      foundEvent.description = eventData.description || foundEvent.description
      foundEvent.name = eventData.name || foundEvent.name
    }
    await foundEvent.save()
    return foundEvent
  }

  async cancelEvent(eventId, requestorId) {
    const event = await this.getEventById(eventId)
    if (event.isCanceled == true) {
      throw new BadRequest('this event is cancelled')
    }
    if (event.creatorId != requestorId) {
      throw new Forbidden('you are not authorized! please contact the event creator.')
    }
    event.isCanceled = true
    await event.save()
    return event
  }

}
export const eventsService = new EventsService();