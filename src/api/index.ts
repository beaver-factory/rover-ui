import axios, { AxiosInstance } from 'axios'
import { Manifest, RoverPhoto } from './interfaces'

const marsApi: AxiosInstance = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/',
})

const apiKey: string = import.meta.env.VITE_NASA_KEY

export const fetchPhotos = async (
  rover: string,
  date: string,
  camera?: string
): Promise<RoverPhoto[]> => {
  const cameraQuery = camera ? `&camera=${camera}` : ''

  const response = await marsApi.get(
    `/rovers/${rover}/photos?earth_date=${date}${cameraQuery}&api_key=${apiKey}`
  )

  return response.data.photos
}

export const fetchManifest = async (rover: string): Promise<Manifest> => {
  const response = await marsApi.get(`/manifests/${rover}?api_key=${apiKey}`)
  return response.data.photo_manifest
}
