export interface TsPaths {
  [key: string]: string[]
}

export type TsPathKey = string

export type TsPathUrl = string

export type Files = string[]

export type Directories = string[]

export interface TsConvertedPaths {
  name: string
  path: string
  subdir: boolean
}

export interface BabelPath {
  [key: string]: string
}

export type BabelPaths = BabelPath[]
