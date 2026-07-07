// app/admin/resume/page.tsx
import React from 'react';
import nextDynamic from 'next/dynamic';

export const dynamic = "force-dynamic";

// Komponenti səs-küysüz, heç bir parametr vermədən çağırırıq
// Çünki Next.js 16-da ssr:false birbaşa burada yox, daxildə tətbiq olunmalıdır
const DynamicExport = nextDynamic(
  () => import('@/components/ExportResumeComponent'),
  { loading: () => <p className="p-8 font-mono text-xs">Loading Vector Engine...</p> }
);

export default function AdminResumePage() {
  return <DynamicExport />;
}