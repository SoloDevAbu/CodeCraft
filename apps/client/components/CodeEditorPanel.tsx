'use client';

import useFileStream from '@/lib/useFileStream';
import { useEditorStore } from '@/store/editorStore';
import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';

interface CodeEditorPanelProps {
    projectId: string;
}

export default function CodeEditorPanel({ projectId} : CodeEditorPanelProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const updates = useEditorStore((s) => s.updates) as { path: string; content: string }[];
    const clearUpdates = useEditorStore((s) => s.clearUpdates);

    useFileStream(projectId);

    useEffect(() => {
        if(!containerRef.current) {
            return;
        };

        const editor = monaco.editor.create(containerRef.current, {
            language: 'typescript',
            theme: 'vs-dark',
            minimap: {
                enabled: false
            }
        });
        
        updates.forEach(({ path, content }) => {
            const uri = monaco.Uri.parse(`inmemory://${path}`);
            let model = monaco.editor.getModel(uri);
            if (!model) {
                model = monaco.editor.createModel(content, 'typescript', uri);
            } else {
                model.setValue(content);
            }
        });

        clearUpdates();

        return () => editor.dispose();
    }, [updates, clearUpdates]);

    return <div ref={containerRef} className="h-full w-full" />
}