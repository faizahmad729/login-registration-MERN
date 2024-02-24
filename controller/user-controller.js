import user from "../route/model/user-schema.js";
import User from "../route/model/user-schema.js";

export const getUsers = async (request, response) => {
  try {
    let user = await User.find();
    response.json(user);
  } catch (error) {
    response.json({ message: error.message });
  }
};

export const addUser = (request, response) => {
  const { name, username, email, city, phone, password } = request.body;
  User.findOne({ phone: phone }, (err, user) => {
    if (user) {
      response.send({ message: "User already exists" });
    } else {
      const newUser = new User({
        name,
        username,
        email,
        city,
        phone,
        password,
      })
       newUser.save((err) => {
        if (err) {
          response.send(err);
        } else {
          response.send({ message: "successfully registered" });
        }
      });
    }
  });
};

export const getUserById = async (request, response) => {
  const id = request.params.id;
  try {
    const user = await User.findById(id);
    response.json(user);
  } catch (error) {
    response.json({ message: error.message });
  }
};

export const editUser = async (request, response) => {
  const user = request.body;

  const editUser = new User(user);
  try {
    await User.updateOne({ _id: request.params.id }, editUser);
    response.json(editUser);
  } catch (error) {
    response.json({ message: error.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    await user.deleteOne({ _id: request.params.id });
    response.json("user deleted successfully");
  } catch (error) {
    response.json({ message: error.message });
  }
};
