import { createApp } from 'vue'
import App from './App.vue'

/** Sass files import */
import './sass/_reset.scss';
import './sass/_global.scss';
import './sass/_mixins.scss';
import './sass/_helpers.scss';

import VButton from './components/ui/shared/VButton';
import ShowcaseItem from './components/ui/shared/ShowcaseItem';
import CategoryNavItem from './components/ui/shared/CategoryNavItem';

const app = createApp(App);

app.component("v-button", VButton);
app.component("showcase-item", ShowcaseItem);
app.component("category-nav-item", CategoryNavItem);

app.mount('#app');
