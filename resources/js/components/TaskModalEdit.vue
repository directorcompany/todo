<template>
  <div class="modal fade" id="editModal" tabindex="-1">
    <div class="modal-dialog">
      <form @submit.prevent="updateTask" class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Редактировать задачу</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <input v-model="task.title" class="form-control mb-2" placeholder="Название" />
          <input v-model="task.description" class="form-control mb-2" placeholder="Описание" />
          <select v-model="task.status" class="form-select">
            <option value="pending">Ожидание</option>
            <option value="in_progress">В процессе</option>
            <option value="done">Сделано</option>
          </select>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" type="submit">💾 Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';
import * as bootstrap from 'bootstrap';
const props = defineProps(['taskToEdit']);
const emit = defineEmits(['updated']);

const task = reactive({ ...props.taskToEdit });

watch(() => props.taskToEdit, (newVal) => {
  Object.assign(task, newVal);
});

const updateTask = async () => {
  await fetch(`/api/tasks/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  emit('updated');
  bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
};
</script>
