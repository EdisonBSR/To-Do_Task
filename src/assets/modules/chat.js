const chatModule = {
  state: {
    chat: [],
    user: [],
  },
  //Emitir acciones desde la app al servidor de Node.js
  actions: {
    Socket_chat_message: ({ rootState }, user, msg) => {
      rootState.io.emit("chat message", user, msg);
    },
  },
  //mutaciones, seran ejecutas por Node.js
  mutations: {},
};
export default chatModule;
