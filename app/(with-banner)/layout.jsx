import React from 'react'

export default function PostsLayout({ children }) {
  return (
    <div>
      <marquee
        behavior='scroll'
        direction='left'
        style={{ background: 'white', color: 'purple', padding: '4px' }}
      >
        este es un banner patrocinado
      </marquee>
      {children}
    </div>
  )
}
