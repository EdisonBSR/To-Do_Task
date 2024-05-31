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
                <ul id="messages"></ul>
                <p id="messageWriting"></p>
                <form id="form" action="">
                    <input class="input" id="input" autocomplete="off" placeholder="Escribir mensaje" />
                    <input class="input" id="inputUser" autocomplete="off" placeholder="Usuario" autofocus />
                    <button type="submit" class="btn btn-success">Enviar</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PruebaChat"
}
</script>
<style scoped></style>