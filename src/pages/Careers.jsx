import {
  Hero,
  PopularProducs,
  SuperQuality,
  Services,
  CustomerReviews,
  Footer,
  SpecialOffers,
  Subscribe} from '../sections/index'

import Nav from '../components/Nav'

const Careers = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:paddin-r padding-b'>
        <Hero />
      </section>
      <section className='bg-black paddin-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default Careers;