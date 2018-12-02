<template lang="pug">
section
  .home
    img.mateus(src='../../assets/images/matheus.jpg')
    p Mateus da Silveira Costa
    p Front-End Developer
    p.description Sou motivado pela curiosidade e prazer de trabalhar, vejo cada serviço como uma oportunidade para aprender novas tecnologias, melhores práticas e conceitos.
    a(href='#portifolio')
      i.fas.fa-angle-down
  Portifolio#portifolio
  Biography#biography
</template>
<script>
import Portifolio from '../portifolio/Portifolio';
import Biography from '../biography/Biography';
export default {
  components: {
    Portifolio,
    Biography
  }
}
</script>

<style lang="scss">
.home {
  position: relative;
  top: 6em;
  text-align: center;
  padding: 1em;
  color: white;
  height: 100vh;
  .mateus {
    border-radius: 100px;
    height: 150px;
    width: 150px;
  }
  p {
    margin: 1em 0;
  }
  .description {
    text-align: justify;
    margin: 1em auto;
    width: 30%;
  }
  i {
    font-size: 3rem;
    color: #2F80ED;
    cursor: pointer;
  }
}
@media (max-width: 480px) {
  .home {
    .description {
      width: 77%;
    }
  }
}
@media (max-width: 767px) {
  .home {
    .description {
      width: 77%;
    }
  }
}
@media (max-width: 823px) {
  .home {
    .description {
      width: 77%;
    }
  }
}

</style>
