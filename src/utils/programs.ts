import Axios from "axios"
import { Program } from '../interfaces'
export const getProgramData: Promise<Program[]> = Axios.get('https://script.google.com/macros/s/AKfycbw7LQpWB4NefQNPgjL6O1RIt184svKCD-ur5tiPa_CCCndL-VyD/exec').then((res) => {
  return res.data
})
