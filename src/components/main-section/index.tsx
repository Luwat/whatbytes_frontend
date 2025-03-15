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
        <section className='flex flex-col md:flex-row justify-center items-center'>
          <div className='flex flex-col gap-5 p-6 md:pr-3'>
            <TestSummaryCard />
            <StatisticsCard />
            <ComparisonGraph />
          </div>
          <div className='flex flex-col gap-5 p-6 md:pl-3'>
            <Syllabus />
            <QuestionAnalysis />
          </div>
        </section>
    </section>
  )
}

export default MainSection
