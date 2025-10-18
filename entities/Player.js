import React from "react"
import styles from "../styles/Player.module.css"

export default class Player extends React.Component {
  render() {
    const { direction = "down" } = this.props

    return (
      <div className={styles.player} data-direction={direction}>
        <div className={styles.sprite}>
          <div className={styles.head}></div>
          <div className={styles.body}></div>
        </div>
      </div>
    )
  }
}
