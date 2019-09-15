import Vue from "vue";
import { InertiaApp } from "@inertiajs/inertia-vue";
import VueSnackbar from "vue-snack";
import VueMobileDetection from "vue-mobile-detection";

Vue.use(InertiaApp);
Vue.use(VueSnackbar, { close: true, position: "bottom-left" });
Vue.use(VueMobileDetection);

const app = document.getElementById("app");

new Vue({
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name =>
                    import(`@/Pages/${name}`).then(module => module.default)
            }
        })
}).$mount(app);
