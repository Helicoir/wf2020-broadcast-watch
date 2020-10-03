// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Program = {
  title: string
  id: string
  videoID: string
  day: 0 | 1 | 2
}

type Thumbnail = {
  url: string
  width: number
  height: number
}

export type VideoResource = {
  categoryID: string
  channelID: string
  channelTitle: string
  description: string
  liveBroadcastContent: 'live' | 'upcoming' | 'none'
  localized: {
    title: string
    description: string
  }
  published: string
  thumbnails: {
    default: Thumbnail
    high: Thumbnail
    maxres: Thumbnail
    medium: Thumbnail
    standard: Thumbnail
  }
  title: string
  actualStartTime: string
  scheduledStartTime: string
  concurrentViewers: string
  activeLiveChatId: string
}

export type Video = {
  video: VideoResource
  meta: Program
}