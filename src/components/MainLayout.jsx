import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div>MainLayout
      <header />
      {children}
      <footer />
    </div>
  )
}

export default MainLayout