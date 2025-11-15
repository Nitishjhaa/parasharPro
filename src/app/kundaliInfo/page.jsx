"use client";

import { useEffect, useState } from "react";
import { loadKundaliByIndex } from "@/lib/db";
import { useSearchParams, useRouter } from "next/navigation";

export default function KundaliInfoPage() {
  const [kundali, setKundali] = useState(null);
  const params = useSearchParams();
  const router = useRouter();
  const indexParam = params.get("index");

  useEffect(() => {
    async function load() {
      // require index param
      if (indexParam === null) {
        // redirect to home if no index
        router.push("/");
        return;
      }

      const idx = Number(indexParam);
      if (Number.isNaN(idx) || idx < 0) {
        router.push("/");
        return;
      }

      const record = await loadKundaliByIndex(idx);
      if (!record) {
        // invalid index -> go home
        router.push("/");
        return;
      }

      // record.raw is the backend JSON; record.meta contains name/birthDate/time/city
      setKundali(record);
    }

    load();
  }, [indexParam, router]);

  if (!kundali) return <div className="p-4 text-white">Loading...</div>;

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl mb-4">Kundali Information</h1>

      {/* meta summary */}
      <div className="mb-4 p-3 bg-white/10 rounded">
        <div className="font-semibold text-lg">{kundali.meta?.name || "Unknown"}</div>
        <div className="text-sm text-gray-300">{kundali.meta?.birthDate} • {kundali.meta?.birthTime}</div>
        <div className="text-sm text-gray-400">{kundali.meta?.city}</div>
      </div>

      {/* full JSON — replace this with your visual UI */}
      <pre className="whitespace-pre-wrap bg-black/40 p-3 rounded-xl">
        {JSON.stringify(kundali.raw || kundali, null, 2)}
      </pre>
    </div>
  );
}
