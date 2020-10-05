import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Video } from '../interfaces'
import { getVideoListBySheet } from '../utils/youtube'
import dayjs from 'dayjs'
const tw = require('tailwind.macro')

const Headline = styled.h2`
  ${tw`text-lg font-bold pt-1`}
`
const Description = styled.p`
  ${tw`text-sm text-gray-600`}
`
const StatementBox = styled.span`
  ${tw`text-sm font-bold text-white rounded p-1 px-2`}
`
const Datetime = styled.p`
  ${tw`text-sm text-gray-600`}
`
const VideoContainer = styled.div`
  ${tw`
  flex
  min-w-lg
  max-w-2xl
  rounded
  overflow-hidden
  shadow-xl
  bg-white
  m-4
  border
  border-gray-200
  `};
`
const VideoContent = styled.div`
  ${tw`p-6`}
`

const IndexPage: React.FC = () => {
  const [data, setData] = useState<Video[]>([])
  useEffect(() => {
    getVideoListBySheet().then(res => {
      setData(res)
    })
  }, [])
  const statementbg = (status: string) => status === 'live' ? 'green' : status === 'none' ? '#bbb' : 'black'
  const statementtext = (status: string) => status === 'live' ? 'ON AIR' : status === 'none' ? 'CLOSED' : 'RESERVED'
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {data && data.map(datum => (
        <VideoContainer key={datum.meta.id} style={{ backgroundColor: datum.video.liveBroadcastContent == 'live' ? '#D7F1D5' : 'white' }}>
          <img src={datum.video.thumbnails.high.url} width="200" alt="サムネイル" />
          <VideoContent>
            <StatementBox style={{ backgroundColor: statementbg(datum.video.liveBroadcastContent) }}>{statementtext(datum.video.liveBroadcastContent)}</StatementBox>
            <Headline>{datum.video.title}</Headline>
            <Description>{datum.meta.title}</Description>
            <Datetime>開始時刻: {dayjs(datum.video.scheduledStartTime).format('D日 HH:MM')}</Datetime>
          </VideoContent>
        </VideoContainer>
      ))}
    </Layout>
  )
}

export default IndexPage
