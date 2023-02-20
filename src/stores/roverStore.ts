import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchManifest, fetchPhotos } from '../api'
import { RoverPhoto, Manifest } from '../api/interfaces'
import {
  readFromManifestCache,
  writeToManifestCache,
} from '../utils/manifestCache'

const useRoverStore = defineStore('rover', () => {
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
  const manifestLoading = ref<boolean>(false)
  const manifestErr = ref<boolean>(false)
  const photosLoading = ref<boolean>(false)
  const photosErr = ref<boolean>(false)
  const photoIndex = ref<number>(0)

  const setManifest = async (rover = 'opportunity'): Promise<void> => {
    const checkedManifest = readFromManifestCache(rover)

    if (checkedManifest) {
      manifest.value = checkedManifest
    } else {
      try {
        manifestLoading.value = true
        manifest.value = await fetchManifest(rover)
        writeToManifestCache(rover, manifest.value)
        manifestErr.value = false
      } catch {
        manifestErr.value = true
      } finally {
        manifestLoading.value = false
      }
    }
  }
  const setPhotos = async (
    rover: string,
    date: string,
    cameras?: string
  ): Promise<void> => {
    try {
      photosLoading.value = true
      photos.value = await fetchPhotos(rover, date, cameras)
      photosErr.value = false
    } catch {
      photosErr.value = true
    } finally {
      photosLoading.value = false
    }
  }
  const setIndex = (index: number): void => {
    photoIndex.value = index
  }

  return {
    photos,
    manifest,
    manifestLoading,
    manifestErr,
    photosLoading,
    photosErr,
    photoIndex,
    setManifest,
    setPhotos,
    setIndex,
  }
})

export default useRoverStore
