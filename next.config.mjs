import { createMDX } from 'fumadocs-mdx/next'
import path from 'path'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
    turbopack: {
        root: path.resolve('.')
    },
    output: 'export',
    reactStrictMode: true,
    headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    }
                ]
            }
        ]
    }
}

export default withMDX(config)
