import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/users";

export const createFollow = async (follow) => {
  const response = await axios.post(`${USERS_API_URL}/follows`, follow);
  return response.data;
}

export const findFollowersByFollowed = async (userId) => {
  const response = await axios.get(
    `${USERS_API_URL}/follows/followers/${userId}`
  );
  return response.data;
}

export const findFollowedByFollowing = async (userId) => {
  const response = await axios.get(
    `${USERS_API_URL}/follows/following/${userId}`
  );
  return response.data;
}

export const unfollow = async (follow) => {
  const response = await axios.delete(`${USERS_API_URL}/follows/unfollows`, {data: follow});
   console.log("response in thunk", response);
  return response.data;
}

export const findIsFollowedById = async (follow) => {
  const response = await axios.get(`${USERS_API_URL}/follows/isFollowed`, {params: follow});
  return response.status === 200;
}