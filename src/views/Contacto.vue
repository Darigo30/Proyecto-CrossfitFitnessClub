<template>
  <div class="about">
    <header class="about-bg">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="site-heading">
              <h1 class="text-white text-uppercase fst-italic">
                Contáctate con <span>Nosotros</span>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <b-container class="py-5">
      <b-row>
        <b-col cols="8" sm>
          <h2 class="text-uppercase fst-italic pb-5">
            Si tienes consultas, dudas o sugerencias, <span>escríbenos!</span>
          </h2>
          <div>
           <iframe src="https://form.typeform.com/to/XmuXpeDM?typeform-medium=embed-sdk&amp;typeform-embed=embed-widget&amp;typeform-source=localhost&amp;embed-opacity=0&amp;typeform-embed-id=mp1xi" 
           allow="camera; microphone; autoplay; encrypted-media; fullscreen;" data-qa="iframe" style="border: 0px none; transform: rotateZ(0deg); height: 400px;" title="typeform-embed" width="100%" height="100%" frameborder="0">
           </iframe>
          </div>
        </b-col>
        <b-col cols="4 my-5" sm>
          <div class="contact-ditels m-lg-2">
            <ul class="media">
              <li><i class="fas fa-envelope"></i></li>
              <li>
                <div>info@crossfitfitnessclub.cl</div>
              </li>
            </ul>
            <ul class="media">
              <li><i class="fas fa-phone-volume"></i></li>
              <li>
                <div>+56 9 3223 0971</div>
              </li>
            </ul>
            <ul class="media">
              <li><i class="fas fa-map-marker-alt"></i></li>
              <li>
                <div>La Florida</div>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style scoped>
.about-bg {
  padding: 170px 0 170px;
  position: relative;
  background-image: url("../assets/contato.jpg");
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
.contact-ditels {
  background: #f30a46;
  padding: 50px 0px 20px 10px;
  margin-top: 0;
}
.media {
  display: flex;
  align-items: flex-start;
  color: #fff;
}
.contact-ditels li {
  padding-bottom: 30px;
  list-style: none;
  margin: 0 5px;
}
.contact-ditels li svg {
  height: 50px;
  width: 50px;
  border-radius: 50px;
}
.contact-ditels li i {
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  line-height: 55px;
}
.col-4,
.col-8 {
  width: 100%;
}
</style>
