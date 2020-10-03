import Axios, { AxiosResponse } from 'axios'
import { Program } from '../interfaces'
import { getProgramData } from './programs'

const APIKEY = process.env.YOUTUBE_API_API_KEY
const BaseURL = 'https://www.googleapis.com/youtube/v3'

const getVideoList = (items: Program[]) => {
  if (!APIKEY) {
    window.alert('error has occured')
    return
  }
  const params = new URLSearchParams()
  params.append('part', 'snippet')
  params.append('part', 'liveStreamingDetails')
  params.append('key', APIKEY)
  items
    .map(item => item.videoID)
    .forEach(videoID => params.append('id', videoID))
  return Axios.get(`${BaseURL}/videos`, { params }).then((res: AxiosResponse<Record<string, any>>) => {
    const data = res.data
    return data.items.map((video: any, index: number) => {
      return {
        video: {...video.snippet, ...video.liveStreamingDetails},
        meta: items[index]
      }
    })
  })
}

export const getVideoListBySheet = () => {
  return getProgramData.then(res => {
    return getVideoList(res)
  })
}