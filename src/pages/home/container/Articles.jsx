import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
const Articles = () => {
  return (
    <section className='flex flex-col container mx-auto px-5 py-10'>
      <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
    </section>
  )
}

export default Articles