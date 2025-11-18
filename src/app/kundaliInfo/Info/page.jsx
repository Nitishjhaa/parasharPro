"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import InfoInner from "./InfoInner";

export default function KundaliInfoPage() {
  return (
    <Suspense fallback={<div className="p-4 text-white">Loading...</div>}>
      <InfoInner />
    </Suspense>
  );
}
