<template lang="pug">
  .companyView
    router-link.text-none(to='/')
      i.fas.fa-arrow-left.back
    h1.title {{company.name}} - {{company.project.name}}
    .logo
      img(:src='company.logoName')
    .description
      p {{company.project.description}}
    .site
      a.text-none(:href='company.project.link', v-if='company.project.link', target='_blank') Link do projeto:
        span.link {{company.project.link}}
      p(v-if='!company.project.link') Infelizmente não possui link para visualização por questões de acesso restrito
    .technologies
      p Tecnologias:
      .tools
        .tool(v-for='tool of company.project.technologies')
          img.toolLogo(:src='tool.logoName', :title='tool.name')
</template>
<script>
import CompaniesJSON from "../../companies.json";
export default {
  data() {
    return {
      allCompanies: CompaniesJSON,
      company: {}
    };
  },
  created() {
    this.company = this.allCompanies.find(
      company => company.id == this.$route.params.id
    );
  }
};
</script>

<style lang="scss">
.companyView {
  position: relative;
  top: 6em;
  color: white;
  text-align: center;
  .back {
    font-size: 1.2rem;
    position: fixed;
    left: 1em;
    text-decoration: none;
    cursor: pointer;
    color: #2f80ed;
  }
  .title {
    text-transform: capitalize;
  }
  .logo {
    margin: 1em auto 0;
    width: 50%;
    height: 250px;
    background: white;
    border-radius: 3px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .description,
  .site,
  .technologies {
    text-align: justify;
    width: 50%;
    margin: 1em auto;
  }
  .site {
    .link {
      margin-left: 1em;
      cursor: pointer;
      &:hover {
        color: #2f80ed;
      }
    }
  }
  .technologies {
    .tools {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1em;
      .tool {
        background: #4c4c4c;
        padding: 0.5em;
        width: 50px;
        height: 50px;
        .toolLogo {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .companyView {
    .description,
    .site,
    .technologies,
    .logo {
      width: 85%;
    }
  }
}
@media (max-width: 767px) {
  .description,
  .site,
  .technologies,
  .logo {
    width: 85%;
  }
}
@media (max-width: 823px) {
  .description,
  .site,
  .technologies,
  .logo {
    width: 85%;
  }
}
</style>
