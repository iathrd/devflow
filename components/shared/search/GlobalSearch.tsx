import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search for anything"
          className="paragraph-regular background-light800_darkgradient no-focus placeholder border-none shadow-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
