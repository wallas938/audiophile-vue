import { createApp } from 'vue'
import App from './App.vue'

/** Sass files import */
import './sass/_reset.scss';
import './sass/_global.scss';
import './sass/_mixins.scss';
import './sass/_helpers.scss';

import router from './router';

import store from './store/index';

import VButton from './components/ui/shared/VButton';
import WhoWeAre from './components/ui/shared/WhoWeAre';
import CategoryNav from './components/ui/shared/CategoryNav';
import CartItem from './components/ui/shared/CartItem';
import TheFooter from './components/layout/TheFooter';

const app = createApp(App);

app.component("v-button", VButton);
app.component("who-we-are", WhoWeAre);
app.component("category-nav", CategoryNav);
app.component("the-footer", TheFooter);
app.component("cart-item", CartItem);

app.use(router);
app.use(store);

app.mount('#app');
