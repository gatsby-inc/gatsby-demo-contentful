import React from 'react'
import RootElement from './src/components/root-element'

import './src/styles/global.css'

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}

export const onRouteUpdate = ({ location }) => {
  const hash = document.querySelectorAll(`a[href="${location.hash}"]`)[0]
  if (hash) {
    window.scrollTo({
      top: hash.offsetTop,
    })
  }
  return true
}
