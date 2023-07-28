import React from 'react'
import { createRoot } from 'react-dom/client'

import microApp from '@micro-zoe/micro-app'
import Router from './router'

// microApp.start()

createRoot(document.querySelector('#root'))
.render(<Router />)


window.addEventListener('mount', function() {
  console.log('子应用被挂载')
})
window.addEventListener('mount/unmount', function() {
  console.log('子应用被卸载')
})

setTimeout(() => {
  const msg = microApp.getData()
  console.log(msg)
}, 1000)