<template>
    <b-container class="mt-5">
        <b-card class="character-card m-auto">
            <b-avatar :src="character.image" size="10rem"  img-alt="Image"></b-avatar>
            <h2>{{character.name}}</h2>
            <b-card-text class="content">
                <b-row>
                    <b-col cols="4"><p class="">Nicknames</p></b-col>
                    <b-col>
                        <span v-for="nickName in character.nickNames" :key="nickName.id" class="badge rounded-pill bg-info text-dark">{{nickName}}</span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="4"><p class="">Date of Birth</p></b-col>
                    <b-col>{{character.dob}}</b-col>
                </b-row>
                <b-row>
                    <b-col cols="4"><p class="">Birthplace</p></b-col>
                    <b-col>{{character.birthPlace}}</b-col>
                </b-row>
            </b-card-text>
        </b-card>
    </b-container>
</template>
<script>
export default {
    name: "CharacterDetails",
    data() {
        return {
            url: `https://ancient-refuge-00089.herokuapp.com/characters/${this.$route.params.id}`,
            character: {}
        }
    },
    methods: {
        async fetchCharacter() {
            const res = await fetch(this.url)
            const data = await res.json()
            return data
        }
    },
    async created() {
        this.character = await this.fetchCharacter()
    }
}
</script>
<style>
    .character-card {
        width: auto;
    }
    .content {
        text-align: left;
    }
    .badge {
        margin-right: 5px;
    }
</style>