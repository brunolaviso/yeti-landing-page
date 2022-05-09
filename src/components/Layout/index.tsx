import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className={styles.Container}>
      { children }
    </main>
  )
}