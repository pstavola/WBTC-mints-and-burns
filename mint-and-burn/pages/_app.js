/* pages/__app.js */
import { css } from '@emotion/css'
import 'easymde/dist/easymde.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className={nav}>
        <div className={header}>
          <img
            src='/logo.svg'
            alt="React Logo"
            style={{ width: '50px' }}
          />
          <div className={titleContainer}>
            <h2 className={title}>WBTC Mint and Burn</h2>
            <p className={description}>The last 20 WBTC mint and burn requests</p>
          </div>
        </div>
      </nav>
      <div className={container}>
        <h2 className="text-2xl font-bold pb-2">Mint events</h2>
          <Component {...pageProps}/>
      </div>
    </div>
  )
}

const container = css`
  padding: 40px;
`

const nav = css`
  background-color: white;
`

const header = css`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, .075);
  padding: 20px 30px;
`

const description = css`
  margin: 0;
  color: #999999;
`

const titleContainer = css`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`

const title = css`
  margin-left: 30px;
  font-weight: 500;
  margin: 0;
`

export default MyApp