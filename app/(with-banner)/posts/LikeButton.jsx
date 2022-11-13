'use client'

import React, { useState } from 'react'

export default function LikeButton({ id }) {
  const [like, setLike] = useState(false)

  return <button onClick={() => setLike(!like)}>{like ? '💛' : '♡'}</button>
}
