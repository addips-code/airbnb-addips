import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../Components/Header"
import Banner from "../Components/Banner"

const Home: NextPage = (exploreData) => {
  return (
    <div className="">
      <Head>
        <title>Airbnd Addips clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-[80%] mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* pull some data from a server - API endpoints */}
          {exploreData.map(item => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  )
}

export function getStaticProps(){
  const exploreData = fetch('https://link.papareact.com/pyp').then(res => res.json()
  );

  return {
    props:{
      exploreData
    }
  }
}


export default Home;
