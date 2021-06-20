<template>
  <div class="header">
    <div class="top-address">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="top-address-ditels">
              <ul>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <a target="_blank" href="#">La Florida</a>
                </li>
                <li>
                  <i class="far fa-clock"></i>
                  <span>Lunes a Viernes : 6.30 am - 21.00 pm</span>
                </li>
                <li>
                  <i class="fas fa-phone"></i>
                  <a href="#">+56 9 32230971</a>
                </li>
              </ul>
            </div>
            <div class="top-social">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-google-plus-g"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg text-white">
      <div class="container-fluid cont-nav">
        <router-link class="navbar-brand" to="/"
          ><img class="logo" src="../assets/logo.png" alt="Logo Crossfit"
        /></router-link>
        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav>
            <div class="d-flex">
              <ul
                class="
                  navbar-nav
                  me-auto
                  mb-2 mb-lg-0
                  text-uppercase text-white
                "
              >
                <li class="nav-item">
                  <router-link class="nav-link active" to="/"
                    >Inicio</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/acercade"
                    >Acerca de</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contacto"
                    >Contacto</router-link
                  >
                </li>
                <li class="nav-item" v-if="actualUser && actualUser.role === 'admin'">
                  <router-link class="nav-link agend" to="/agendar"
                    >Admin</router-link
                  >
                </li>
                <li class="nav-item" v-else>
                  <router-link class="nav-link agend" to="/agendar"
                    >Agenda Clases</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="text-right p-0 nobile-position">
              <div class="shopping-bag">
                <div
                  @click="$router.push('/carrito')"
                  class="cart"
                  to="/carrito"
                >
                  <i class="fas fa-shopping-bag"></i>
                  <span class="cantcarri">{{ cantidadCarrito }}</span>
                </div>
              </div>
              <div class="icono-login" v-if="!isLogeado">
                <router-link class="log" to="/login">
                  <i class="fas fa-user-alt"></i>
                </router-link>
              </div>
              <div class="icono-login" v-else>
                <b-dropdown
                  id="dropdown-1"
                  text="Cerrar Sesión"
                  class="m-md-2 btn-drop"
                >
                  <b-dropdown-item @click="cerrarSesion()"
                    >Salir</b-dropdown-item
                  >
                </b-dropdown>
              </div>

              <div class="become-member">
                <router-link to="/socio">Quiero ser Socio</router-link>
              </div>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Nav",
  computed: {
    ...mapState(["actualUser"]),
    ...mapGetters(["cantidadCarrito", "isLogeado"]),
  },
  methods: {
    ...mapMutations(["cerrarSesion"]),
  },
};
</script>

<style scoped>
.cont-nav {
  padding-right: 0;
}
.nav-item {
  margin: 25px 0px;
}
.logo {
  width: 70%;
  margin-left: 25px;
}
.navbar {
  padding-top: 0;
}
.dropdown-toggle {
  background: transparent !important;
  border: 1px solid #f30b47;
  padding: 12px;
  border-radius: 0px;
}
.navbar-expand-lg .navbar-collapse {
  display: flex;
  justify-content: space-between;
}
.shopping-bag {
  display: inline-block;
  padding: 0 12px;
  cursor: pointer;
}
.shopping-bag a {
  text-decoration: none;
  position: relative;
}
.svg-inline--fa.fa-shopping-bag.fa-w-14 {
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: #f30a46;
}
.shopping-bag a span {
  background: #fff;
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 20px;
  text-align: center;
  font-size: 9px;
  line-height: 20px;
  color: #f30a46;
  font-weight: 300;
  position: absolute;
  top: -9px;
  left: 8px;
}
.become-member {
  display: inline-block;
  background-color: #f30a46;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 16% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 16% 100%);
}
.become-member a {
  font-size: 16px;
  color: #ffffff;
  font-weight: 700;
  padding: 34px 40px;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
}
.icono-login {
  display: inline-block;
}
.log {
  background-color: #f30a46;
  -webkit-clip-path: polygon(0 0, 62% 0, 100% 100%, 34% 100%);
  clip-path: polygon(0 0, 62% 0, 100% 100%, 34% 100%);
  padding: 36px 40px;
  border: 0px;
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  margin-right: -20px;
}
.top-address {
  text-align: right;
  position: relative;
  padding: 17px 0;
}
.top-address-ditels {
  display: inline-block;
}
.top-address-ditels ul li {
  display: inline-block;
  padding-left: 35px;
}

.top-address-ditels ul li a {
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  font-weight: 300;
  display: inline-block;
  text-decoration: none;
}
.top-address-ditels ul li i {
  color: #f30a46;
}
.top-address-ditels ul li span {
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  font-weight: 300;
  display: inline-block;
}
.top-social {
  display: inline-block;
  padding-right: 55px;
  padding-left: 100px;
}
.top-social a {
  font-size: 16px;
  color: #ffffff;
  padding: 0 5px;
  -webkit-transition: background 0.3s ease;
  -o-transition: background 0.3s ease;
  transition: background 0.3s ease;
}
.svg-inline--fa.fa-map-marker-alt.fa-w-12,
.svg-inline--fa.fa-clock.fa-w-16,
.svg-inline--fa.fa-phone.fa-w-16 {
  color: #f30a46;
}
.nav-link {
  color: white;
  font-weight: 700;
}
.nav-link:hover,
.nav-link:focus {
  color: #f30a46;
}
.top-address::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(25%, rgba(243, 10, 70, 0)),
    to(rgba(243, 10, 70, 1))
  );
  background: -o-linear-gradient(
    left,
    rgba(243, 10, 70, 0) 25%,
    rgba(243, 10, 70, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(243, 10, 70, 0) 25%,
    rgba(243, 10, 70, 1) 100%
  );
}
.agend {
  border: 1px solid #f30b47;
}
.navbar-expand-lg .navbar-nav .nav-link {
  padding: 10px 35px;
}
.header {
  position: absolute;
  width: 100%;
  z-index: 9;
}
.cantcarri{
  color: #fff;
}
.navbar-collapse {
  flex-grow: 0;
}
@media (max-width: 1199px) {
  .nobile-position {
    width: 100%;
  }
  .navbar-toggler {
    background-color: #fff;
    border: 1px solid #f30b47;
    margin-right: 25px;
  }
  .b-icon.bi {
    color: #f30b47;
  }
}
@media (max-width: 991px) {
  .header {
    position: initial;
    background: #082846;
  }
  .logo {
    margin-left: 0;
    max-width: 160px;
    margin: 15px;
  }
  .container-fluid.cont-nav {
    display: flex;
  }
  .navbar-nav {
    flex-direction: column;
  }
  .log {
    padding: 36px 20px;
    background-color: transparent;
  }
  .become-member {
    clip-path: none;
    margin-left: 15px;
  }
  .become-member a {
    padding: 14px 20px;
  }
  .top-address {
    display: none;
  }
}
</style>
