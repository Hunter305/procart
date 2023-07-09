import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//description : auth user and get token
//route : get api/users/login
//access :public

const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

//description : register user
//route : post api/users
//access :public

const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

//description : logout user / clear cookie
//route : post api/users/logout
//access :private

const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

//description : get user profile
//route : get api/users/profile
//access :private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("user profile");
});

//description : update user profile
//route : put api/users/profile
//access :private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

//description : get all user profile
//route : get api/users
//access :private/admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//description : get user profile by id
//route : get api/users/:id
//access :private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

//description : delete user profile
//route : Delete api/users/:id
//access :private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

//description : update user profile
//route : put api/users/:id
//access :private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
