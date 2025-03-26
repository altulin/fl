import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import { IPost, IUser } from "@/widgets/store";
import Row from "./Row";

interface ICard extends IUser {
  posts: IPost[];
}

const Card: FC<ICard> = (props) => {
  return (
    <li className={clsx(style.card)}>
      <div className={clsx(style.card__inner)}>
        <figure className={clsx(style.card__avatar)}>
          {Array.from(props.name)[0]}
        </figure>

        <div className={clsx(style.card__content)}>
          <div className={clsx(style.card__author, style.author)}>
            <a
              className={clsx(style.author__link)}
              href={`mailto:${props.email}`}
            >
              {props.email}
            </a>
          </div>

          <Row posts={props.posts} />
        </div>
      </div>
    </li>
  );
};
export default Card;
