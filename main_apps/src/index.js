import React from 'react'
import { createRoot } from 'react-dom/client'

import Router from './router'

import microApp from '@micro-zoe/micro-app'

microApp.start({
  lifeCycles: {
    created(e) {
      console.log('基座被创建')
    }
  }
})

createRoot(document.querySelector('#root'))
.render(<Router />)

microApp.setData('react', { msg: '发送给react子应用的数据' })