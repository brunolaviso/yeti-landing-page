import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <section>
        <p>
          <strong>Endereço</strong><br />
          Rua Alfredo Benzoni, 3 <br />
          Iguatemi - Ribeirão Preto <br />
          14091-520
        </p>
        <p>
          <strong>Contato</strong><br />
          vinicius.felix@yeticomunicacao.com <br />
          patricia.ramos@yeticomunicacao.com <br />
          (16) 99298-3150 <br />
          (14) 99746-3329
        </p>
        <div>
          <img src="./assets/logo.svg" alt="" /> <br />
          <span>© 2022 yeticomunicacao.com</span>
        </div>
      </section>
      <div>
        <img src="./assets/pe-grande.svg" alt="" />
        <span>Termos e condições | Política de privacidade</span>
        <span>Todos os direitos reservados</span>
      </div>
    </footer>
  )
}