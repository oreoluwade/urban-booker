import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import axios from 'axios';
import getSlots from '../services/slots';
import getWorkers from '../services/workers';
import getAvailableWorkers from '../services/available-workers';
import SlotCard from '../components/slot-card';
import { SlotType } from '../types/Slot';

const Home: NextPage = () => {
  const [slots, setSlots] = useState<SlotType[]>([]);

  useEffect(() => {
    getSlots().then(result => {
      console.log("Slots", result)
      setSlots(result)
    })
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our scheduling page
        </h1>

        <p className={styles.description}>
          Please select a slot below to check the available workers for that slot
        </p>

        <div className={styles.grid}>
          {slots.map(slot => (
            <SlotCard slot={slot} key={slot.id} />
          ))}
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home