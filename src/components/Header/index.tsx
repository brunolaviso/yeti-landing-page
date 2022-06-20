import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.Header}>
      <ul>
        <li><a href="#about">A Yeti</a></li>
        <li><a href="#what-we-do">O Que Fazemos</a></li>
        <li><a href="#contact">Contato</a></li>
        <li>Maquina de Criativos</li>
      </ul>
    </header>
  )
}