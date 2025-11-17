"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import MahadashaInfoInner from "./mahadashaInfoInner";

export default function KundaliInfoPage() {
  return (
    <Suspense fallback={<div className="p-4 text-white">Loading...</div>}>
      <MahadashaInfoInner />
    </Suspense>
  );
}
