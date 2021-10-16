export type Worker = {
  id: number,
  name: string,
  rating: string,
  isNew: boolean
}

export type Slot = {
  id: number,
  localisedTime: string,
  price: string
}

export type AvailableWorker = {
  slot_id: number,
  availableWorker_ids: number[]
}

export type CartItem = {
  slot_id: number,
  worker_id: number
}

export type WorkersServiceResponse = {
  workers: Worker[]
}

export type AvailableWorkersServiceResponse = {
  'available-workers': AvailableWorker[]
}

export type SlotServiceResponse = {
  slots: Slot[]
}

