// app/admin/resume/page.tsx
import dynamic from 'next/dynamic';

// Düyməni server tərəfdə render etməmək üçün dinamik import edirik
const ExportResumeComponent = dynamic(
  () => import('@/components/ExportResumeComponent'),
  { ssr: false }
);

export default function AdminResumePage() {
  return <ExportResumeComponent />;
}