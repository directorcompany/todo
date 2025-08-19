<template>
  <ul class="list-group shadow-sm">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <div>
        <strong>{{ task.title }}</strong> — {{ task.description || 'Без описания' }}
        <span class="badge ms-2" :class="'bg-' + statusColor(task.status)">
          {{ statusLabel(task.status) }}
        </span>
      </div>
      <div>
        <button class="btn btn-sm btn-info me-2" @click="$emit('view', task)">👁</button>
        <button class="btn btn-sm btn-secondary me-2" @click="$emit('edit', task)">✏️</button>
        <button class="btn btn-sm btn-danger" @click="$emit('delete', task.id)">🗑️</button>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps(['tasks']);

const statusColor = (status) => ({
  pending: 'secondary',
  in_progress: 'warning',
  done: 'success',
}[status]);

const statusLabel = (status) => ({
  pending: 'Ожидание',
  in_progress: 'В процессе',
  done: 'Сделано',
}[status]);
</script>