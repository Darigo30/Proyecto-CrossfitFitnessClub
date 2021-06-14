<template>
  <div class="login">
    <header class="about-bg">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="site-heading">
              <h1 class="text-white text-uppercase fst-italic">
                Iniciar <span>Sesión</span>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <b-container>
      <b-row>
        <b-col class="text-center pt-5" cols="12">
          <h4 class="fst-italic">
            Al iniciar sesión puedes pagar tus planes, ver planes pagados, ver
            calendario y reservar hora para tus clases!
          </h4>
          <p>
            <span
              >Recuerda que por pandemia, tenemos solo 12 cupos por clases. ¡¡No
              te quedes sin agendar!!</span
            >
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="formlog">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Correo Electrónico</label
              >
              <input
                type="email"
                class="form-control calc"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="username"
              />
              <div id="emailHelp" class="form-text text-white">
                No compartiremos tu correo con nadie.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Contraseña</label
              >
              <input
                type="password"
                class="form-control calc"
                id="exampleInputPassword1"
                v-model="password"
              />
              <div id="emailHelp" class="form-text text-white">
                No compartiremos tu contraseña con nadie.
              </div>
            </div>
            <button @click="login" class="btn-logg cl-lo">Ingresar</button>
            <button class="ms-2 cl-lo bt-limp">Limpiar</button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

import {mapState, mapMutations, mapGetters} from 'vuex';
import sjcl from 'sjcl';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    
    ...mapMutations(['setupUser']),
    login() {
      try{
      let user = this.getUserById(this.username);
      if(user!=null)
      {
        var bitArray = sjcl.hash.sha256.hash(this.password);
        var digest = sjcl.codec.hex.fromBits(bitArray);
        if(user.password !== digest)
          throw 'Usuario o contraseña inválidos'
        this.setupUser(user);
        console.log("ultima pagina:" + this.lastVisitedPage)
        if(this.lastVisitedPage){
          this.$router.push({name: this.lastVisitedPage});
        }else{
          this.$router.push("/home");
        }
      }
      }catch(e){
        alert(e);
      }
    }
  },
  computed: {
    ...mapState(['lastVisitedPage']),
    ...mapGetters(['getUserById'])
  },
}
</script>

<style scoped>
.about-bg {
  padding: 170px 0 170px;
  position: relative;
  background-image: url("../assets/login.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.site-heading {
  text-align: center;
  padding: 75px 0 0;
}
span {
  color: #f30b47;
}
.formlog {
  width: 700px;
  margin: 10px auto 50px;
  padding: 55px;
  background: #082846;
  border-radius: 15px;
  color: #fff;
}
label {
  font-weight: bold;
}
.bt-limp {
  background: #e0f0ff;
  color: #282828;
  padding: 15px;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0px;
}
.btn-logg {
  background: #f30b47;
  padding: 15px;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0px;
}
.cl-lo {
  width: auto;
}
@media (max-width: 767px) {
  .formlog {
    width: 100%;
  }
  .btn-calc {
    width: auto;
  }
  .formlog {
    padding: 20px;
  }
}
</style>
