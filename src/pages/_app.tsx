import React from 'react'
import type { AppProps } from 'next/app'
import '../assets/css/styles.css'
import '../assets/css/reset.css'
import styled from 'styled-components'
const tw = require('tailwind.macro')

const WrapComponent = styled.main`
  ${tw`pt-12`}
  font-family: 'Avenir Next', 'Helvetica', 'Hiragino Kaku Gothic ProN';
  background: #ECF1F9;
`
const Title = styled.h1`
  ${tw`text-6xl font-bold  text-center text-gray-900 pb-12`}
`
const Description = styled.p`
  ${tw`text-gray-600 text-center`}
`
const Hr = styled.div`
  ${tw`m-16`}
`

const App = ({
  Component,
  pageProps
}: AppProps) => {
  return (
    <WrapComponent>
      <Hr />
      <Title>Broadcast Watch</Title>
      <Description>早稲田祭2020 配信状態監視画面</Description>
      <Hr />
      <Component {...pageProps} />
    </WrapComponent>
  )
}

export default App