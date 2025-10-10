import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Coderhouse - Curso de React JS - 2025</p>
      <a href="https://www.coderhouse.com" target="_blank" rel="noopener noreferrer">
        www.coderhouse.com
      </a>
    </footer>
  )
}