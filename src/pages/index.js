import * as styles from './index.module.scss';
import * as React from "react"
import App from "../components/App";

const IndexPage = () => {
  return (
    <div className={styles.wrapper}>
      <App />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
