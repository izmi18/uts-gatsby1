import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "gatsby";
import { graphql } from 'gatsby';




const Layout = ({ children }) => {

  return (
      <div className="flex flex-col min-h-screen">
        <div className="min-h-screen bg-lime-400">
          <nav className="flex justify-around item-center bg-zinc-950 lg:px-20 sm:px-6 py-8 text-gray-100 text-right">
            <ul className="flex space-x-20">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/produk">Produk</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/galery">Gallery</Link>
                </li>
                <li>
                    <Link to="/styles/logo"></Link>
                </li>
              
                
            </ul>
          </nav>
          <Header />
            <main className="flex-grow">{children}</main>
          <Footer />
    </div>
    </div>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
export default Layout