import React from 'react'
import TestSummaryCard from './TestSummaryCard'
import StatisticsCard from './StatisticsCard'
import Syllabus from './Syllabus'
import ComparisonGraph from './ComparisonGraph'

const MainSection = () => {
  return (
    <section className='my-6 w-full'>
        <h3 className='ml-6'>Skill Test</h3>
        <section className='flex justify-between flex-wrap'>
          <div className='flex flex-col w-3/5'>
            <TestSummaryCard />
            <StatisticsCard />
            <ComparisonGraph />
          </div>
          <div className='flex flex-col w-2/5'>
            <Syllabus />
          </div>
        </section>
    </section>
  )
}

export default MainSection
