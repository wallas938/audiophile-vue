import { createApp } from 'vue'
import App from './App.vue'

/** Sass files import */
import './sass/_reset.scss';
import './sass/_global.scss';
import './sass/_mixins.scss';
import './sass/_helpers.scss';

import VButton from './components/ui/VButton';
import ShowcaseItem from './components/ui/ShowcaseItem';
import CategoryItem from './components/ui/CategoryItem';

const app = createApp(App);

app.component("v-button", VButton);
app.component("showcase-item", ShowcaseItem);
app.component("category-item", CategoryItem);

app.mount('#app');
