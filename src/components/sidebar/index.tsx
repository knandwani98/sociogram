import React from "react";

type Props = {};

export const Sidebar = (props: Props) => {
  return (
    <aside className="sidebar">
        <nav>
            <ul>
                <li>Home</li>
                <li>Search</li>
                <li>Explore</li>
                <li>Reels</li>
                <li>Messages</li>
                <li>Notifications</li>
                <li>Create</li>
                <li>Profile</li>
            </ul>
        </nav>
    </aside>
  );
};
