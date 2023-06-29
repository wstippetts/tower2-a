<template>
  <router-link class="text-light selectable" :to="{ name: 'EventDetails', params: { eventId: event.id } }">
    <div class="EventCard card my-3">
      <img :src="event.coverImg" alt="">
      <div class="card-body text-center">
        <p class="mb-0">
          <b>{{ event.name }}</b>
        </p>
      </div>
    </div>
  </router-link>
</template>


<script>
import { } from "../models/Event.js";
export default {
  props: {
    event: { type: Event, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.eventCard {
  height: 40vh;
  overflow: hidden;
  color: darkgoldenrod;
  letter-spacing: .07rem;
  background-color: darkblue;

  img {
    height: 30vh;
    object-fit: cover;
    object-position: bottom;
  }
}
</style>