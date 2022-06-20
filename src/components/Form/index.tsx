import styles from './styles.module.scss'

export function Form() {
  return (
    <section className={styles.FormSection}>
      <img src="./assets/break-section.svg" alt="" />
        <div>
          <h2>O que vamos criar hoje?</h2>
          <h3>Entre em contato</h3>
          <form>
            <input placeholder="Nome completo" type="text" />
            <input placeholder="E-mail" type="text" />
            <input placeholder="Telefone" type="text" />
            <textarea placeholder="Mensagem" />

            <button type="submit">Enviar</button>
          </form>
        </div>
      <img className={styles.LastImage} src="./assets/break-section.svg" alt="" />
    </section>
  )
}