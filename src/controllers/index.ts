import {} from "../use-cases/index";
import {PrismaClient} from '@prisma/client'

import patients from "./patients";

const useCases = '<h1> hello world <h1/>'

const api = new PrismaClient()


const get = async () => {
  const patient = await api.patient.findMany({first: 5})


  const resource = JSON.parse(patient[0].resource)
  console.log(resource.name)
}


get()

















// Inject Uses Cases Dependecies
const getHelloWorld = makeHelloWorld({useCases});

export default Object.freeze({
  getHelloWorld
});
export { getHelloWorld };
