import React, { useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div 
    className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle </button>
    </div>
  )
}
