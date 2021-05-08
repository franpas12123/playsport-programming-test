<template>
  <b-container class="home">
    <div class="jumbotron mt-5 mb-5">
      <h1 class="display-5">Harry Potter Character Database</h1>
      <p class="lead text-muted">Browse our comprehensive database to out more information about your favourite Harry Potter character.</p>
    </div>
    <b-row>
      <b-col v-for="character in characters" :key="character.id">
        <CharacterCard class="w-auto" :character=character />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import CharacterCard from "@/components/CharacterCard.vue";

export default {
  name: "Home",
  components: {
    CharacterCard
  },
  data() {
    return {
      characters: {}  
    }
  },
  methods: {
    async fetchCharacters() {
      const res = await fetch('https://ancient-refuge-00089.herokuapp.com/characters')
      const data = await res.json()
      return data
    }
  },
  async created() {
    this.characters = await this.fetchCharacters()
  }
};
</script>

<style>
  .home {
    width: 100%;
  }
</style>