'use client';

import axios from "axios";
import { useEffect, useState } from "react";

export default function useManagerStatus(projectId: string) {
    const [done, setDone] = useState(false);

    useEffect(() => {
        const interval = setInterval(async ()=> {
            const res = await axios.get(`http://localhost:8080/api/v1/projects/${projectId}/status`, {
                withCredentials: true
            });

            const { data } = res.data;
            if (data.status === 'MANAGER_DONE') {
                setDone(true);
                clearInterval(interval);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [projectId]);

    return done;
}