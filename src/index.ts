import {parse} from 'comment-json'
import {readFileSync} from 'fs'
import {join} from 'path'
import {
  BabelPath,
  BabelPaths,
  TsConvertedPaths,
  TsPathKey,
  TsPaths,
  TsPathUrl,
} from './type'

const parsePath = (key: TsPathKey, paths: TsPaths, baseUrl: TsPathUrl) => {
  const name = key.replace(/\/\*/, '')
  const subdir = /\/\*/.test(paths[key][0])
  const path = './' + join(baseUrl, paths[key][0].replace(/\/\*/, ''))

  return {name, path, subdir}
}

export const loadTsPaths = (dir: TsPathUrl): BabelPaths => {
  try {
    const src = join(process.cwd(), dir)
    const tsconfig = parse(readFileSync(src).toString())
    const baseUrl = tsconfig.compilerOptions.baseUrl || './'
    const paths = tsconfig.compilerOptions.paths

    const keys = Object.keys(paths)
    const tsConvertedPaths = keys.map((key: string) => {
      const {name, path, subdir} = parsePath(key, paths, baseUrl)
      return {name, path, subdir}
    })

    const babelPaths = tsConvertedPaths.map((module: TsConvertedPaths) => {
      const p: BabelPath = {}
      p[`${module.name}`] = module.path
      return p
    })

    return babelPaths
  } catch (error) {
    console.error(error)
    return []
  }
}
