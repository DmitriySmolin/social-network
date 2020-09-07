import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "00e119a9-4fb8-4595-827b-ec20d2d596cd" },
});

export const userAPI = {
  auth() {
    return instance.get(`auth/me`).then((res) => {
      return res.data;
    });
  },
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users/?page=${currentPage}&count=${pageSize}`).then((res) => res.data);
  },
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`).then((res) => res.data);
  },
  setUnfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then((res) => res.data);
  },
  setFollow(userId: number) {
    return instance.post(`follow/${userId}`).then((res) => res.data);
  },
};
