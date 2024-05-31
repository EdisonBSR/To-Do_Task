<style>
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
    background: #e7edee;
}

#chat {
    width: 100%;
    background: #6a6d6ca8;
    border: 1px solid wheat;
    font-size: 3rem;
    font-family: cursive;
    font-style: italic;
    height: 80px;
    text-align: center;
    color: beige;
    border-radius: 0 0 10px 10px;
}

#form {
    background: rgba(0, 0, 0, 0.15);
    padding: 0.25rem;
    /* display: flex; */
    height: 3rem;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    position: fixed;
    bottom: 0;

}

.input {
    border: none;
    padding: 0 1rem;
    flex-grow: 1;
    border-radius: 2rem;
    padding: 5px;
    justify-content: space-evenly;
}

.input:focus {
    outline: none;
}

#messages,
#usersOnLines {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding: 10px;
}

/* #messages {
    height: 100%;
    background: teal;
} */

.list-user {
    height: max-content;
}

#messages>li {
    padding: 0.5rem 1rem;
    margin-bottom: 10px;
    border: 0.5px solid rgb(0, 0, 0);
    border-radius: 3px 10px 10px 10px;
    justify-items: right;
    width: fit-content;
    background: #47454582;
    color: white;
    box-shadow: 3px 2px 5px 0px rgb(100 99 99 / 52%);
}

#messages>.Mymsg {
    background: #76e88d;
    color: black;
    margin-left: auto;
}

#usersOnLines>li {
    padding: 0.5rem 1rem;
    margin-bottom: 10px;
    background: #80f780;
    border-radius: 10px;
    box-shadow: 3px 2px 5px 0 #22e96f91;
    width: 70%;
    margin-left: 10px;
}

/* #messages>li:last-child {
    margin-bottom: 70px;
} */

.userConnect {
    color: black;
    text-align: left;
    height: 100%;
}

.list-user {
    background: #e3f1fc;
    box-shadow: 5px 1px 34px -11px rgba(105, 135, 132, 1);
}

.list-user>p {
    margin-top: 10px;
    margin-bottom: 1rem;
    text-align: center;
    color: #495057;
    font-size: x-large;
    font-family: math;

}

.row {
    --bs-gutter-x: 0;
    height: 100vh;
}

.row>* {
    padding-right: 0;
    padding-left: 0;
}

#messageWriting {
    color: rgba(255, 255, 255, 0.89);
    opacity: 1;
}

#containerChat {
    margin-bottom: 50px;
    height: 100%;
    background: rgba(3, 180, 180, 0.89);
}
</style>
<template>
    <div class="row">
        <div class="col-6 col-md-4 list-user">
            <p>Usuarios</p>
            <ul id="usersOnLines" class="list-group"></ul>
        </div>
        <div class="col-md-8">
            <div id="chat">SOCKET.IO CHAT</div>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"
                class="scrollspy-example" tabindex="0">
                <div id="containerChat">
                    <ul id="messages">
                        <li v-for="(message, index) in messages" :key=index
                            :class="{ 'Mymsg': message.user == inputUser }">
                            {{ message.user }}: {{ message.msg }}
                        </li>
                    </ul>
                    <p id="messageWriting">
                        {{ messageWriting }}
                    </p>
                </div>

                <form id="form" @submit.prevent="sendMessage">
                    <input class="input" v-model="inputMessage" @keyup="typing" autocomplete="off"
                        placeholder="Escribir mensaje" />
                    <input class="input" v-model="inputUser" @keyup="checkUser" autocomplete="off" placeholder="Usuario"
                        autofocus />
                    <button type="submit" class="btn btn-success">Enviar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';
export default {
    name: "SocketChat",
    data() {
        return {
            socket: io('localhost:3001'),
            inputUser: "",
            inputMessage: "",
            messages: [],
            messageWriting: '',
            usersOnLines: [],
            saveInputUser: '',
            coutKey: 0
        }
    },
    mounted() {
        this.socket.on('users', (userOnLine) => {
            this.usersOnLines = userOnLine;
        });

        this.socket.on('userOffLine', (userOffLine) => {
            this.usersOnLines = this.usersOnLines.filter(user => !userOffLine.includes(user));
        });

        this.socket.on('writing', (userWriting) => {
            if (userWriting.includes(this.inputUser)) {
                userWriting = userWriting.filter(user => user != this.inputUser);
                console.log(userWriting)
            }
            this.messageWriting = userWriting.length > 0 ? `${userWriting.join(" ")} está escribiendo...` : '';
            // window.scrollTo(0, document.body.scrollHeight);

        });

        this.socket.on('chat message', (msg, user,) => {
            if (this.inputUser != "") {
                this.socket.connect();
                this.messages.push({ msg, user });
                window.scrollTo(0, document.body.scrollHeight);
            }
            else {
                this.socket.disconnect();
            }
        });
    },
    methods: {
        checkUser() {
            if (!this.inputUser) {
                this.socket.disconnect();
                //emitir evento users para quitar el nombre del usuario bn desde aca no se puede ver eso :D
            } else {
                this.socket.connect();
                this.socket.emit('users', this.inputUser);
            }
        },
        typing() {
            console.log("escribiendo")
            console.log(this.inputMessage.trim() == "")


            if (this.coutKey == 0 && this.inputMessage.length > 0 && this.inputUser.length > 0) {
                this.socket.emit("writing", this.inputUser);
                this.coutKey = 1;
            } else if (this.inputMessage == "") {
                this.socket.emit("removeUserWriting", this.inputUser);
                this.coutKey = 0;
            }
        },
        sendMessage(e) {
            e.preventDefault();
            if (this.inputMessage != "" && this.inputUser != "") {
                this.socket.emit('chat message', this.inputMessage, this.inputUser);
                this.inputMessage = ""
                console.log("Mensaje vacio")
                console.log(this.inputMessage)
            }

        }
    }
}



</script>
