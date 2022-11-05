import React from "react";
import BottomNav from "./BottomNav";

import TopNav from "./TopNav";

export default function Header() {
  return (
    <header>
      {/* Top Nav */}
      <TopNav />

      {/* Bottom Nav */}
      <BottomNav />
    </header>
  );
}
