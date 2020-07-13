import makeUser from "./user.controllers";

const user = makeUser();

export default Object.freeze({
  user,
});
export { user };
