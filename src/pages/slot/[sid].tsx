import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import getAvailableWorkers from '../../services/available-workers';


const Slot: NextPage = () => {
  const router = useRouter();
  const { sid } = router.query;

  const [availableWorkers, setAvailableWorkers] = useState([])
  const [queryError, setQueryError] = useState(false);

  useEffect(() => {
    if(sid) {
      getAvailableWorkers(parseInt(sid, 10)).then(result => {
        console.log("Workers", result)
        if(!result) {
          return setQueryError(true)
        }
        setQueryError(false)
        setAvailableWorkers(result)
      })
    }
  }, [sid]);

  console.log("This is the slot Id", sid);

  return !queryError ? (
    <div>
      Yep
    </div>
  ): <h3>The slot with Slot ID {sid} does not exist</h3>
}

export default Slot
