<template>
  <b-container class="my-4">
    <b-row>
      <b-col lg="8">
        <template>
          <b-breadcrumb class="bg-light p-3 rounded" v-if="!loadingData">
            <b-breadcrumb-item to="/">
              <b-icon icon="house-fill" aria-hidden="true"></b-icon>
              Beranda
            </b-breadcrumb-item>
            <b-breadcrumb-item active>{{ meals[0].nama_produk }}</b-breadcrumb-item>
          </b-breadcrumb>
        </template>
        <div v-if="meals.length">
          <div v-for="data in meals" :key="data.id_produk">
            <b-card no-body tag="card_product" class="mb-3">
            <b-img-lazy :src="'https://baonk.faturmedia.xyz/uploads/' + data.gambar_produk" alt="Image" class="mx-auto img-card-preview"></b-img-lazy>
            <b-card-body>
              <b-card-title>{{ data.nama_produk }}</b-card-title>
              <b-card-text>{{ data.deskripsi_produk }}</b-card-text>
            </b-card-body>
            </b-card>
          </div>
        </div>
        <div v-else>
          <b-card no-body img-top>
            <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
            <b-card-body>
              <b-skeleton animation="wave" width="85%"></b-skeleton>
              <b-skeleton animation="wave" width="55%"></b-skeleton>
              <b-skeleton animation="wave" width="70%"></b-skeleton>
            </b-card-body>
          </b-card>
        </div>
      </b-col>
      <b-col lg="4">
        <div v-if="meals.length">
          <h5>Rincian</h5>
          <b-card class="mb-3">
            <b-row v-if="!loadingData">
              <b-col class="col-6 d-flex flex-column align-items-center mb-4"><b-icon font-scale="3" class="mb-2" icon="cash" variant="primary"></b-icon> Harga : {{ meals[0].harga_produk }}</b-col>
              <b-col class="col-6 d-flex flex-column align-items-center mb-4"><b-icon font-scale="3" class="mb-2" icon="box-seam" variant="primary"></b-icon> Stok : {{ meals[0].stok_produk }}</b-col>
              <hr>
              <b-col class="col-6 d-flex flex-column align-items-center mb-4"><b-icon font-scale="3" class="mb-2" icon="ui-checks-grid" variant="primary"></b-icon> Kategori : {{ meals[0].jenis_produk }}</b-col>
              <b-col class="col-6 d-flex flex-column align-items-center mb-4"><b-icon font-scale="3" class="mb-2" icon="back" variant="primary"></b-icon> Tipe : {{ meals[0].tipe_produk }}</b-col>
            </b-row>
          </b-card>
          <div class="d-flex justify-content-between">
            <b-button variant="primary" block class="w-100 me-2">Masukan Keranjang</b-button>
            <b-button variant="primary" block class="w-100 ms-2">Beli</b-button>
          </div>
        </div>
        <div v-else>
          <b-card>
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <div class="heading"><h5>Rekomendasi</h5></div>
    <Recomendation />
  </b-container>
</template>

<script>
import axios from "axios";
import Recomendation from './Recomendation.vue';
export default {
  components: { Recomendation },
  data() {
    return {
      meals: [],
      loadingData: true,
    };
  },
  mounted() {
    axios
      .get(
        "https://baonk.faturmedia.xyz/apps/view-product.php?productId=" +
          this.$route.params.id
      )
      .then((response) => {
        this.meals = response.data;
        this.loadingData = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
  .breadcrumb-item a {text-decoration: none;}
  .img-card-preview {max-width: 400px;}
</style>