import React from 'react'
import type { AppProps } from 'next/app'
import '../assets/css/styles.css'
import 'loaders.css'
import '../assets/css/reset.css'
import styled from 'styled-components'
import { ButtonComponent } from '../components/Btn'
const tw = require('tailwind.macro')

const WrapComponent = styled.main`
  ${tw`md:px-48 md:pt-36 pt-12`}
  font-family: 'Avenir Next', 'Helvetica', 'Hiragino Kaku Gothic ProN';
  background: #ECF1F9;
`
const Title = styled.h1`
  ${tw`md:text-6xl text-3xl font-bold text-gray-900 pb-12`}
`
const Description = styled.p`
  ${tw`text-gray-600`}
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
      <div className={'flex md:justify-between justify-center'}>
        <div className={'flex flex-col'}>
          <Title>Broadcast Watch</Title>
          <Description>早稲田祭2020 配信状態監視画面</Description>
        </div>
        <ButtonComponent text={'⚙ Youtube Studio'} handleClick={() => window.open('https://studio.youtube.com/', '_blank')} />
      </div>
      <Hr />
      <Component {...pageProps} />
    </WrapComponent>
  )
}

export default App