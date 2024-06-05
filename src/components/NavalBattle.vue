<template>
    <div id="container-naval-battle">
        <div id="container">
            <form id="form-1" action="" @submit.prevent="sendPlayer">
                <input id="user-1" v-model="nickNamePlayer" class="user" type="text" placeholder="Ingrese su nombre"
                    autofocus />
                <button type="submit" class="btn btn-success" id="inputName">
                    Enviar
                </button>
            </form>
            <span id="spanPlayer1"></span>
            <p id="enemy-boat">
                Barcos enemigos localizado <span id="scorePlayer1"></span>
            </p>
            <table class="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, row) in 5" :key="i">
                        <th scope="row">{{ rightIndex[row] }}</th>
                        <td v-for="(i, column) in 5" :key="i">
                            <button class="boat-position" :id="`${row}${column}`" type=" button"
                                :value="`${row}${column}`" v-on:click="boatPosition"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p id="sendStartGame">Esperando jugador ...</p>
        <div id="container-Table2">
            <span id="spanPlayer2"></span>
            <p><span id="scorePlayer2"></span></p>
            <table class="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, row) in 5" :key="i">
                        <th scope="row">{{ rightIndex[row] }}</th>
                        <td v-for="(j, column) in 5 " :key="j">
                            <button class="boat-position" :id="`2${row}${column}`" type="button"
                                :value="`${row}${column}`" v-on:click="attack"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import io from "socket.io-client"
export default {
    name: "NavalBattle",
    data() {
        //La variable espC hace referencia a los espectadores cuando se inicia mas de dos conexiones y reconocer que existen ya los dos jugadores para registraslo.
        return {
            socket: io('localhost:3002'),
            nickNamePlayer: "",
            rightIndex: ["A", "B", "C", "D", "E"],
            player1: "",
            player2: "",
            espC: "",
            playerAtq: "",
            boardPosition: [],
            countPosition: 0,
            score: 0,
            startShotter: false,
            ID_BOAT: "bs",
        }
    },
    mounted() {
        for (let row = 0; row < 5; row++) {
            this.boardPosition[row] = [];
            for (let column = 0; column < 5; column++) {
                this.boardPosition[row][column] = 0;
            }
        }
        this.socket.on("new player", (user1, user2) => {
            if (user1 != "" && user2 != "") {
                alert("usuarios completos");
                this.espC = "Espectador";
                this.player1 = user1;
                this.player2 = user2;
                const SPAN_PLAYER1 = document.getElementById("spanPlayer1");
                const SPAN_PLAYER2 = document.getElementById("spanPlayer2");
                const INPUT_PLAYER = document.getElementById("user-1");
                const NAME = document.getElementById("inputName");
                document.getElementById("enemy-boat").remove()
                INPUT_PLAYER.remove()
                document.getElementById("form-1").remove()
                SPAN_PLAYER1.innerText = this.player1;
                SPAN_PLAYER2.innerText = this.player2;
                SPAN_PLAYER2.style.color = "black";
                NAME.disabled = true;
                NAME.style.background = "transparent";
                NAME.style.border = 0;

                // this.socket.emit("load player", this.espC);
            } else if (user1 != "") {
                this.player2 = user1;
                const SPAN_PLAYER2 = document.getElementById("spanPlayer2");
                SPAN_PLAYER2.innerHTML = this.layer2;
            }
        });
        this.socket.on("load player", (user) => {
            if (this.player2 == "" && this.player1 != user) {
                this.player2 = user;
                const SPAN_PLAYER2 = document.getElementById("spanPlayer2");
                SPAN_PLAYER2.innerHTML = user;
                console.log("usuario cargado");
                this.playerAtq = this.player1;
            }
        });
        this.socket.on("start battle", (start) => {
            const PLAYER_START_GAME = document.getElementById("sendStartGame");
            this.startShotter = start;

            if (this.playerAtq == "") {
                PLAYER_START_GAME.innerText = `Turno de ${this.player2}`;
                PLAYER_START_GAME.style.color = "green";
            } else {
                PLAYER_START_GAME.innerText = `Turno de ${this.playerAtq}`;
                PLAYER_START_GAME.style.color = "green";
            }
            if (this.espC != "") {
                PLAYER_START_GAME.innerText = `Turno de ${this.player1}`;
                PLAYER_START_GAME.style.color = "green";
            }
        });
        // espS ultimo argumento attack y en good y fail
        this.socket.on("attack", (user, point, row, column,) => {
            if (user == this.player1) {
                console.log(`Ingreso ${this.player1}`);
                if (point == 1) {
                    if (this.espC == "") {
                        const POINTS_PLAYER1 = document.getElementById("scorePlayer1");
                        this.score += point;
                        POINTS_PLAYER1.innerText = `${this.score}`;
                    }

                    this.good(row, column, user,);
                } else {
                    this.fail(row, column, user,);
                }
                this.playerAtq = this.player2;
            } else if (user == this.player2) {
                console.log(`Ingreso ${this.player2}`);

                if (point == 1) {
                    this.good(row, column, user);
                } else {
                    this.fail(row, column, user);
                }
                this.playerAtq = this.player1;
            }

            if (this.score == 5) {

                let winner = [{ "player1": this.player1, "score": 0 }, { "player2": this.player2, "score": 0 }]
                if (winner[0].player1 == user) {
                    winner[0].score++
                } else if (winner[1].player2 == user) {
                    winner[1].score++
                }
                this.socket.emit("winner", user, winner);

                alert(`GANADOR ¡${user}!`);
                // location.reload();
            }
            const PLAYER_START_GAME = document.getElementById("sendStartGame");
            PLAYER_START_GAME.innerText = `Turno de ${this.playerAtq}`;
            PLAYER_START_GAME.style.color = "green";
        });
        this.socket.on("winner", (user) => {
            alert(`GANADOR ¡${user}!`);
            // location.reload();
        });
    },
    methods: {
        sendPlayer(e) {
            e.preventDefault();
            console.log(this.nickNamePlayer == this.player2);
            if (this.nickNamePlayer != "" && this.nickNamePlayer != this.player2) {
                this.player1 = this.nickNamePlayer;
                // this.USER1.disabled = true;
                // SEND_NAME.disabled = true;
                this.socket.emit("load player", this.player1);
                console.log(`jugador enviado ${this.player1}`);
            } else {
                alert("Usuario vacio o el nombre ya esta en uso");
            }
        },
        attack() {
            if (this.playerAtq == this.player1 && this.startShotter && this.espC == "") {
                let point = 0;
                let position = event.target.value;
                let x = position.split("");
                let [row, column] = x;
                const ID = event.target.getAttribute("id");
                const BUTTON = document.getElementById(`${ID}`);
                BUTTON.disabled = true;
                this.socket.emit("attack", this.player1, point, row, column);
            } else if (this.espC != "") {
                console.log("")
            } else {
                // alert("No es tu turno para atacar");
            }
        },
        good(row, column, user) {
            if (user == this.player1) {
                const ID = `2${row}${column}`;
                const BUTTON = document.getElementById(`${ID}`);
                BUTTON.style.background = "#FE2626";
                const BOAT = document.createElement("span");
                BOAT.className += "bi bi-fire";
                BUTTON.appendChild(BOAT);
            } else if (user == this.player2) {
                const ID = `${row}${column}`;
                const BUTTON = document.getElementById(`${ID}`);
                BUTTON.style.background = "#FE2626";
                const BOAT = document.createElement("span");
                BOAT.className += "bi bi-fire";
                BUTTON.appendChild(BOAT);
            }
        },
        fail(row, column, user,) {
            if (user == this.player1) {
                console.log("pinta agua");
                const ID = `2${row}${column}`;
                const BUTTON = document.getElementById(`${ID}`);
                BUTTON.style.background = "#03CAE3";
                const BOAT = document.createElement("span");
                BOAT.className += "bi bi-water";
                BUTTON.appendChild(BOAT);
            } else if (user == this.player2) {
                console.log("pinta agua");
                const ID = `${row}${column}`;
                const BUTTON = document.getElementById(`${ID}`);
                BUTTON.style.background = "#03CAE3";
                const BOAT = document.createElement("span");
                BOAT.className += "bi bi-water";
                BUTTON.appendChild(BOAT);
            }
        },
        boatPosition() {
            if (this.countPosition < 5 && this.player1 != "" && this.espC == "") {
                let position = event.target.value;
                let x = position.split("");
                let [row, column] = x;
                this.boardPosition[row][column] = this.ID_BOAT;
                const ID = event.target.getAttribute("id");
                const BOAT = document.createElement("span");
                BOAT.className += "material-icons";
                BOAT.innerText = "directions_boat"
                const BUTTON = document.getElementById(`${ID}`);
                BUTTON.disabled = true;
                BUTTON.style.background = "#64FB8D";
                BUTTON.appendChild(BOAT);
                this.countPosition++;
                console.log(this.countPosition);
            } else if (this.countPosition >= 6) {
                alert("No puede agregar mas barcos ");
            } else if (this.player1 == "") {
                alert("No ha ingresado su nombre de jugador");
            }
            if (this.countPosition == 5) {
                console.log("ingreso a countPosition==5");
                this.socket.emit("start battle", this.player1, this.boardPosition);
                this.countPosition++;
            }
        },
    },
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

#spanPlayer2 {
    text-align: center;
    font-style: oblique;
    color: rgba(222, 48, 48, 0.9);
}



#container-Table2>table {
    /* margin-top: 60px; */
    margin-right: 30px;
}

form {
    display: flex;
    justify-content: center;
}

.user {
    background: transparent;
    border: 0px;
    text-align: center;
}

.table-bordered {
    width: 500px;
    height: 450px;
    margin-top: 20px;
}


.table-bordered td,
.table-bordered th {
    border: 1px solid #0d86ff;
}

.table-bordered td {
    width: 80px;
    height: 80px;
}

.boat-position {
    margin: 3px;
    width: 80px;
    height: 80px;
    background: transparent;
    border: 0px;
}

.table td,
.table th {
    padding: 0;
}

.table thead th {
    text-align: center;
    background: transparent;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 0 solid transparent;
}

.table th {
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-bottom: 1px solid transparent;
    text-align: center;
    margin: 0 auto;
}

.no-boat {
    background: #9af3ff;
    border-radius: 3px;
    border: none;
}

#sendStartGame {
    width: 80px;
    color: #4e4e56;
    text-align: center;

}

#routerView {
    display: flex;
    flex-direction: row;

}

#container-naval-battle {
    display: flex;
    align-items: stretch;
}
</style>
