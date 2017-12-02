<template>
    <div>
        <p>Staus: {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change</button>
    </div>
    
</template>

<script>
    export default {
        data: function() {
            return {
                status: 'Critical'
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Dead'
            }
        }
    }
</script>

<style>

</style>
