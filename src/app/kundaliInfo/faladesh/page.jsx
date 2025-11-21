"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import FaladeshInner from "./FaladeshInner";

export default function KundaliInfoPage() {
  return (
    <Suspense fallback={<div className="p-4 text-white">Loading...</div>}>
      <FaladeshInner />
    </Suspense>
  );
}
