import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>LBRY Docs</span>,
  project: {
    link: 'https://github.com/open-lbry/lbry-docs',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/open-lbry/lbry-docs',
  footer: {
    text: 'LBRY Docs © 2023',
  },
}

export default config
