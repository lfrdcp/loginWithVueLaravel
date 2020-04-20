<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped dark color="#f95959">
            <v-list dense>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>perm_identity</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title
                            >Hola, {{ currentUser.name }}</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/dashboard" link>
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/inventory" link>
                    <v-list-item-action>
                        <i class="material-icons">storefront</i>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Inventario</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link @click="logout">
                    <v-list-item-action>
                        <v-icon>mdi-power</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Cerrar sesion</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left color="#233142" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Punto de venta boxcode</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container class="fill-height" fluid>
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer app>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null
    }),
    computed: {
        currentUser: {
            get() {
                return this.$store.state.currentUser.user;
            }
        }
    },
    methods: {
        logout() {
            this.$store.dispatch("currentUser/logoutUser");
        }
    },
    created() {
        if (localStorage.hasOwnProperty("blog_token")) {
            //this.$vuetify.theme.dark = true;
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + localStorage.getItem("blog_token");
            this.$store.dispatch("currentUser/getUser");
        } else {
            window.location.replace("/");
        }
    }
};
</script>
