<template>
  <div class="container-fluid bg-primary">
    <div class="row">
      <div class="col-12 p-3">
        <div class="d-flex flex-column align-items-center">
          <img src="../assets/img/Banner.png" alt="banner" class="img-fluid">
        </div>
        <div class="col-10 m-auto">
          <button @click="changeFilterCategory('')" class="btn btn-outline-light"> All</button>
          <button @click="changeFilterCategory('convention')" class="btn btn-outline-light"> Convention</button>
          <button @click="changeFilterCategory('sport')" class="btn btn-outline-light"> Sport</button>
          <button @click="changeFilterCategory('digital')" class="btn btn-outline-light"> Digital</button>
          <button @click="changeFilterCategory('concert')" class="btn btn-outline-light"> Concert</button>
        </div>
      </div>
      <div class="col-md-3" v-for="e  in events" :key="e.id">
        <EventCard :event="e" />
      </div>
      <div class="container">
        <div class="row my-4">
          <div class="col-12 p-4 mb-3">
            <h1 class="text-light text-center boarder-dark">Events</h1>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
import { computed, onMounted, ref } from "vue";
import Pop from "../utils/Pop.js";
import { eventsService } from "../services/EventsService.js";
import { AppState } from "../AppState.js";
import { EventCard } from "../components/EventCard.vue";


export default {
  setup() {
    const filterCategory = ref('')
    async function getAllEvents() {
      try {
        await eventsService.getAllEvents();
      } catch (error) {
        Pop.error(error, "[Getting Events]")
      }
    }
    onMounted(() => {
      getAllEvents();
    })
    return {
      events: computed(() => {
        if (!filterCategory.value) {
          return AppState.events
        } else {
          return AppState.events.filter(e => e.type == filterCategory.value)
        }
      }),
      myEvents: computed(() => AppState.myEvents),
      account: computed(() => AppState.account),
      changeFilterCategory(category) {
        filterCategory.value = category
      }
    };
  },
  components: { EventCard }
}
</script>


<style lang="scss" scoped></style>