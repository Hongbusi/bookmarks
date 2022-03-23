import type { DocsData } from '~/types'

const modules = import.meta.globEager('../../docs-data/*.ts')

const docsModules: DocsData = {}
Object.keys(modules).forEach((key) => {
  const fileName = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  docsModules[fileName] = modules[key].default
})

export const useDocsData = () => {
  return docsModules
}
