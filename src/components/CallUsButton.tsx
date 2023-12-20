
import React from 'react'

type CallUsButtonProps = {
    className?: string
}

export default function CallUsButton({className}: CallUsButtonProps) {
  return (
    <a   href="tel:01214565566"
    type="button" className={`call-us-${className}`}>01214565566</a>
    )
}