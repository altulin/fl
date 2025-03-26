import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import Card from "./Card";
import { useGetPostsQuery, useGetUsersQuery } from "@/widgets/store";

const Promo: FC = () => {
  const { data: dataUsers } = useGetUsersQuery({});
  const { data: dataPosts } = useGetPostsQuery({});

  if (!dataUsers || !dataPosts) return null;

  const getPosts = (id: number) => {
    const arr = dataPosts?.filter(
      (post) => post.userId.toString() === id.toString(),
    );

    return arr;
  };

  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <ul className={clsx(style.promo__list)}>
          {dataUsers?.map((user) => (
            <Card {...user} posts={getPosts(user.id) || []} key={user.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Promo;
