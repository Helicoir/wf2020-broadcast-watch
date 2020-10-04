import React, { ReactNode } from 'react'
import styled from 'styled-components'
const tw = require('tailwind.macro')

type Props = {
  children?: ReactNode
  title?: string
}

const StyledLayout = styled.div`
  margin: 0 auto;
  ${tw`flex flex-wrap justify-around`}
  max-width: 1200px;
  min-height: 100vh;
`

const Layout = ({ children }: Props) => (
  <StyledLayout>
    {/* <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header> */}
    <hr/>
    {children}
    <footer>
      <hr />
      {/* <span>I'm here to stay (Footer)</span> */}
    </footer>
  </StyledLayout>
)

export default Layout
