<template>
    <b-card-group>
        <router-link :to="{name: 'Character', params: {id: character.id}}">
            <b-card :title="character.name" :img-src="character.image" img-alt="Image" img-top>
                <b-card-text class="mb-2">
                    <b-row>
                        <b-col v-for="nickName in character.nickNames" :key="nickName.id"><span class="badge rounded-pill bg-info text-dark">{{nickName}}</span></b-col>
                    </b-row>
                </b-card-text>
            </b-card>
        </router-link>
    </b-card-group>
</template>
<script>
export default {
    name: "CharacterCard",
    props: ['character']
}
</script>
<style>
</style>