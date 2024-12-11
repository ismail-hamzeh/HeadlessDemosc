export const FetchData = async <T>(
    query: string,
    variables: Record<string, any> = {}
  ): Promise<T> => {
    try {
      const response = await fetch('https://headlessdemosc.dev.local/sitecore/api/graph/edge?sc_apikey={88F5EF3D-138A-4272-9328-786F8FC9D7AF}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });
  
      const data = await response.json();
  
      if (data && data.data) {
        return data.data;
      } else {
        throw new Error('No data returned');
      }
    } catch (error) {
      console.error('Error fetching GraphQL data:', error);
      throw error;
    }
  };
  