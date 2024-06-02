import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import images from "../images/image1.jpg"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
        siteMetadata {
        title
           }
        }
    }
`)

  return (
    <div>
      
      <p className=" bg-lime-400 text-5xl text-center py-10 text-zinc-950 font-semibold font-['rammentto']">{data.site.siteMetadata.title}</p>
      <img src={images} alt="sumberpasir" className="w-14 h-14 bg-left-top absolute top-0 left-40 m-4" />
      
    </div>
  )
}

export default Header