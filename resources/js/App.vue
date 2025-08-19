<template>
  <div class="container py-5">
    <h1 class="text-center mb-4">📝 To-Do List</h1>

    <TaskForm @task-created="fetchTasks" />
    <TaskList
      :tasks="tasks"
      @delete="deleteTask"
      @edit="startEdit"
      @view="startView"
    />

    <TaskModalView :task="selectedTask" />
    <TaskModalEdit :task-to-edit="selectedTask" @updated="fetchTasks" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import TaskModalView from './components/TaskModalView.vue';
import TaskModalEdit from './components/TaskModalEdit.vue';
import * as bootstrap from 'bootstrap';


const tasks = ref([]);
const selectedTask = ref({});

const fetchTasks = async () => {
  const res = await fetch('/api/tasks');
  tasks.value = await res.json();
};

const deleteTask = async (id) => {
  if (!confirm('Удалить задачу?')) return;
  await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
  fetchTasks();
};

const startEdit = (task) => {
  selectedTask.value = { ...task };
  new bootstrap.Modal(document.getElementById('editModal')).show();
};

const startView = (task) => {
  selectedTask.value = { ...task };
  new bootstrap.Modal(document.getElementById('viewModal')).show();
};

onMounted(fetchTasks);
</script>