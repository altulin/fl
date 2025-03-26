import { api } from "../config/api";
import { IPost } from "./types";

export const posts = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<IPost[], unknown>({
      query: () => ({
        url: "/posts/",
      }),
    }),
  }),
});

export const { useGetPostsQuery } = posts;
