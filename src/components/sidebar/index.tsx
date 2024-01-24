import React from "react";
import * as data from "../../data/navLink.json";

type Props = {};

export const Sidebar = (props: Props) => {
  return (
    <aside className="sidebar p-4">
      <nav>
        <a className="text-2xl font-semibold text-pink-500" href="/">
          {process.env.BRAND}
        </a>
        <ul>
          {data.sidebar.map((link) => {
            return (
              <li className="font-regular py-4" key={link.label}>
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
