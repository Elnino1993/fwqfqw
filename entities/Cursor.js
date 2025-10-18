import Transform from "../components/Transform"
import styles from "../styles/Cursor.module.css"

const Cursor = ({ width, height }) => {
  const innerWidth = width / 6
  const innerHeight = height / 6

  return (
    <div className={styles.cursorOutter} style={{ width, height }}>
      <div className={styles.cursorInner} style={{ width, height }} />
    </div>
  )
}

export default Transform(Cursor)
