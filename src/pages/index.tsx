import React from 'react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import { getSlots } from '../services';
import SlotCard from '../components/slot-card';
import { Slot } from '../types';
import Layout from '../components/layout';

const Home: NextPage = () => {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState<boolean>(true);

  useEffect(() => {
    getSlots()
      .then(result => {
        setSlots(result);
        setSlotsLoading(false);
      })
      .catch(() => {
        setSlotsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our scheduling page</h1>

        {slots.length > 0 && (
          <p className={styles.description}>
            Please select a slot below to check the available workers for that
            slot
          </p>
        )}

        {!slotsLoading && slots.length === 0 && (
          <p className={styles.description}>No slots available</p>
        )}

        {!slotsLoading ? (
          <section className={styles.grid}>
            {slots.map(slot => (
              <SlotCard slot={slot} key={slot.id} />
            ))}
          </section>
        ) : (
          <p className={styles.description}>Loading slots, please wait...</p>
        )}
      </main>
    </Layout>
  );
};

export default Home;
