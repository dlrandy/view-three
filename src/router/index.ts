import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home.vue';
import Todo from '../pages/todo.vue';
import TodoComposition from '../pages/todo-composition.vue';
import About from '../pages/about.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo,
    },
    {
        path: '/todoComposition',
        name: 'TodoComposition',
        component: TodoComposition,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;