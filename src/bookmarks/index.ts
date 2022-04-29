const modules = import.meta.globEager('./**/*.ts')

const bookmarks: any[] = []

Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return
  }
  bookmarks.push(modules[key].default)
})

bookmarks.sort((a, b) => {
  return a.order - b.order
})

export default bookmarks
