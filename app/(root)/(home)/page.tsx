import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return <div><UserButton afterSwitchSessionUrl="/" /></div>;
};

export default Home;
