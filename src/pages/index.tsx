import { Footer } from "../components/Footer"
import { Form } from "../components/Form"
import { Layout } from "../components/Layout"
import { data } from '../shared/data/what-we-do'
import { IWhatWeDo } from '../shared/types/what-we-do'

import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
      <section className={styles.Hero}>
        <img src="assets/bg-train.svg" alt="" />
      </section>
      <Layout>
        <section className={styles.About}>
          <h2>A Yeti</h2>
          <div>
            <img src="assets/divider.svg" alt="Divisor" />
          </div>
          <p>
            Somos a Yeti, uma Agência de Marketing 360º criada por 
            Growth Hackers. Somos especializados na produção de criativos
            que convertem! Criamos soluções disruptivas e personalizadas para
            nossos clientes e aceleramos o seu negócio!
            Be a legend, be remarkable. Be Yeti!
          </p>
          <div>
            <img className={styles.HorizontalFlip} src="assets/divider.svg" alt="Divisor" />
          </div>
        </section>
        <section className={styles.WhatWeDo}>
          <div className={styles.TitleWraper}>
            <img src="assets/tree.svg" alt="Icone de árvore" />
            <h2>O Que Fazemos</h2>
            <img src="assets/tree.svg" alt="Icone de árvore" />
          </div>
          <ul>
            {data.map(({ id, title, content }: IWhatWeDo) => (
              <li key={id}>
                <h3>{title}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
      <Form />
      <Footer />
    </>
  )
}

