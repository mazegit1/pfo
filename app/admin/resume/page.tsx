// app/admin/resume/page.tsx
import React from 'react';
import nextDynamic from 'next/dynamic';

export const dynamic = "force-dynamic";

const DynamicExport = nextDynamic(
  () => import('@/components/ExportResumeComponent'),
  { loading: () => <p className="p-8 font-mono text-xs">Loading Vector Engine...</p> }
);

export default function AdminResumePage() {
  return <DynamicExport />;
}