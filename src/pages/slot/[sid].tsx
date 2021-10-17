import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAvailableWorkers } from '../../services';
import WorkerCard from '../../components/worker-card';
import Layout from '../../components/layout';
import classes from './Slot.module.scss';
import { Worker } from '../../types';

const Slot: NextPage = () => {
  const router = useRouter();
  const { sid } = router.query;

  const [availableWorkers, setAvailableWorkers] = useState<Worker[]>([]);
  const [queryError, setQueryError] = useState(false);

  useEffect(() => {
    if (sid) {
      getAvailableWorkers(+sid)
        .then(result => {
          if (!result) {
            return setQueryError(true);
          }
          setQueryError(false);
          setAvailableWorkers(result);
        })
        .catch(err => {
          setAvailableWorkers([]);
          setQueryError(true);
        });
    }
    return () => {
      setAvailableWorkers([]);
      setQueryError(false);
    };
  }, [sid]);

  const slotId = sid && typeof +sid === 'number' ? +sid : undefined;

  return (
    <Layout>
      {!queryError && (
        <main className={classes.main}>
          <h1>Available workers for slot {sid}</h1>

          {slotId && (
            <section className={classes.grid}>
              {availableWorkers.map(worker => (
                <WorkerCard worker={worker} key={worker.id} slot_id={slotId} />
              ))}
            </section>
          )}
        </main>
      )}

      {queryError && (
        <main className={classes.main}>
          <h3>The slot with Slot ID {sid} does not exist</h3>
        </main>
      )}
    </Layout>
  );
};

export default Slot;
