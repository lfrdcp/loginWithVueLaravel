<template>
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-carousel hide-delimiters>
                                <v-carousel-item
                                    v-for="(item, i) in items"
                                    :key="i"
                                    :src="item.src"
                                ></v-carousel-item>
                            </v-carousel>
                        </v-card>
                    </v-col>

                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-app-bar dark color="blue lighten-1">
                                <v-toolbar-title
                                    >Punto de venta boxcode</v-toolbar-title
                                >

                                <v-spacer></v-spacer>

                                <v-btn icon>
                                    <i class="material-icons">live_help </i>
                                </v-btn>
                            </v-app-bar>

                             <v-content>
                                 <v-alert
                                     border="bottom"
                                     colored-border
                                     type="warning"
                                     elevation="2"
                                     v-if="message"
                                 >

                                    {{message}}
                                </v-alert>
                            </v-content>


                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        label="Correo electrónico"
                                        name="login"
                                        prepend-icon="person"
                                        type="text"
                                        v-model="user.email"
                                    />

                                    <v-text-field
                                        id="password"
                                        label="Contraseña"
                                        name="password"
                                        prepend-icon="lock"
                                        type="password"
                                        v-model="user.password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn
                                    color="blue lighten-1"
                                    type="submit"
                                    @click="login"
                                    dark
                                    >Iniciar sesion</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-footer padless>
            <v-col class="text-center" cols="12">
                2020 - <strong>Boxcode</strong>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        user: {
            email: "",
            password: ""
        },
        error: "",
        items: [
            {
                src:
                    "https://instagram.fcvj2-1.fna.fbcdn.net/v/t51.2885-15/e35/92876192_100526941612370_7735597476566168180_n.jpg?_nc_ht=instagram.fcvj2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=nuWfgn7U8aMAX8nj7-F&oh=72c7f5d549fe42e6032ad8b821ea69e6&oe=5EC716CD"
            },
            {
                src:
                    "https://instagram.fcvj2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/92746551_1477096919129952_8528186027339900299_n.jpg?_nc_ht=instagram.fcvj2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=vxBUg7yMD9UAX9bSeqa&oh=5364bfa1f86f8356c36ad7356ec0dff4&oe=5EC5BE8B"
            },
            {
                src:
                    "https://instagram.fcvj2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/92768330_1137799609886277_2890043341983534264_n.jpg?_nc_ht=instagram.fcvj2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=NkLvcL9WpAgAX8hXWro&oh=2b3185a46fca3cafda482b916c5b5d13&oe=5EC4B260"
            }
        ],
        icons: [
            "fa fa-facebook-square",
            "fab fa-twitter",
            "fab fa-google-plus",
            "fab fa-linkedin",
            "fab fa-instagram"
        ]
    }),
    computed: {
        message: {
            get() {
                return this.$store.state.currentUser.loginMessage;
            }
        },
    },
    created() {},
    methods: {
        login() {
            this.$store.dispatch("currentUser/loginUser", this.user);
        }
    }
};
</script>
