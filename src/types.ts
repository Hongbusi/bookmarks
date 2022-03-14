export interface IDoc {
  logo: string
  name: string
  zhLink: string
  enLink: string
  gitHubLink: string
}

export type IData = Record<string, IDoc[]>
