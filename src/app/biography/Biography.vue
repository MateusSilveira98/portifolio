<template lang="pug">
  .biography
    h1.title Biografia
    .description
      p Bem, inicialmente eu nem sabia o que era desenvolvimento web, queria ser mecânico. Até que um dia, por falta de escolha, comecei a estudar T.I e me apaixonei pelo desenvolvimento e estou aqui até hoje.
      p Antes de ingressar na área, trabalhei como vendedor não registrado, onde aprendi a lidar com as pessoas e a entender suas necessidades.
      p Quando consegui meu estágio, fiquei muito feliz, porque foi lá que tudo que aprendi no decorrer dos estudos e na vida, tive que colocar em prática.
      p Hoje com mais experiência, entendo mais as coisas como elas são e funcionam, tanto da vida quanto profissional.
    .footer
      a.button(href='https://drive.google.com/file/d/145nDLR9xNuRBrXdXACya8kxMr-zWjddc/view', target='_blank') Veja meu CV
    img.first(src='../../assets/images/portoalegre.jpg')
    img.second(src='../../assets/images/praia.jpg')
    img.third(src='../../assets/images/paraquedas.jpeg')
    img.fourth(src='../../assets/images/run21.jpg')
</template>
<script>
</script>

<style lang="scss">
.biography {
  position: relative;
  top: 10em;
  height: 100vh;
  text-align: center;
  color: white;
  .description {
    text-align: justify;
    width: 50%;
    margin: 1em auto;
    p {
      margin-top: 1em;
    }
  }
  .footer {
    margin-top: 2em;
    .button {
      text-decoration: none;
      color: white;
      padding: 0.5em 1em;
      border-radius: 40px;
      border: 1px solid #2F80ED;
      &:hover {
        background: #2F80ED;
      }
    }
  }
  .first {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 0;
    left: 6em;
  }
  .second {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 0;
    right: 6em;
  }
  .third {
    position: absolute;
    width: 150px;
    height: 150px;
    bottom: 10em;
    right: 6em;
  }
  .fourth {
    position: absolute;
    width: 150px;
    height: 150px;
    left: 6em;
    bottom: 15em;
  }
}
@media (max-width: 480px) {
  .biography {
    top: 85em;
    img {
      display: none;
    }
    .description {
      width: 80%;
    }
  }
}
@media (max-width: 767px) {
  .biography {
    top: 95em;
    img {
      display: none;
    }
    .description {
      width: 80%;
    }
  }
}
</style>
