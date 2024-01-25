"use client";

import { Link } from "lucide-react";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";

type Props = {
  className?: string;
};

export const SidebarFooter = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleOpenMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {isMenuOpen && <span>Modal</span>}
      <Link
        onClick={toggleOpenMenu}
        href={""}
        className="font-regular px-2 py-4 flex items-end gap-4 cursor-pointer hover:bg-white/10 rounded"
      >
        <a href="">
          <span style={{ fontSize: "25px" }}>
            <TiThMenu />
          </span>
          <span>More</span>
        </a>
      </Link>
    </>
  );
};
