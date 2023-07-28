import React from 'react'
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

export default () => {
  return (
    <div>
      <h4>子应用react</h4>
      <micro-app name="react" url="http://localhost:9200/" baseroute="/child-react"
        onCreated={() => console.log('子应用react被创建')}
        onMounted={() => console.log('子应用react被渲染完成')}
      ></micro-app>
    </div>
  )
}