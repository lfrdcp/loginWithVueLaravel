<template>
    <v-app id="inspire">
        <v-content>
            <v-app-bar color="#f95959" dark app>
                <template v-slot:extension>
                    <v-tabs align-with-title class="overline">
                        <v-tab
                            to="/login"
                            @click="login = false"
                            class="font-weight-light"
                            >Iniciar sesion</v-tab
                        >
                        <v-tab
                            to="/contactanos"
                            class="font-weight-light"
                            @click="login = false"
                            >Contactanos</v-tab
                        >
                        <v-tab class="font-weight-light">Nosotros</v-tab>
                    </v-tabs>
                </template>
            </v-app-bar>

            <v-container>
                <template v-if="login">
                    <login />
                </template>
                <router-view />
            </v-container>
        </v-content>

        <v-footer padless>
            <v-col class="text-center" cols="12">
                2020 -
                <strong>Boxcode</strong>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: "my-component",
    data: () => ({
        login: false
    }),

    created() {
        console.log(window.location.href);
        if (window.location.href === "http://127.0.0.1:8000/inicio#/") {
            this.login = true;
        }
    }
};
</script>
