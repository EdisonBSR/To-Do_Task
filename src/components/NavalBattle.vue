<template>
    <div>
        <div id="container">
            <form id="form-1" action="">
                <input id="user-1" class="user" type="text" placeholder="Ingrese su nombre" autofocus />
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
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="01" type="button" value="01"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="02" type="button" value="02"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="03" type="button" value="03"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="04" type="button" value="04"
                                onclick="boatPosition()"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">B</th>
                        <td scope="row">
                            <button class="boat-position" id="10" type="button" value="10"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="11" type="button" value="11"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="12" type="button" value="12"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="13" type="button" value="13"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="14" type="button" value="14"
                                onclick="boatPosition()"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">C</th>
                        <td scope="row">
                            <button class="boat-position" id="20" type="button" value="20"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="21" type="button" value="21"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="22" type="button" value="22"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="23" type="button" value="23"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="24" type="button" value="24"
                                onclick="boatPosition()"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">D</th>
                        <td scope="row" name="1">
                            <button class="boat-position" id="30" type="button" value="30"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="31" type="button" value="31"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="32" type="button" value="32"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="33" type="button" value="33"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="34" type="button" value="34"
                                onclick="boatPosition()"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">E</th>
                        <td scope="row">
                            <button class="boat-position" id="40" type="button" value="40"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="41" type="button" value="41"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="42" type="button" value="42"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="43" type="button" value="43"
                                onclick="boatPosition()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="44" type="button" onclick="boatPosition()"
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
                            <button class="boat-position" id="200" type="button" value="00" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="201" type="button" value="01" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="202" type="button" value="02" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="203" type="button" value="03" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="204" type="button" value="04" onclick="attack()"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">B</th>
                        <td>
                            <button class="boat-position" id="210" type="button" value="10" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="211" type="button" value="11" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="212" type="button" value="12" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="213" type="button" value="13" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="214" type="button" value="14" onclick="attack()"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">C</th>
                        <td>
                            <button class="boat-position" id="220" type="button" value="20" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="221" type="button" value="21" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="222" type="button" value="22" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="223" type="button" value="23" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="224" type="button" value="24" onclick="attack()"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">D</th>
                        <td>
                            <button class="boat-position" id="230" type="button" value="30" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="231" type="button" value="31" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="232" type="button" value="32" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="233" type="button" value="33" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="234" type="button" value="34" onclick="attack()"></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">E</th>
                        <td>
                            <button class="boat-position" id="240" type="button" value="40" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="241" type="button" value="41" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="242" type="button" value="42" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="243" type="button" value="43" onclick="attack()"></button>
                        </td>
                        <td>
                            <button class="boat-position" id="244" type="button" onclick="attack()" value="44"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: "NavalBattle",
    data() {
        return {

        }
    },
    methods: {

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
