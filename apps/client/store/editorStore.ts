import create from 'zustand';

type FileUpdate = {
    path: string;
    content: string;
}

interface EditorStore {
    updates: FileUpdate[];
    addUpdate: (u: FileUpdate) => void;
    clearUpdates: () => void;
}

export const useEditorStore = create<EditorStore>((set: (partial: Partial<EditorStore> | ((state: EditorStore) => Partial<EditorStore>)) => void) => ({
    updates: [],
    addUpdate: (u: FileUpdate) => set((s: EditorStore) => ({ updates: [...s.updates, u] })),
    clearUpdates: () => set({ updates: [] }),
}));