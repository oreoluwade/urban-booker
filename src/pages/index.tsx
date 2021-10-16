import React from 'react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import getSlots from '../services/slots';
import SlotCard from '../components/slot-card';
import { SlotType } from '../types/Slot';
import Layout from '../components/layout';

const Home: NextPage = () => {
  const [slots, setSlots] = useState<SlotType[]>([]);

  useEffect(() => {
    getSlots().then(result => {
      setSlots(result);
    });
  }, []);

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our scheduling page</h1>

        <p className={styles.description}>
          Please select a slot below to check the available workers for that
          slot
        </p>

        <div className={styles.grid}>
          {slots.map(slot => (
            <SlotCard slot={slot} key={slot.id} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Home;
