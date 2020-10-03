import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Video } from '../interfaces'
import { getVideoListBySheet } from '../utils/youtube'

const IndexPage: React.FC = () => {
  const [data, setData] = useState<Video[]>([])
  useEffect(() => {
    getVideoListBySheet().then(res => {
      setData(res)
    })
  }, [])
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {data && data.map(datum => (
        <div key={datum.meta.id}>
          <p>name: {datum.meta.title}</p>
          <p>配信タイトル: {datum.video.title}</p>
          <img src={datum.video.thumbnails.default.url} alt="サムネイル"/>
          <span>{datum.video.liveBroadcastContent === 'live' ? '配信中' : '終了 or 予約'}</span>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
