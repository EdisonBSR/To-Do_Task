<template>
    <div>
        <b-form @submit.prevent="saveTask" id="containerForm">
            <b-form-input v-model="text" placeholder="Ingresa tu pendiente" autofocus></b-form-input>
            <b-button type="submit" variant="primary">Agregar</b-button>
        </b-form>
        <div id="containerTables">
            <table class="tableTasks">
                <tr>
                    <th id="tasks">Lista de tareas pendientes</th>
                </tr>
                <tr v-for="(task, index) in tasks" :key="index" style="border: 1px solid black;">
                    <td style=" border: 1px solid black; width: 300px;">
                        <div style="display: flex;flex-direction: row; justify-content: center; margin-bottom: 10px;">
                            <button type="checkbox" @click=" saveDone(index)" style="margin-right: 15px;height: 20px;">
                            </button>
                            <!-- <input type="checkbox" @click=" saveDone(index)" style="height: 20px;border: 1 solid black"> -->
                            <!-- <span> {{ task }}</span> -->
                            <textarea disabled :value="task" style="width: 90%; height: 50px;"></textarea>
                        </div>

                        <div id=" btnActionUpdateDelete">
                            <button class="btnUpdate"><b-icon variant="primary"
                                    icon="pencil-square"></b-icon>Actualizar</button>
                            <button class="btnDelete" @click="deleteTask(tasks, index)">
                                <b-icon variant="danger" icon="trash-fill"></b-icon>
                                Borrar</button>
                        </div>
                    </td>
                </tr>
            </table>

            <table class="tableTasks">
                <tr>
                    <th id="doneTasks">Lista de tareas realizadas</th>
                </tr>
                <tr v-for="(doneTask, index) in doneTasks" :key="index" style="border: 1px solid black;">
                    <td style="border: 1px solid black; width: 300px;">
                        <button id="btnRemoveDo" @click="removeDone(index)"> <b-icon icon="check2-circle"
                                variant="success"></b-icon> </button>

                        <span style="text-decoration-line:line-through"> {{ doneTask }}</span>
                        <button class="btnDelete done" @click="deleteTask(doneTasks, index)">
                            <b-icon variant="danger" icon="trash-fill"></b-icon>
                            Borrar</button>
                        <!-- <input type="text" disabled :value="doneTask"> -->

                    </td>

                </tr>
            </table>
        </div>

        <AlertModal ref="AlertModal" v-show="false" />
    </div>
</template>

<script>
import AlertModal from './AlertModal.vue';
export default {
    name: 'CheckList',
    components: {
        AlertModal
    },
    data() {
        return {
            text: '',
            tasks: [],
            doneTasks: []
        };
    },
    mounted() {
        this.getLocal();
    },
    methods: {
        saveTask() {
            if (this.text.trim() !== '') {
                this.tasks.push(this.text);
                this.text = '';
                this.saveLocal();
            } else {
                alert("Para crear una tarea ingrese el texto antes de crearla")
            }
        },
        saveDone(index) {
            let task = this.tasks[index]
            this.doneTasks.push(task)
            this.tasks.splice(index, 1)
            this.saveLocal()
        },
        removeDone(index) {
            console.log("remover done task")
            this.tasks.push(this.doneTasks[index])
            this.doneTasks.splice(index, 1)
            this.saveLocal()
        },
        deleteTask(tasks, index) {
            console.log(index)
            // tasks.splice(index, 1)
            console.log(tasks.splice(index, 1))
            this.showModal()
            this.saveLocal()
        },
        showModal() {
            this.$refs.AlertModal.showModal();
        },
        saveLocal() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            localStorage.setItem('doneTasks', JSON.stringify(this.doneTasks));
        },
        getLocal() {
            if (localStorage.tasks) {
                this.tasks = JSON.parse(localStorage.getItem('tasks'));
            }
            if (localStorage.doneTasks) {
                this.doneTasks = JSON.parse(localStorage.getItem('doneTasks'));
            }
        }
    }
};
</script>

<style scoped>
#containerForm {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 400px;
}

#containerForm .btn {
    margin-left: 10px;
    padding: 0;
    width: 80px;
    font-size: 1rem;
}

textarea {
    resize: none;
}

#containerTables {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    margin-bottom: 50px;
}

.tableTasks {
    border: 1px solid rgb(32, 33, 33);
    margin-top: 30px;
    width: 400px;
}

.tableTasks tr th {
    padding: 15px;
    height: 30px;
}

.tableTasks tr td {
    padding: 10px;
    text-align: justify;
    height: auto;
}


.tableTasks #tasks {
    background: rgb(241, 188, 42);
}

.tableTasks #doneTasks {
    background: rgb(46, 242, 89);
}

#btnActionUpdateDelete {
    display: flex;
    flex-direction: row;
    justify-content: center;

}

.btnDelete {
    border: 0;
    border-radius: 10px;
}

.btnUpdate {
    border: 0;
    border-radius: 10px;
}

#btnRemoveDo {
    border: 0;
    border-radius: 10px;
}

#btnRemoveDo:hover {
    background-color: rgba(25, 237, 92, 0.726);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 5px rgba(71, 70, 70, 0.669);
}

.btnDelete.done {
    float: right;
}

.btnDelete:hover {
    background-color: rgba(211, 50, 50, 0.559);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 5px rgba(71, 70, 70, 0.669);
}

.btnUpdate:hover {
    background: rgba(52, 230, 243, 0.701);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 5px rgba(71, 70, 70, 0.669);
}
</style>
