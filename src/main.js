 
// import amplifyconfig from './amplifyconfiguration.json';

// Amplify.configure(amplifyconfig);

 
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import UserProfile from "./views/UserProfile.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/userprofile", component: UserProfile },
];
// Create the router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");