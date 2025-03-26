import { api } from "../config/api";
import { IUser } from "./types";

export const user = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<IUser[], unknown>({
      query: () => ({
        url: "/users/",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = user;
