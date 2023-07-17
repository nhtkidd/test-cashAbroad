const url = 'https://us-central1-cloudfunctions-test-8b09c.cloudfunctions.net/getTransactionsTest'

export async function getData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al llamar a la API');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al llamar a la API:', error);
      return null;
    }
  }