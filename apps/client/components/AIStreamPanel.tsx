'use client';

import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface AIStreamPanelProps {
    projectId: string;
}

export default function AIStreamPanel({ projectId }: AIStreamPanelProps) {
    const [streamedText, setStreamedText] = useState('');
    const evtSourceRef = useRef<EventSource | null>(null);

    useEffect(() => {
        const evtSource = new EventSource(
            `http://localhost:8080/api/v1/projects/${projectId}/stream-roadmap`
        );
        evtSourceRef.current = evtSource;

        evtSource.onmessage = (e) => {
            setStreamedText((prev) => prev + e.data);
        };

        evtSource.onerror = () => {
            evtSource.close();
        };

        return () => {
            evtSource.close();
        };
    }, [projectId]);

    return (
        <div className='p-4 overflow-y-auto bg-gray-50'>
            <h3 className='font-semibold mb-2'>Manager Roadmap</h3>
            <div className='prose'>
                <ReactMarkdown>{streamedText}</ReactMarkdown>
            </div>
        </div>
    )
}