import React, { ReactNode } from 'react'
import styled, {css} from 'styled-components'
const tw = require('tailwind.macro')

type Props = {
  children?: ReactNode
  title?: string
}

const StyledLayout = styled.div`
  ${tw`
    flex flex-wrap justify-between
    m-auto
    md:max-w-8xl max-w-full`
  }
  min-height: 100vh;
`

const ContentArea = styled.div`
  ${tw`flex md:pl-4 flex-wrap content-start`}
  ${() => css`
    @media (max-width: 500px) {
      justify-content: center;
    }
  `}
`

const Layout = ({ children }: Props) => {
  return (
    <StyledLayout>
      <ContentArea>
        {children}
      </ContentArea>
    </StyledLayout>
  )
}

export default Layout
