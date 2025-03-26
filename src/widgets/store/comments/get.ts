import { api } from "../config/api";
import { IComment } from "./types";

export const comments = api.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query<IComment[], { id: number }>({
      query: ({ id }) => ({
        url: `/posts/${id}/comments`,
      }),
    }),
  }),
});

export const { useLazyGetCommentsQuery } = comments;
