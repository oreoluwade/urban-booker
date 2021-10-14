import axios from 'axios';

type Data = {
  id: number,
  name: string,
  rating: string,
  isNew: boolean
}[]

export default async function getWorkers(): Promise<Data> {
  const response = await axios.get("https://storage.googleapis.com/urban-technical/workers.json");
  const jsonData = await response.data;

  console.log("akjfasjkdhjhjasdff", jsonData)

  return jsonData.workers
}
