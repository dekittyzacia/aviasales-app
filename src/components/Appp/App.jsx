import React from 'react'

import TicketList from '../TicketList/TicketList'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
import FiltersTabBar from '../FiltersTabBar/FiltersTab-Bar'
import Filters from '../Filterss/Filters'

import style from './Appp.module.scss'

const App = () => {
  return (
    <main className={style['app']}>
      <HeaderLogo />
      <section className={style['section']}>
        <Filters />
        <div>
          <FiltersTabBar />
          <TicketList />
        </div>
      </section>
    </main>
  )
}

export default App
