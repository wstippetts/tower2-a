import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class TicketsService {

  async createTicket(ticketData) {

  }
  async deleteTicketById(ticketId, accountId) {
    const removeTicket = await dbContext.Tickets.findById(ticketId).populate('event')
    if (!removeTicket) {
      throw new BadRequest('ticket not found')
    }
    if (accountId != removeTicket.accountId) {
      throw new Forbidden('not authorized')
    }
    const event = await dbContext.Events.findById(removeTicket.eventId).populate('creator')
    await removeTicket.remove()
    if (event) {
      event.capacity = event.capacity + 1
      await event.save()
    }
    return 'sorry to see you go, ticket successfully returned.'
  }
  async getAllTicketsByEvent(eventId) {
    const eventTickets = await dbContext.Tickets.find({ eventId }).populate('profile event')
    return eventTickets
  }
  async getMyTickets(accountId) {
    const myTickets = await dbContext.Tickets.find({ accountId }).populate('profile event')
    return myTickets
  }
}
export const ticketsService = new TicketsService();