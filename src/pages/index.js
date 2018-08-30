import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../components/header'
import styled, { css } from 'styled-components'

const Button = styled.button`
    
    width: 16.5rem;
    height: 3.5rem;
    background: #1b2936;
    font-size: 1.3rem;
    color: #fff;
    border: none;
    cursor:pointer;

    ${props => props.yellow && css`
      width: 22rem;
      height: 5rem;
      background: #fdc300;
      color: #fff;
      border: none;
      border-radius: 20rem;
      cursor:pointer;
      text-transform: uppercase;
      transition: all .2s;
  `}
`;

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.allContentfulHeroTitle.edges[0].node');
    const imgSrc = 'https:'+get(this.props, 'data.allContentfulAsset.edges[0].node.file.url')
    const imgLogo = 'https:'+get(this.props, 'data.allContentfulAsset.edges[1].node.file.url')
    const menuList = get(this.props, 'data.allContentfulNavigation.edges[0].node.navigationMenu');
    const blogCard = get(this.props, 'data.allContentfulBlogCard.edges');
    const detailBtn = get(this.props, 'data.allContentfulDetailsButton.edges[0].node.buttonsText');
    const offerTitle = get(this.props, 'data.allContentfulOfferSection.edges[0].node.mainTitle');
    const offerSubTitle = get(this.props, 'data.allContentfulOfferSection.edges[0].node.subtitle');
    const offerBox = get(this.props, 'data.allContentfulOfferBox.edges');
    
    return (
      <div className="container">
        <div className= "navigationBox">
          <img src={imgLogo} alt= "logo image" className="iconLogo"/>
          <ul className = "navigationList">
          {menuList.map(element => {
              return (
                <li key={element.toString()} className="navigationList__item">{element}</li>
              )
            })}
          </ul>
          <img src={imgSrc} alt= "looking glass image" className="iconSrc"/>
        </div>

        <div className="mainTitleBox">
          
          <h1 className="heading-1"> {siteTitle.mainTitle} </h1>
        </div>

        <div className="blogCardBox">
            {blogCard.map(element => {
              return (
                <div key={element.node.blogCardsTitle} className="blogCardBox__card">
                    <div className="blogCardBox__card-grey">
                      <Button className="blogCardBox__card-btn"> <div className="blogCardBox__card-btn--text">{element.node.viewMoreButton}</div> <div className="blogCardBox__card-btn--arrow"><div >&gt;</div></div></Button>
                    </div>
                    <div className="blogCardBox__card-white">
                      <h2 className= "heading-2 blogCardBox__card-title">{element.node.blogCardsTitle}</h2>
                      <div className="blogCardBox__card-content">{element.node.blogCardsContent}</div>
                    </div>
                </div>

              )
            })}

        </div>
        <div className="detailBtnBox" > 
          <Button yellow className="detailBtnBox__btn"> {detailBtn} </Button>
        </div>

        <div className="offerTitleBox">
            <h3 className="offerTitleBox__title">{offerTitle}</h3>
            <h4 className="offerTitleBox__subtitle">{offerSubTitle}</h4>
        </div>
        <div className="offerBoxesBox">
        {offerBox.map(element => {
              return (
                <div key={element.node.boxTitle} className="offerBoxesBox__box">
                    <div className="offerBoxesBox__box-imageBox">
                      <img src={'https:'+element.node.boxIcon.file.url} alt= "logo image" className="offerBoxesBox__box-imageBox--img"/>
                    </div>
                    <div className="offerBoxesBox__box-textBox">
                      <h2 className= "heading-2 offerBoxesBox__box-textBox--title">{element.node.boxTitle}</h2>
                      <div className="offerBoxesBox__box-textBox--content">{element.node.boxContent}</div>
                    </div>
                </div>

              )
            })}


        </div>


      </div>
      
    )
  }
}

export default IndexPage

export const query = graphql`
query HomeQeury {
  allContentfulNavigation {
    edges {
      node {
        navigationMenu
      }
    }
  }
  allContentfulHeroTitle {
    edges {
      node {
        mainTitle
      }
    }
  }
  allContentfulBlogCard {
    edges {
      node {
        viewMoreButton
        blogCardsTitle
        blogCardsContent
      }
    }
  }
  allContentfulOfferBox {
    edges {
      node {
      	boxIcon {
          file{
            url
          }
        }
        boxTitle
        boxContent
      }
    }
  }
  allContentfulOfferSection {
    edges {
      node {
        mainTitle
        subtitle
      }
    }
  }
  allContentfulDetailsButton {
    edges {
      node {
        buttonsText
      }
    }
  }
  allContentfulAsset {
    edges {
      node {
        file {
          url
        }
      }
    }
  }
}
`
