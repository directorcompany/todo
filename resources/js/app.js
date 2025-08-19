import { createApp } from 'vue'
import TaskList from './components/TaskList.vue'
import App from './App.vue'

// Bootstrap CSS и JS
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap' // <-- импортируем как объект
window.bootstrap = bootstrap; // <-- делаем глобально доступным

const app = createApp(App)

app.component('task-list', TaskList)
app.mount('#app')