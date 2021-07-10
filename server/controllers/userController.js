import User from '../models/User';

export const dbTest = (req, res) => {
  // const { name } = req.body;
  // try {
  //   const newUser = await User.create({
  //     name,
  //   });
  // } catch (e) {
  //   console.log(e);
  // }
  console.log(req.body);
};
