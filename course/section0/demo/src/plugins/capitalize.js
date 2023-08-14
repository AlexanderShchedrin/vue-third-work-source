export default {
  install (app, options) {
    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    /* Добавляем метод глобально во всё приложение */
    app.config.globalProperties.$capitalize = capitalize
  }
}
