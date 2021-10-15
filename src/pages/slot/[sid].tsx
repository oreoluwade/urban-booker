import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import getAvailableWorkers from '../../services/available-workers';
import WorkerCard from '../../components/worker-card';
import Layout from '../../components/layout';
import classes from './Slot.module.scss';
import { WorkerType } from '../../types/Worker';

const Slot: NextPage = () => {
  const router = useRouter();
  const { sid } = router.query;

  const [availableWorkers, setAvailableWorkers] = useState<WorkerType[]>([])
  const [queryError, setQueryError] = useState(false);

  useEffect(() => {
    if (sid) {
      getAvailableWorkers(+sid).then(result => {
        if (!result) {
          return setQueryError(true)
        }
        setQueryError(false)
        setAvailableWorkers(result)
      })
    }
  }, [sid]);

  return (
    <Layout>
      {!queryError && <main className={classes.main}>
        <h1>Available workers for slot {sid}</h1>

        <section className={classes.grid}>
          {availableWorkers.map(worker => (
            <WorkerCard worker={worker} key={worker.id} />
          ))}
        </section>
      </main>}

      {queryError && <h3>The slot with Slot ID {sid} does not exist</h3>}
    </Layout>
  )
}

export default Slot
