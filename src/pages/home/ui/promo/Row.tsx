import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import { IPost } from "@/widgets/store";
import Comments from "./Comments";

const Row: FC<{ posts: IPost[] }> = (props) => {
  return (
    <div className={clsx(style.row)}>
      <ul className={clsx(style.row__list)}>
        {props.posts.map((post) => (
          <li className={clsx(style.row__item)} key={post.id}>
            <span className={clsx(style.row__title)}>{post.title}</span>
            <span className={clsx(style.row__body)}>{post.body}</span>
            <Comments id={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Row;
