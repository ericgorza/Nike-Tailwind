import {
  Hero,
  Footer,
  AllProducts} from '../sections/index'

import Nav from '../components/Nav'

const Products = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:paddin-r padding-b'>
        <AllProducts />
      </section>
      <section className='bg-black paddin-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default Products