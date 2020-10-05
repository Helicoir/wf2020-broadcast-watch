import React, { ReactNode } from 'react'
import styled from 'styled-components'
const tw = require('tailwind.macro')

type Props = {
  children?: ReactNode
  title?: string
}

const StyledLayout = styled.div`
  ${tw`flex flex-wrap justify-between m-auto`}
  max-width: 1200px;
  min-height: 100vh;
`

const ContentArea = styled.div`
  ${tw`flex flex-col`}
`

const Layout = ({ children }: Props) => {
  return (
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
    <ContentArea>
      {children}
    </ContentArea>
  </StyledLayout>
)}

export default Layout
