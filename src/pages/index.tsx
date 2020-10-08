import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Video } from '../interfaces'
import { getVideoListBySheet } from '../utils/youtube'
import dayjs from 'dayjs'
const tw = require('tailwind.macro')

const Headline = styled.p`
  ${tw`text-xs font-bold pt-4 pl-0 pb-1`}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
// const Description = styled.p`
//   ${tw`text-xs text-gray-600 p-1 pl-0`}
// `
const StatementBox = styled.span`
  ${tw`text-xs font-bold text-white rounded px-2 py-1`}
`
const Datetime = styled.p`
  ${tw`text-xs text-gray-600 p-1 pl-0`}
`
const VideoContainer = styled.a`
  display: block;
  ${tw`
  flex
  rounded
  overflow-hidden
  shadow-xl
  bg-white
  m-4
  border
  border-gray-200
  no-underline
  `};
  width: 300px;
  height: 90px;
`
const VideoContent = styled.div`
  ${tw`p-3 pl-5 w-2/3`}
`

const IndexPage: React.FC = React.memo(() => {
  const [data, setData] = useState<Video[]>([])
  const [reloadCount, setReloadCount] = useState<number>(0)
  const statementbg = (status: string) => status === 'live' ? 'green' : status === 'none' ? '#bbb' : 'black'
  const statementtext = (status: string) => status === 'live' ? 'ON AIR' : status === 'none' ? 'CLOSED' : 'RESERVED'
  const youtubeURL = (videoID: string) => 'https://youtube.com/watch?v=' + videoID
  useEffect(() => {
    getVideoListBySheet().then(res => {
      setData(res)
      setTimeout(() => setReloadCount(reloadCount + 1), 10000)
    })
  }, [reloadCount])
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {data[0] && data.map(datum => (
        <VideoContainer key={datum.meta.id} style={{ backgroundColor: datum.video.liveBroadcastContent === 'live' ? '#D7F1D5' : 'white' }} href={youtubeURL(datum.meta.videoID)} target="_blank">
          <img className="test" src={datum.video.thumbnails.high.url} width="90" height="90" alt="サムネイル" />
          <VideoContent>
            <StatementBox style={{ backgroundColor: statementbg(datum.video.liveBroadcastContent) }}>{statementtext(datum.video.liveBroadcastContent)}</StatementBox>
            <Headline>{datum.video.title}</Headline>
            <Datetime>開始時刻: {dayjs(datum.video.scheduledStartTime).format('D日 HH:MM')}</Datetime>
          </VideoContent>
        </VideoContainer>
      ))}
      {!data[0] && <div className="loader-inner ball-pulse"><div className={'bg-gray-600'} /><div className={'bg-gray-600'} /><div className={'bg-gray-600'} /></div>}
    </Layout>
  )
})

export default IndexPage
