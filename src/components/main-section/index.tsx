import React from 'react'
import TestSummaryCard from './TestSummaryCard'
import StatisticsCard from './StatisticsCard'

const MainSection = () => {
  return (
    <section>
        <h3 className='mx-6 mt-6'>Skill Test</h3>
        <section className='flex flex-wrap'>
          <div className='flex flex-col'>
            <TestSummaryCard />
            <StatisticsCard />
          </div>
        </section>
    </section>
  )
}

export default MainSection
