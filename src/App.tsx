import styles from './app.module.css'
import Icon from './assets/check.png'

export function App() {
  return (
    <>
      <h1 className={styles.h1}>Hello World2</h1>
      <span className={styles.span}>{new Date().toDateString()}</span>
      <img src={Icon} alt="h" />
    </>
  )
}
