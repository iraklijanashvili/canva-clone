import { create } from 'zustand';

/**
 * Drawing Tool Options
 */
interface DrawingOptions {
  brushSize: number;
  brushColor: string;
  mode: 'pencil' | 'marker' | 'spray';
}

/**
 * Drawing Store State Interface
 */
interface DrawingState {
  isDrawingMode: boolean;
  options: DrawingOptions;
  history: string[];
  historyIndex: number;
  
  // Actions
  setDrawingMode: (isActive: boolean) => void;
  setBrushSize: (size: number) => void;
  setBrushColor: (color: string) => void;
  setMode: (mode: DrawingOptions['mode']) => void;
  
  // History management
  saveState: (canvasJson: string) => void;
  undo: () => string | null;
  redo: () => string | null;
  canUndo: () => boolean;
  canRedo: () => boolean;
}

/**
 * Drawing Store
 * Manages the state for drawing tools and history
 */
export const useDrawingStore = create<DrawingState>((set, get) => ({
  isDrawingMode: false,
  options: {
    brushSize: 5,
    brushColor: '#000000',
    mode: 'pencil',
  },
  history: [],
  historyIndex: -1,
  
  // Drawing mode toggle
  setDrawingMode: (isActive) => set({ isDrawingMode: isActive }),
  
  // Brush options
  setBrushSize: (size) => set((state) => ({
    options: {
      ...state.options,
      brushSize: size
    }
  })),
  
  setBrushColor: (color) => set((state) => ({
    options: {
      ...state.options,
      brushColor: color
    }
  })),
  
  setMode: (mode) => set((state) => ({
    options: {
      ...state.options,
      mode
    }
  })),
  
  // History management
  saveState: (canvasJson) => set((state) => {
    const { history, historyIndex } = state;
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(canvasJson);
    
    return {
      history: newHistory,
      historyIndex: newHistory.length - 1
    };
  }),
  
  undo: () => {
    const { history, historyIndex } = get();
    
    if (historyIndex <= 0) {
      return null;
    }
    
    set({ historyIndex: historyIndex - 1 });
    return history[historyIndex - 1];
  },
  
  redo: () => {
    const { history, historyIndex } = get();
    
    if (historyIndex >= history.length - 1) {
      return null;
    }
    
    set({ historyIndex: historyIndex + 1 });
    return history[historyIndex + 1];
  },
  
  canUndo: () => {
    const { historyIndex } = get();
    return historyIndex > 0;
  },
  
  canRedo: () => {
    const { history, historyIndex } = get();
    return historyIndex < history.length - 1;
  },
})); 