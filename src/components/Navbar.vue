<template>
    <b-navbar variant="dark" type="dark" >
        <b-container>
            <b-navbar-brand href="/">
                <img src="https://placekitten.com/g/30/30" alt="Kitten"> {{title}}
            </b-navbar-brand>
        </b-container>
    </b-navbar>
</template>
<script>
export default {
    name: 'Navbar',
    props: {title: String},
}
</script>
<style>
</style>