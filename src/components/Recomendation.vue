<template>
  <div v-if="meals.length">
    <b-row>
      <b-col lg="3" md="6" :key="data.index" v-for="data in meals.slice(0, 4)" class="d-flex align-items-stretch">
        <b-card no-body tag="article" class="mb-3">
          <b-img-lazy :src="'https://baonk.faturmedia.xyz/uploads/' + data.gambar_produk" alt="Image"></b-img-lazy>
          <b-card-body>
            <b-card-text class="fw-bold">{{ data.nama_produk }}</b-card-text>
            <b-card-text class="text-success">Rp {{ data.harga_produk }}</b-card-text>
          </b-card-body>
          <b-card-footer>
            <b-button
              :to="{ name: 'Meal', params: { id: data.id_produk } }"
              variant="primary"
              >Lihat Produk <b-icon icon="arrow-right"></b-icon
            ></b-button>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </div>
  <div v-else>
    <b-row>
      <b-col lg="4">
        <b-card no-body img-top>
          <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
          <b-card-body>
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="4">
        <b-card no-body img-top>
          <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
          <b-card-body>
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="4">
        <b-card no-body img-top>
          <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
          <b-card-body>
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      meals: [],
    };
  },
  mounted() {
    axios
      .get("https://baonk.faturmedia.xyz/apps/product_ar.php")
      .then((response) => {
        this.meals = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
