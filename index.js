const app = {
  data () {
    return {
      tasks: [],
      newTask: '',
      editedTask: '',
      editIndex: ''
    }
  },
  mounted () {
    if (localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      } catch {
        localStorage.removeItem('tasks')
      }
    }
  },
  methods: {
    addTask () {
      if (this.newTask) {
        this.tasks.push(this.newTask)
        this.newTask = ''
        this.saveTasks()
      }
    },
    editTask (task, key) {
      this.editIndex = key
      this.editedTask = task
    },
    removeTask (key) {
      this.tasks.splice(key, 1)
      this.saveTasks()
    },
    updateTask (key) {
      this.tasks[key] = this.editedTask
      this.saveTasks()
      this.editedTask = ''
      this.editIndex = ''
    },
    saveTasks () {
      const parsed = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', parsed)
    }
  }
}
// eslint-disable-next-line no-undef
Vue.createApp(app).mount('#app')
