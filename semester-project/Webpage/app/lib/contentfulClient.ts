export interface StoreItem {
    sys: {
      id: string;
    };
    itemName: string;
    shortDescription: {
      json: string;
    };
    asset: {
      title: string;
      fileName: string;
      url: string;
    };
  }
  
  const gqlStoreQuery = `
    query StoreList {
      storeCollection {
        items {
          sys {
            id
          }
          itemName
          shortDescription {
            json
          }
          asset {
            title
            fileName
            url
          }
        }
      }
    }
  `;
  
  const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
  
  const fetchStoreData = async (): Promise<StoreItem[]> => {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: gqlStoreQuery }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from Contentful');
      }
  
      const responseBody = await response.json();
  
      if (!responseBody.data || !responseBody.data.storeCollection || !responseBody.data.storeCollection.items) {
        throw new Error('No items found in the response');
      }
  
      const storeItems: StoreItem[] = responseBody.data.storeCollection.items.map((item: any) => ({
        sys: {
          id: item.sys.id,
        },
        itemName: item.itemName,
        shortDescription: {
          json: item.shortDescription.json,
        },
        asset: {
          title: item.asset.title,
          fileName: item.asset.fileName,
          url: item.asset.url,
        },
      }));
  
      console.log('Store items fetched:', storeItems);
      return storeItems;
    } catch (error) {
      console.error('Error fetching store items:', error);
      return [];
    }
  };
  
  export default fetchStoreData;  