
import React from 'react'

type CallUsButtonProps = {
    className?: string
}

export default function CallUsButton({className}: CallUsButtonProps) {
  return (
    <button type="button" className={`call-us-${className}`}>01214565566</button>
    )
}