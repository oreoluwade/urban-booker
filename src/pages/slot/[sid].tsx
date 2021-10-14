import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import getAvailableWorkers from '../../services/available-workers';
import WorkerCard from '../../components/worker-card';

const Slot: NextPage = () => {
  const router = useRouter();
  const { sid } = router.query;

  const [availableWorkers, setAvailableWorkers] = useState([])
  const [queryError, setQueryError] = useState(false);

  useEffect(() => {
    if(sid) {
      getAvailableWorkers(parseInt(sid, 10)).then(result => {
        if(!result) {
          return setQueryError(true)
        }
        setQueryError(false)
        setAvailableWorkers(result)
      })
    }
  }, [sid]);

  return !queryError ? (
    <div>
      <h1>Available workers for slot {sid}</h1>

      {availableWorkers.map(worker => (
        <WorkerCard worker={worker} key={worker.id} />
      ))}
    </div>
  ): <h3>The slot with Slot ID {sid} does not exist</h3>
}

export default Slot
