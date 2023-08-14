<template>
  <app-layout>
    <router-view/>
  </app-layout>
</template>
<script setup>
import { AppLayout } from './layouts'
import { useTasksStore, useColumnsStore, useUsersStore, useCommentsStore } from './stores'

// Определяем хранилища
const tasksStore = useTasksStore()
const usersStore = useUsersStore()
const columnsStore = useColumnsStore()
const commentsStore = useCommentsStore()

// Загрузка первоначальных данных
// Загружаем задачи
tasksStore.fetchTasks()
// Загружаем пользователей
usersStore.fetchUsers()
// Загружаем колонки
columnsStore.fetchColumns()
// Загружаем комментарии
void commentsStore.fetchComments()

</script>

<style lang="scss" scoped>
.app_layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex-grow: 1;
}
</style>
