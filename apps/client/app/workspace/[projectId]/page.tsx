'use client';

import { useSearchParams } from "next/navigation";
import AIStreamPanel from '@/components/AIStreamPanel';
import CodeEditorPanel from '@/components/CodeEditorPanel';
import userManagerStatus from '@/lib/useManagerStatus';

export default function WorkspacePage() {
    const params = useSearchParams();
    const projectId = params.get('projectId');
    const isManagerDone = userManagerStatus(projectId ?? '');

    return (
        <div className="grid grid-cols-[1fr_3fr] h-screen">
      <AIStreamPanel projectId={projectId} />
      {isManagerDone ? (
        <CodeEditorPanel projectId={projectId} />
      ) : (
        <div className="flex items-center justify-center text-gray-600">
          Waiting for the manager agent to finish…
        </div>
      )}
    </div>
  );
}