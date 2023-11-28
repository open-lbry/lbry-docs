import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <div className="flex flex-row items-center gap-2">
      <Image src="/LBC_logo.png" alt="LBRY" width={30} height={30} />
      <span>LBRY Docs</span>
    </div>
  ),
  head: function useHead() {
    const { title } = useConfig();
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="LBRY Documentation" />
        <meta name="og:description" content="LBRY Documentation" />
        <meta name="title" content="LBRY Docs" />
        <meta name="og:title" content="LBRY Docs" />
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - LBRY",
      };
    }
  },
  project: {
    link: "https://github.com/open-lbry/lbry-docs",
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: "https://github.com/open-lbry/lbry-docs",
  footer: {
    text: "LBRY Docs © 2023",
  },
};

export default config;
