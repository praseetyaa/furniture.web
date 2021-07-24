<template>
  <div v-if="meals.length">
    <b-row class="mb-4">
      <b-col v-for="data of sortedCategories" v-bind:key="data.id_produk">
        <b-card class="mb-3 mb-lg-0">
          <p class="m-0">{{ data.jenis_produk }}</p>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="3" md="6" v-for="(data, index) in paginatedOrders" :key="index" class="d-flex align-items-stretch">
        <b-card no-body tag="article" class="mb-3">
          <b-img-lazy :src="'https://baonk.faturmedia.xyz/uploads/' + data.gambar_produk" alt="Image"></b-img-lazy>
          <b-card-body>
            <b-card-text class="fw-bold">{{ data.nama_produk }}</b-card-text>
            <b-card-text class="text-success">Rp : {{ data.harga_produk }}</b-card-text>
            <b-card-text>{{
              `${data.deskripsi_produk.slice(0, 100)}...`
            }}</b-card-text>
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
    <div class="text-center ">
      <b-button @click="loadMore" v-if="currentPage * maxPerPage < meals.length" variant="primary">Lihat Lebih Banyak</b-button>
    </div>
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
      currentPage: 1,
      maxPerPage: 8,
      showReadMore: true,
    };
  },
  computed: {
    totalResults() {
      return Object.keys(this.meals).length;
    },
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    },
    pageOffest() {
      return this.maxPerPage * this.currentPage;
    },
    paginatedOrders() {
      return this.meals.slice(0, this.currentPage * this.maxPerPage);
    },
    sortedCategories() {
      const cats = this.meals.reduce((p,c) => {
        p[c.jenis_produk] = c
        return p
      }, {})
      return Object.values(cats).sort((a,b) => a.jenis_produk.localeCompare(b.jenis_produk))
    }
  },
  methods: {
    loadMore(){
      this.currentPage += 1;
    }
  },
  mounted() {
    axios 
    .get ("https://baonk.faturmedia.xyz/apps/product_non_ar.php")
    .then ((response) => {
        this.meals = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>