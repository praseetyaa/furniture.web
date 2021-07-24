<template>
  <b-container class="home my-4">
    <div class="header mb-4">
      <b-carousel
        id="carousel-1"
        :interval="4000"
        fade
        indicators
      >
        <b-carousel-slide>
          <h3 class="text-capitalize">Keindahan rumah bukan hanya dari luarnya saja</h3>
          <p class="text-capitalize">temukan produk furnitur impianmu hanya disini</p>
          <template #img>
            <img
              class="d-block w-100 rounded"
              width="1024"
              height="480"
              src="banner1.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <Cards />
  </b-container>
</template>

<script>
import Cards from "@/components/Card.vue";

export default {
  name: "cards",
  components: {
    Cards,
  },
};
</script>