import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tour, EventItem, Review, BlogPost } from '../types';

interface AppData {
  tours: Tour[];
  events: EventItem[];
  reviews: Review[];
  blog: BlogPost[];
}

interface DataContextType extends AppData {
  isLoading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  saveData: (newData: AppData) => Promise<boolean>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<AppData>({
    tours: [],
    events: [],
    reviews: [],
    blog: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/data/content.json?v=' + Date.now());
      if (!response.ok) throw new Error('Failed to fetch content');
      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
    } catch (err) {
      console.error('Error loading data:', err);
      setError('Ошибка загрузки данных');
    } finally {
      setIsLoading(false);
    }
  };

  const saveData = async (newData: AppData): Promise<boolean> => {
    try {
      // Option 1: Try to save via API (useful if save.php is on hosting)
      const response = await fetch('/api/save.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        setData(newData);
        return true;
      }
      
      // Fallback: If API failed (static host), we return false so UI can show "Download" option
      return false;
    } catch (err) {
      console.error('Save failed:', err);
      return false;
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ ...data, isLoading, error, refreshData: loadData, saveData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
