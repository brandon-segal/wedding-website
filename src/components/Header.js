import React from 'react'
import {Parallax} from 'react-parallax';
import Img from 'gatsby-image';
import {graphql} from 'gatsby';
class Header extends React.Component {

    render() {
        const imgUrl = this.props.src;
        const children = this.props.children;
        const image = this.props.data.img.childImageSharp.fluid;
        return (
            <div 
                className="parallax"
                >
                <Img
                    title="Header image"
                    alt="Greek food laid out on table"
                    fluid={image}
                >
                </Img>
                {children}
            </div>
        )
    }
}

export default Header
export const pageQuery = graphql`query {
  img: file(relativePath: { eq: "eiffel.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`