import { store } from "./api/store";
import type { RootState, AppDispatch } from "./api/types";
import { useAppDispatch, useAppSelector } from "./api/types";
import { IPost } from "./posts/types";
import { IUser } from "./users/types";
import { useGetUsersQuery } from "./users/get";
import { useGetPostsQuery } from "./posts/get";
import { IComment } from "./comments/types";

export {
  store,
  useAppDispatch,
  useAppSelector,
  useGetUsersQuery,
  useGetPostsQuery,
};
export type { RootState, AppDispatch, IPost, IUser, IComment };
