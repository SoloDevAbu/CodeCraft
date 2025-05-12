'use client';

import { useEditorStore } from "@/store/editorStore";
import { useEffect } from "react";

export default function useFileStream(projectId: string) {
    const { addUpdate } = useEditorStore();
    useEffect(() => {
        const socket = new WebSocket(
            `ws://localhost:8080/api/v1/projects/${projectId}/files`
        );

        socket.onmessage = (evt) => {
            const message = JSON.parse(evt.data);

            if(message.type === 'file') {
                addUpdate({
                    path: message.path,
                    content: message.content
                });
            }
        };

        return () => {
            socket.close();
        };
    }, [projectId, addUpdate]);
};