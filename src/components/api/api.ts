import axios from "axios";
import { stat } from "fs";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "00e119a9-4fb8-4595-827b-ec20d2d596cd" },
});

export const userAPI = {
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
    console.warn("Obsolete method. Please profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`).then((res) => res.data);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`).then((res) => res.data);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status }).then((res) => res.data);
  },
};

export const authAPI = {
  auth() {
    return instance.get(`auth/me`).then((res) => {
      return res.data;
    });
  },
};
