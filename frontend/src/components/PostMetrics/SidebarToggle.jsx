import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

export default function SidebarToggle() {
    const [isOpen, setIsOpen] = React.useState(true)


    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div id="toggle">
        <AiOutlineMenu /></div>
  )
}
