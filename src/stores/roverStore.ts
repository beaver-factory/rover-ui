import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchManifest, fetchPhotos } from '../api'
import { RoverPhoto, Manifest } from '../api/interfaces'

export const useRoverStore = defineStore('rover', () => {
  const photos = ref<RoverPhoto[]>([])
  const manifest = ref<Manifest>({
    name: 'Curiosity',
    landing_date: '2012-08-06',
    launch_date: '2011-11-26',
    status: 'active',
    max_sol: 3742,
    max_date: '2023-02-14',
    total_photos: 631505,
    photos: [],
  })
  const manifest_loading = ref<boolean>(false)
  const manifest_err = ref<boolean>(false)
  const photos_loading = ref<boolean>(false)
  const photos_err = ref<boolean>(false)
  const photoIndex = ref<number>(0)

  const setManifest = async (rover: string = 'opportunity'): Promise<void> => {
    try {
      manifest_loading.value = true
      manifest.value = await fetchManifest(rover)
      manifest_err.value = false
    } catch {
      manifest_err.value = true
    } finally {
      manifest_loading.value = false
    }
  }
  const setPhotos = async (
    rover: string,
    date: string,
    cameras?: string
  ): Promise<void> => {
    try {
      photos_loading.value = true
      photos.value = await fetchPhotos(rover, date, cameras)
      photos_err.value = false
    } catch {
      photos_err.value = true
    } finally {
      photos_loading.value = false
    }
  }
  const setIndex = (index: number): void => {
    photoIndex.value = index
  }

  return {
    photos,
    manifest,
    manifest_loading,
    manifest_err,
    photos_loading,
    photos_err,
    photoIndex,
    setManifest,
    setPhotos,
    setIndex,
  }
})
