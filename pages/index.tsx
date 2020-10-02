import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Program } from '../interfaces'
import { getProgramData } from '../utils/programs'

const IndexPage: React.FC = () => {
  const [data, setData] = useState<Program[]>([])
  useEffect(() => {
    getProgramData.then(res => setData(res))
  })
  console.log(data)
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      {data && data.map(datum => (
        <p>{datum.name}</p>
      ))}
    </Layout>
  )
}

export default IndexPage
