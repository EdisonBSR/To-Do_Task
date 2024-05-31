<template>
    <div>
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
                    <tr>
                        <th scope="row">A</th>
                        <td>
                            <button class="boat-position" id="00" type="button" value="00"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="01" type="button" value="01"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="02" type="button" value="02"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="03" type="button" value="03"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="04" type="button" value="04"
                                v-on:click="boatPosition"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">B</th>
                        <td scope="row">
                            <button class="boat-position" id="10" type="button" value="10"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="11" type="button" value="11"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="12" type="button" value="12"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="13" type="button" value="13"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="14" type="button" value="14"
                                v-on:click="boatPosition"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">C</th>
                        <td scope="row">
                            <button class="boat-position" id="20" type="button" value="20"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="21" type="button" value="21"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="22" type="button" value="22"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="23" type="button" value="23"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="24" type="button" value="24"
                                v-on:click="boatPosition"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">D</th>
                        <td scope="row" name="1">
                            <button class="boat-position" id="30" type="button" value="30"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="31" type="button" value="31"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="32" type="button" value="32"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="33" type="button" value="33"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="34" type="button" value="34"
                                v-on:click="boatPosition"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">E</th>
                        <td scope="row">
                            <button class="boat-position" id="40" type="button" value="40"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="41" type="button" value="41"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="42" type="button" value="42"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="43" type="button" value="43"
                                v-on:click="boatPosition"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="44" type="button" v-on:click="boatPosition"
                                value="44"></button>
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
                    <tr>
                        <th scope="row">A</th>
                        <td>
                            <button class="boat-position" id="200" type="button" value="00"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="201" type="button" value="01"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="202" type="button" value="02"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="203" type="button" value="03"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="204" type="button" value="04"
                                v-on:click="attack"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">B</th>
                        <td>
                            <button class="boat-position" id="210" type="button" value="10"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="211" type="button" value="11"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="212" type="button" value="12"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="213" type="button" value="13"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="214" type="button" value="14"
                                v-on:click="attack"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">C</th>
                        <td>
                            <button class="boat-position" id="220" type="button" value="20"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="221" type="button" value="21"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="222" type="button" value="22"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="223" type="button" value="23"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="224" type="button" value="24"
                                v-on:click="attack"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">D</th>
                        <td>
                            <button class="boat-position" id="230" type="button" value="30"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="231" type="button" value="31"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="232" type="button" value="32"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="233" type="button" value="33"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="234" type="button" value="34"
                                v-on:click="attack"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">E</th>
                        <td>
                            <button class="boat-position" id="240" type="button" value="40"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="241" type="button" value="41"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="242" type="button" value="42"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="243" type="button" value="43"
                                v-on:click="attack"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="244" type="button" v-on:click="attack"
                                value="44"></button>
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
        return {
            socket: io('localhost:3002'),
            nickNamePlayer: "",
            player1: "",
            player2: "",
            espC: "",
            playerAtq: "",
            boardPosition: [],
            countPosition: 0,
            score: 0,
            startShotter: false,
            ID_BOAT: "bs",
            FORM1: document.getElementById("form-1"),
            USER1: document.getElementById("user-1")
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
                // alert("usuarios completos");
                this.espC = "Espectador";
                this.player1 = user1;
                this.player2 = user2;
                const SPAN_PLAYER1 = document.getElementById("spanPlayer1");
                const SPAN_PLAYER2 = document.getElementById("spanPlayer2");
                const INPUT_PLAYER = document.getElementById("user-1");
                const NAME = document.getElementById("inputName");
                const BOAT_ENEMY = document.getElementById("enemy-boat");
                INPUT_PLAYER.placeholder = "";
                INPUT_PLAYER.disabled = true;
                INPUT_PLAYER.style.background = "transparent";
                SPAN_PLAYER1.innerText = this.player1;
                SPAN_PLAYER2.innerText = this.player2;
                SPAN_PLAYER2.style.color = "black";
                NAME.disabled = true;
                NAME.style.background = "transparent";
                NAME.style.border = 0;
                BOAT_ENEMY.style.color = "transparent";
                this.socket.emit("load player", this.espC);
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
                    const POINTS_PLAYER1 = document.getElementById("scorePlayer1");
                    this.score += point;
                    POINTS_PLAYER1.innerText = `${this.score}`;
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
                this.socket.emit("winner", user);
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
                BOAT.className += "bi bi-rocket-takeoff";
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
body {
    display: flex;
    flex-direction: row;
}

#container {
    margin: 10px;
    /* border: 1px solid black; */
}

#spanPlayer2 {
    text-align: center;
    font-style: oblique;
    color: rgba(222, 48, 48, 0.9);
}

#container-Table2>table {
    margin-top: 90px;
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

.table {
    width: 500px;
    height: 450px;
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
    margin: auto;
    width: 80px;
    padding: 5px;
    margin-left: 20px;
    margin-right: 20px;
    color: #4e4e56;
    text-align: center;
}
</style>
