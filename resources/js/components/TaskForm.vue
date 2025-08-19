<template>
  <form @submit.prevent="createTask" class="card p-4 mb-4 shadow-sm">
    <div class="row g-2 align-items-end">
      <div class="col-md-4">
        <label class="form-label">Название</label>
        <input v-model="task.title" type="text" class="form-control" required />
      </div>
      <div class="col-md-4">
        <label class="form-label">Описание</label>
        <input v-model="task.description" type="text" class="form-control" />
      </div>
      <div class="col-md-2">
        <label class="form-label">Статус</label>
        <select v-model="task.status" class="form-select">
          <option value="pending">Ожидание</option>
          <option value="in_progress">В процессе</option>
          <option value="done">Сделано</option>
        </select>
      </div>
      <div class="col-md-2">
        <button type="submit" class="btn btn-primary w-100">➕ Добавить</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, defineEmits } from 'vue';

const emit = defineEmits(['task-created']);

const task = reactive({
  title: '',
  description: '',
  status: 'pending',
});

const createTask = async () => {
  await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  emit('task-created');
  task.title = '';
  task.description = '';
  task.status = 'pending';
};
</script>