<template>
  <div class="modal fade" id="viewModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Просмотр задачи</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p><strong>Название:</strong> {{ task.title }}</p>
          <p><strong>Описание:</strong> {{ task.description || 'Без описания' }}</p>
          <p><strong>Статус:</strong> {{ statusLabel(task.status) }}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['task']);

const statusLabel = (status) => ({
  pending: 'Ожидание',
  in_progress: 'В процессе',
  done: 'Сделано',
}[status]);
</script>