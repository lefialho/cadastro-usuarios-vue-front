import { createStore } from 'vuex'
import { api } from '@/services'

export default createStore({
  state: {
    strict: true,
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cpf: "",
      pais: "",
      estado: "",
      municipio: "",
      cep: "",
      pis: "",
      rua: "",
      numero: "",
      complemento: "",
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
  },
  actions: {
    getUsuario(context, payload) {
      console.log(context)
      api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATE_LOGIN", true);
        context.commit("UPDATE_USUARIO", response.data);
      });
    },
    criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      return api.post("/usuario", payload);
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        id: "",
        nome: "",
        email: "",
        senha: "",
        cpf: "",
        pais: "",
        estado: "",
        municipio: "",
        cep: "",
        pis: "",
        rua: "",
        numero: "",
        complemento: "",
      });
      context.commit("UPDATE_LOGIN", false);
    }
  },
  modules: {
  },
});
