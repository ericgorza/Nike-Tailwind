import {
  Footer,
  AboutUs
} from '../sections/index'

import Nav from '../components/Nav'


const About = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:paddin-r padding-b'>
        <AboutUs />
      </section>
      <section className='bg-black paddin-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default About