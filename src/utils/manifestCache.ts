import { Manifest } from '../api/interfaces'

export const writeToManifestCache = (rover: string, data: Manifest): void => {
  localStorage.setItem(rover, JSON.stringify(data))
}

export const readFromManifestCache = (rover: string): Manifest => {
  const item = localStorage.getItem(rover)
  return item === null ? null : JSON.parse(item)
}
