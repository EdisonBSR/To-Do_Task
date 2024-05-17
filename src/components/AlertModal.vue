<template>
    <div style="margin: 0 auto;">
        <b-modal ref="AlertModal" hide-footer title="Confirma si deseas eliminar la tarea">
            <div class="d-block text-center">
                <h3>{{ task }}</h3>
            </div>
            <div style="display: flex;flex-direction: row;">
                <b-button class="mt-3" variant="outline-success" block @click="confirmDelete">Confirmar</b-button>
                <b-button class="mt-3" variant="outline-danger" block @click="cancelDelete">No Borrar</b-button>
            </div>

        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'AlertModal',
    props: {
        task: String
    },
    methods: {
        showModal() {
            this.$refs['AlertModal'].show()
        },
        confirmDelete() {
            alert("Si eliminar")
            this.$refs['AlertModal'].hide()
        },
        cancelDelete() {
            alert("no quiero borar la tarea")
            this.$refs['AlertModal'].hide()
        }
    }
}
</script>
<style scoped></style>