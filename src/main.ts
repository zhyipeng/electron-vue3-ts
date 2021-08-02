import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// @ts-ignore
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// @ts-ignore
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

import App from './App.vue';
import router from './router/index';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App);
app.use(router);
app.use(ElementPlus, { size: 'small' });
app.use(VMdEditor);
app.mount('#app');
