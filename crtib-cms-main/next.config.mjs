import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'
import { fileURLToPath } from 'url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'standalone' recrée node_modules via des liens symboliques : nécessaire au
  // déploiement Docker/nixpacks (Linux), mais échoue sur Windows sans droits
  // symlink (EPERM). On le désactive donc uniquement sous Windows.
  output: process.platform === 'win32' ? undefined : 'standalone',
  // Fixe la racine du projet pour éviter que Next remonte vers un
  // lockfile/config parent (ex. C:\Users\...\Downloads).
  outputFileTracingRoot: dirname,
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
})
