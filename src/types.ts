export interface Doc {
  logo: string
  name: string
  zhLink: string
  enLink: string
  gitHubLink: string
}

export interface DocData {
  title: string
  list: Doc[]
}
