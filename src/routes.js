import UserProfile from "./components/UserProfile.vue";
import Dashboard from "./components/Dash-Board.vue";
import ContactInfo from "./components/Contact-Info.vue";
const routes = [
  {
    path: "/",
    component: UserProfile,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/contact",
    component: ContactInfo,
  },
];
export default routes;