export interface IDoc {
  logo: string
  name: string
  desc: string
  zhLink: string
  enLink: string
  gitHubLink: string
}

export type IData = Record<string, IDoc[]>
