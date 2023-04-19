import Vue from 'vue'

Vue.filter('formatFullDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
})

Vue.filter('date', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
      
    month: 'short',
    day: '2-digit',
    year: 'numeric',

  })
})

Vue.filter('formatDay', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
      
    day: '2-digit',

  })
})

Vue.filter('formatMonth', (value) => {
    const date = new Date(value)
    return date.toLocaleString(['en-US'], {
        
        month: 'short',

    })
  })