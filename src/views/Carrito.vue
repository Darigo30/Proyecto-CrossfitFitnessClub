<template>
    <div class="carrito">
        <header class="about-bg">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <div class="site-heading">
                        <h1 class="text-white text-uppercase fst-italic">
                            Carrito de <span>Compras</span>
                        </h1>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </header>
        <b-container class="py-5">
            <b-row>
                <b-col cols="12">
                    <div class="alert alert-secondary" role="alert">
                        Para pagar debes estar logeado <a href="#" class="alert-link">Inicia Sesión</a>.
                    </div>
                </b-col>
            </b-row>
            <b-row class="py-5">
                <b-col class="py-5" cols="6">
                    <h2 class="text-uppercase fst-italic">Detalle de <span>tu compra</span></h2>
                    <h4 class="py-3 ms-4">Plan:<span> 2 x Clases por Semana</span></h4>
                    <div class="ms-4">
                        <p><i class="fas fa-check-circle"></i> Cantidad: 1</p>
                        <p><i class="fas fa-check-circle"></i> Valor Mensual</p>
                        <p><i class="fas fa-check-circle"></i> 2 Clases por semana</p>
                    </div>
                    
                </b-col>
                <b-col class="cont-pagar" cols="6">
                    <h4 class="text-uppercase fst-italic text-white">SubTotal: $ 46.000</h4>
                    <h4 class="text-uppercase display-6 fst-italic text-white">Total: $ 46.000</h4>
                    <img class="py-4" src="../assets/paypall.jpg">
                    <a class="btn-pagar">Ir a Pagar</a>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<style scoped>
.about-bg {
  padding: 170px 0 170px;
  position: relative;
  background-image: url("../assets/carrito.jpg");
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
.cont-pagar{
    padding: 40px;
    background-color: #082846;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
}
@media (max-width: 767px) {
    .col-6 {
    width:100%;
}
}
</style>