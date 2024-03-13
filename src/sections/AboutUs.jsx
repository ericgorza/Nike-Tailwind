import React from 'react'

const AboutUs = () => {
  return (
    <section className='padding flex lg:flex-col max-lg:flex-col gap-10 w-full max-container mt-10'>
        <div className='w-full flex flex-col justify-center items-center text-center mt-10'>
            <h1 className='font-palanquin capitalize text-[100px] lg:max-w-lg font-bold'
             >About <span className='text-coral-red'> Us</span>
             </h1>
             <p className='mt-20 lg:max-w-[50rem] info-text text-left'>
              Founded in 1964 by Bill Bowerman and Phil Knight, Nike was born out of the desire to create high-performance footwear for athletes. Since then, we've evolved into much more than a footwear brand; we're a global platform that embraces diversity, inclusion, and innovation in everything we do.
              <br/><br/>
              Our mission is simple yet powerful: to bring inspiration and innovation to every athlete in the world. If you have a body, you are an athlete. This means no matter who you are or how you move, Nike is here to support you on your athletic journey.
              <br/><br/>
              In addition to creating high-quality products, we also strive to be a positive force in the world. We believe in the power of sport to unite communities, promote equality, and drive positive change. That's why we're committed to being environmentally responsible, supporting social causes, and promoting diversity in every aspect of our business.
              <br/><br/>
              Join us as we continue to push the boundaries of what's possible in sport and beyond. Whether you're a runner, a basketball player, a fitness enthusiast, or someone who simply loves wearing our products day-to-day, Nike is here to empower you to achieve new heights of excellence.
              <br/><br/>
             </p>
             <p className='mt-10 lg:max-w-[50rem] info-text font-bold text-center'><span className='text-coral-red'>Welcome</span> to the <span className='text-coral-red text-xl'>Nike</span> family.<br/> <span className='text-coral-red'>Together</span>, let's do great things.</p>
        </div>
    </section>
  )
}

export default AboutUs