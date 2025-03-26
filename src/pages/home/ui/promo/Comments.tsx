import clsx from "clsx";
import { FC, useState } from "react";
import style from "./Promo.module.scss";
import { useLazyGetCommentsQuery } from "@/widgets/store/comments/get";

const Comments: FC<{ id: number }> = ({ id }) => {
  const [isComments, setIsComments] = useState(false);
  const [trigger, { data: comments, isLoading, isError }] =
    useLazyGetCommentsQuery();

  const getComments = () => {
    if (isComments) return;
    trigger({ id });
  };

  const handle = () => {
    getComments();
    setIsComments(!isComments);
  };

  return (
    <div className={clsx(style.comments)}>
      <button
        className={clsx(
          style.comments__button,
          isComments &&
            !isLoading &&
            !isError &&
            style["comments__button--active"],
        )}
        onClick={handle}
      >
        комментарии
      </button>

      {comments && isComments ? (
        <ul className={clsx(style.comments__list)}>
          {comments.map((comment) => (
            <li className={clsx(style.comments__item)} key={comment.id}>
              <a
                className={clsx(style.comments__email)}
                href={`mailto:${comment.email}`}
              >
                {comment.email}
              </a>
              <span className={clsx(style.comments__body)}>{comment.body}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default Comments;
