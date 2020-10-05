import React from 'react'
import type { AppProps } from 'next/app'
import '~/src/assets/css/styles.css'
import styled from 'styled-components'
const tw = require('tailwind.macro')

const Title = styled.h1`
  ${tw`text-6xl font-bold  text-center text-gray-900`}
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
    <>
      <Hr />
      <Title>Broadcast Watch</Title>
      <Description>早稲田祭2020 配信状態監視画面</Description>
      <Hr />
      <Component {...pageProps} />
    </>
  )
}

export default App