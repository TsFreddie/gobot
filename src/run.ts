import { spawn } from 'child_process'
import { join } from 'path'
import { cwd } from 'process'
import { Config, config } from './config'
import { dbg } from './dbg'
import { getLatestReleaseVersion } from './getLatestRelease'
import { getPocketBasePath } from './getPocketBasePath'

export const run = async (args: string[], options?: Partial<Config>) => {
  if (options) {
    config({
      ...options,
      version: options?.version || (await getLatestReleaseVersion()),
    })
  }

  const fname = await getPocketBasePath()

  // Check if "--dir" is already specified
  if (!args.find((arg) => arg.startsWith('--dir'))) {
    args.push(`--dir=${join(cwd(), `pb_data`)}`)
  }

  dbg(`Running ${fname}`, args)

  const proc = spawn(fname, args, { env: config().env, stdio: 'inherit' })

  proc.on('error', (err) => {
    console.error(`Failed to start pocketbase: ${err.message}`)
  })

  proc.on('exit', (code) => {
    console.log(`pocketbase exited with code ${code}`)
  })

  return proc
}
