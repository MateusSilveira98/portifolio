<template lang="pug">
  .portifolio
    h1.title Portifólio
    .cards
      .card(v-for='company of allCompanies', :key='company.id', @click='viewCompanyProject(company.id)')
        .header
          img.logo(:src='company.logoName')
        .footer
          span.company {{company.name}} -
            span.project {{company.project.name}}
</template>
<script>
import CompaniesJSON from '../../companies.json'
export default {
  data() {
    return {
      allCompanies: CompaniesJSON
    }
  },
  methods: {
    viewCompanyProject(id) {
      this.$router.push(`empresa/${id}`);
    }
  }
}
</script>

<style lang="scss">
.portifolio {
  height: 100vh;
  position: relative;
  top: 6em;
  text-align: center;
  .cards {
    margin-top: 1em;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    justify-content: center;
    width: 100%;
  }
  .card {
    background: white;
    border-radius: 3px;
    width: 250px;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.5s;
    &:hover {
      opacity: 1;
      border: 3px solid #2F80ED;
      .header {
        border-bottom: 1px solid #2F80ED;
      }
    }
    .header {
      padding: 1em;
      border-bottom: 1px solid black;
      .logo {
        width: 150px;
        height: 150px;
      }
    }
    .footer {
      padding: 0.5em;
      .company {
        font-weight: bold;
        text-transform: capitalize;
        .project {
          font-weight: normal;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .portifolio {
    .cards {
      display: block;
      width: 100%;
      .card {
        opacity: 1;
        margin: 1em auto;
      }
    }
  }
}
@media (max-width: 767px) {
  .portifolio {
    .cards {
      display: block;
      width: 100%;
      .card {
        opacity: 1;
        margin: 1em auto;
      }
    }
  }
}
</style>
