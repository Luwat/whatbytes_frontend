import React from 'react'
import TestSummaryCard from './TestSummaryCard'
import StatisticsCard from './StatisticsCard'
import Syllabus from './Syllabus'
import ComparisonGraph from './ComparisonGraph'
import QuestionAnalysis from './QuestionAnalysis'

const MainSection = () => {
  return (
    <section className='my-6'>
        <h3 className='ml-6'>Skill Test</h3>
        <section className='flex justify-between flex-wrap'>
          <div className='flex flex-col w-3/5'>
            <TestSummaryCard />
            <StatisticsCard />
            <ComparisonGraph />
          </div>
          <div className='flex flex-col w-2/5'>
            <Syllabus />
            <QuestionAnalysis />
          </div>
        </section>
    </section>
  )
}

export default MainSection
