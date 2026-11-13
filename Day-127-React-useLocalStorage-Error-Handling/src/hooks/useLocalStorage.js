import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }

      return initialValue;
    } catch (error) {
      console.error("Error reading Local Storage:", error);

      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to Local Storage:", error);
    }
  }, [key, value]);

  function removeValue() {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from Local Storage:", error);
    }

    setValue(initialValue);
  }

  return [value, setValue, removeValue];
}

export default useLocalStorage;