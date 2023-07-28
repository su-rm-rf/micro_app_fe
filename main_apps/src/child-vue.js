import React from 'react'

export default () => {
  return (
    <div>
      <h4>子应用vue</h4>
      <micro-app name="vue" url="http://localhost:9100/" baseroute="/child-vue"></micro-app>
    </div>
  )
}