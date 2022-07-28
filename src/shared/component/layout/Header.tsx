import React from "react"
import { Helmet } from "react-helmet";
import './header.scss'

type Props = {
  title?: string
  metaDesc?: string
  metaKeywords?: string
  canonical? : string
}

const Header = ({ title, metaDesc, metaKeywords, canonical }: Props) => (
  <React.Fragment>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonical} />

      <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=0" />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      {/* <link rel="stylesheet" href="bootstrap/v4.0/css/bootstrap.min.css" /> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      
      {/* font work-sans */}
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet"/>
    </Helmet>
  </React.Fragment>
)

export default Header