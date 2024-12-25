export const groupBy = <T, K extends string | number | symbol>(
    array: T[],
    key: (item: T) => K,
  ): Record<K, T[]> => {
    return array.reduce(
      (acc, item) => {
        const keyVal = key(item);
  
        if (!acc[keyVal]) acc[keyVal] = [];
  
        acc[keyVal].push(item);
  
        return acc;
      },
      {} as Record<K, T[]>,
    );
  };
  
  export const getRandomElement = <T>(array: T[]): T => {
    if (array.length === 0) {
      throw new Error('Array tidak boleh kosong');
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  