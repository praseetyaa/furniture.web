<template>
  <b-navbar toggleable="lg" type="light" variant="white" id="nav" class="sticky-top shadow-sm">
    <b-container>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand to="/" class="text-dark d-block d-lg-none">Furniture</b-navbar-brand>
      <router-link to="#" class="d-block d-lg-none"><b-icon icon="cart2" class="fs-2"></b-icon></router-link>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav>
            <b-nav-item to="/">
              <div class="d-flex flex-column align-items-center">
                <b-icon icon="house"></b-icon>
                <span class="small navbar-text-hover">Beranda</span>
              </div>
            </b-nav-item>
            <b-nav-item to="/category">
              <div class="d-flex flex-column align-items-center">
                <b-icon icon="ui-checks-grid"></b-icon>
                <span class="small navbar-text-hover">Kategori</span>
              </div>
            </b-nav-item>  
          <b-nav-item to="/favorite" class="d-none d-lg-block">
            <div class="d-flex flex-column align-items-center">
              <b-icon icon="heart"></b-icon>
              <span class="small navbar-text-hover">Favorit</span>
            </div>
          </b-nav-item> 
        </b-navbar-nav>
        <b-navbar-brand to="/" class="text-dark mx-auto d-none d-lg-block">Furniture</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item to="/users" class="d-none">Users</b-nav-item> 
          <b-nav-item @click="$bvModal.show('modal-pencarian')" class="d-none d-lg-block">
            <div class="d-flex flex-column align-items-center" id="show-btn">
              <b-icon icon="search"></b-icon>
              <span class="small navbar-text-hover">Cari</span>
            </div>
          </b-nav-item>
          <b-nav-item to="/cart" class="d-none d-lg-block">
            <div class="d-flex flex-column align-items-center">
              <b-icon icon="cart2"></b-icon>
              <span class="small navbar-text-hover">Keranjang</span>
            </div>
          </b-nav-item> 
          <b-nav-item to="/users" class="d-none d-lg-block">
            <div class="d-flex flex-column align-items-center">
              <b-icon icon="person"></b-icon>
              <span class="small navbar-text-hover">Masuk</span>
            </div>
          </b-nav-item> 
        </b-navbar-nav>
      </b-collapse>
    </b-container>

    <b-modal id="modal-pencarian" hide-footer hide-header>
      <b-input-group class="border rounded p-2">
        <template #append>
          <b-button variant="primary" class="rounded"><b-icon icon="search"></b-icon></b-button>
        </template>
        <b-form-input placeholder="Pencarian" class="search-input"></b-form-input>
      </b-input-group>
    </b-modal>

  </b-navbar>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  .navbar-brand {font-family: 'Pacifico', cursive}
  .navbar-text-hover {transform: scale(0); visibility: hidden; height: 0; transition: all .25s ease;}
  #nav:hover .navbar-text-hover {transform: scale(1); visibility: visible; height: auto; transition: all .25s ease;}
  .search-input{border: unset}
  .search-input:focus{border: unset; box-shadow: unset;}
</style>