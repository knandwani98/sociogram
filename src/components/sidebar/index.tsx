import React from "react";
import Link from "next/link";
import * as data from "../../data/nav.json";
import { displayIcons } from "@/utils/ReactIcons";
import { cl } from "@/utils/tailwind";
import { SidebarFooter } from "./footer";

//
type Props = {
  className: string;
};

export const Sidebar = (props: Props) => {
  return (
    <aside className={cl("sidebar p-4", props.className)}>
      <nav className="flex flex-col justify-between h-full">
        <ul>
          {/* Logo */}
          <li>
            <Link
              className="text-2xl font-semibold text-pink-500 py-4 flex"
              href="/"
            >
              {process.env.BRAND}
            </Link>
          </li>

          {/* Dynamic Menu */}
          {data.sidebar.slice(0, 7).map((link) => {
            return (
              <li
                className="font-regular px-2 py-4 hover:bg-white/10 rounded"
                key={link.label}
              >
                <Link href={link.path} className="flex items-end gap-4">
                  {link.icon && (
                    <span style={{ fontSize: "25px" }}>
                      {React.createElement(displayIcons(link.icon))}
                    </span>
                  )}
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}

          {/* Profile */}
          <li className="font-regular px-2 py-4 flex items-end gap-4 cursor-pointer hover:bg-white/10 rounded">
            <span
              style={{ fontSize: "25px" }}
              className="bg-white rounded-full h-6 w-6"
            ></span>
            <span>Profile</span>
          </li>
        </ul>

        {/* Footer */}
        {data.sidebar.length > 7 && <SidebarFooter />}
      </nav>
    </aside>
  );
};
