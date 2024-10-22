import React from 'react'
import CustomButton from '../components/CustomButton'

const News = () => {
    const newsArticle={
        title:'abc',
        author:'xyz',
        date:'22/09/23'
    }
    const name = "Saharsh"
  return (
    <div>
        <h1>This is the news page</h1>
        <marquee>News page</marquee>
        <CustomButton/>
        <p>{newsArticle.author}<br></br>{name}</p>
    </div>
  )
}

export default News