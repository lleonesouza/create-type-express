import {} from "../use-cases/index";

import makeHelloWorld from "./helloWorld/index";

const useCases = '<h1> hello_world <h1/>'

// Inject Some Nices Uses Cases
const getHelloWorld = makeHelloWorld({useCases});

export default Object.freeze({
  getHelloWorld
});
export { getHelloWorld };
