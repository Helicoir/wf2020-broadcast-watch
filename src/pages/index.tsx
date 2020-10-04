import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Video } from '../interfaces'
import { getVideoListBySheet } from '../utils/youtube'
const tw = require('tailwind.macro')

const Text = styled.p`
  color: red;
`
const VideoContainer = styled.div`
  ${tw`flex`};
`

const IndexPage: React.FC = (props) => {
  console.log(props)
  const [data, setData] = useState<Video[]>([])
  useEffect(() => {
    getVideoListBySheet().then(res => {
      setData(res)
    })
  }, [])
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {data && data.map(datum => (
        <VideoContainer key={datum.meta.id}>
          <Text>name: {datum.meta.title}</Text>
          <p>配信タイトル: {datum.video.title}</p>
          <img src={datum.video.thumbnails.default.url} alt="サムネイル" />
          <span>{datum.video.liveBroadcastContent === 'live' ? '配信中' : '終了 or 予約'}</span>
        </VideoContainer>
      ))}
    </Layout>
  )
}

export default IndexPage
