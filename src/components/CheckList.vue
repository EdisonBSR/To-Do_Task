<template>
    <div>
        <b-form @submit.prevent="saveTask" id="containerForm">
            <b-form-input v-model="text" placeholder="Ingresa tu pendiente" autofocus></b-form-input>
            <b-button type="submit" variant="primary">Agregar</b-button>
        </b-form>
        <div id="containerCards">
            <b-card title="Tareas por realizar" tag="article" class="mb-2">
                <b-card-text v-for="(task, index) in tasks" :key="index" class="CardTasks">
                    <b-row class="text-center">
                        <b-col> <button id="btnDone" @click=" saveDone(index)">
                                <b-icon icon="circle"></b-icon>
                            </button></b-col>
                        <b-col cols="7" style="text-align: justify"><span @click="updateTask(index)">
                                {{ task }}</span>
                        </b-col>
                        <b-col>
                            <!-- <button name="btnTaskUpdate" id="btnUpdate" @click="updateTask(index)">
                                <b-icon variant="primary" icon="pencil-square"></b-icon></button> -->
                            <button class="btnDelete" @click="deleteTask(tasks, index)">
                                <b-icon variant="danger" icon="trash-fill"></b-icon>
                            </button>
                        </b-col>
                    </b-row>




                </b-card-text>
            </b-card>
            <b-card title="Tarea realizadas" tag="article" class="mb-2">
                <b-card-text v-for="(doneTask, index) in doneTasks" :key="index">
                    <b-row class="text-center">
                        <b-col> <button id="btnRemoveDo" @click="removeDone(index)"> <b-icon icon="check2-circle"
                                    style="height: 25px"></b-icon> </button></b-col>
                        <b-col cols="8"><span style="text-decoration-line:line-through"> {{ doneTask }}</span></b-col>
                        <b-col><button class="btnDelete done" @click="deleteTask(doneTasks, index)">
                                <b-icon variant="danger" icon="trash-fill"></b-icon>
                            </button></b-col>
                    </b-row>
                </b-card-text>
            </b-card>
        </div>

    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'CheckList',
    components: {
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
        updateTask(index) {
            Swal.fire({
                title: "Ingrese el nuevo contenido del pendiente",
                input: "text",
                inputAttributes: {
                    autocapitalize: "off"
                },
                showCancelButton: true,
                confirmButtonText: "Actualizar",
                showLoaderOnConfirm: true,
                preConfirm: (task) => {
                    if (task.trim() !== '') {
                        this.tasks[index] = task
                        this.tasks = [...this.tasks]
                        this.saveLocal()
                    } else {
                        Swal.fire({
                            title: "Cambio en tarea vacio,no es posible actualizar",
                            icon: "warning",
                            showCloseButton: true
                        })
                    }
                }
            })
        },
        removeDone(index) {
            this.tasks.push(this.doneTasks[index])
            this.doneTasks.splice(index, 1)
            this.saveLocal()
        },
        deleteTask(tasks, index) {
            try {
                Swal.fire({
                    title: "Confirma si deseas eliminar la tarea: ",
                    text: this.tasks[index],
                    showDenyButton: true,
                    confirmButtonText: "Eliminar",
                    denyButtonText: `Cancelar`

                }).then((result) => {
                    if (result.isConfirmed) {
                        tasks.splice(index, 1)
                        this.saveLocal()
                        Swal.fire({
                            title: "Borrada!",
                            text: "La tarea ha sido borrada.",
                            icon: "success"
                        });
                    } else if (result.isDenied) {
                        Swal.fire("Operacion cancelada", "", "");
                    }
                });
            } catch (error) {
                alert("Se encontro el siguiente error", error)
            }

        },
        saveLocal() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            localStorage.setItem('doneTasks', JSON.stringify(this.doneTasks));
        },
        getLocal() {
            if (localStorage.tasks) {
                this.tasks = [...JSON.parse(localStorage.getItem('tasks'))];
            }
            if (localStorage.doneTasks) {
                this.doneTasks = [...JSON.parse(localStorage.getItem('doneTasks'))];
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

.CardTasks {
    margin-bottom: 20px;
}

#containerCards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 20px;
}

.mb-2 {
    width: 400px;
}



#btnDone {
    border: 0;
    height: 25px;
    background-color: rgba(143, 234, 52, 0.279);
    border-radius: 10px;
}

#btnDone:hover {
    background-color: rgba(25, 237, 92, 0.726);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 5px rgba(71, 70, 70, 0.669);
}



.btnDelete {
    border: 0;
    border-radius: 10px;
}

#btnUpdate {
    border: 0;
    margin-bottom: 5px;
    border-radius: 10px;
}

#btnRemoveDo {
    float: left;
    border: 0;
    height: 25px;
    border-radius: 10px;
    background-color: rgba(143, 234, 52, 0.279);
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

#btnUpdate:hover {
    background: rgba(52, 230, 243, 0.701);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 5px rgba(71, 70, 70, 0.669);
}
</style>
