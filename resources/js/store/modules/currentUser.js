import axios from "axios";

const state = {
    user: {},
    loginMessage: ""
};

const getters = {};

const actions = {
    getUser({ commit }) {
        axios.get("api/user/current").then(response => {
            commit("setUser", response.data);
        });
    },

    loginUser({ commit }, user) {
        axios
            .post("api/user/login", {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem(
                        "blog_token",
                        response.data.access_token
                    );
                    window.location.replace("/app");
                } else {
                    //se envie el error a la vista
                    commit("setLoginMessage", response.data.message);
                }
            })
            .catch(error => {
                console.log(error);
            });
    },

    logoutUser() {
        localStorage.removeItem("blog_token");
        window.location.replace("/inicio");
    }
};

const mutations = {
    setUser(state, data) {
        state.user = data;
    },
    setLoginMessage(state, data) {
        state.loginMessage = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
