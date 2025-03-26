import clsx from "clsx";
import { FC } from "react";
import style from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={clsx(style.header)}>
      <div className="container"></div>
    </header>
  );
};
