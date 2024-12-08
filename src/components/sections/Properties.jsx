import React from "react";
import PropertyListView from "../PropertyListView";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Properties = () => {
  return (
    <div className="w-full p-12 flex flex-col items-center justify-center gap-6">
      <div className="relative w-full flex items-center">
        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-semibold">
          أحدث المشاريع
        </h1>
        <Link
          href="/property/all"
          className="ml-auto text-blue-500 inline-flex items-center">
            رؤية المزيد
          <ArrowRight className="p-1"/>
        </Link>
      </div>
      <p className="text-slate-500">Lorem ipsum dolor sit amet.</p>

      <PropertyListView />
    </div>
  );
};

export default Properties;
