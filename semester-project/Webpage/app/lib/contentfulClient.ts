export interface StoreItem {
  id: string;
  itemName: string;
  title: string;
  fileName: string;
  url: string;

}

const gqlStoreQuery = `
  query StoreList {
    storeCollection {
      items {
        sys {
          id
        }
        itemName
        
        asset {
          title
          fileName
          url
        }
      }
    }
  }
`;

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/stud5n3cvo5e/environments/master`;

const fetchStoreData = async (): Promise<StoreItem[]> => {
  try {
      const response = await fetch(baseUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer CH3QnaQPmv07zUDO0xBn4V26gKNRaBPTKSY4F-zS1hc`,
          },
          body: JSON.stringify({ query: gqlStoreQuery }),
      });
      
      if (!response.ok) {
          throw new Error('Failed to fetch data from Contentful');
      }

      const responseBody = await response.json();

      // if (!responseBody.data || !responseBody.data.storeCollection || !responseBody.data.storeCollection.items) {
      //     throw new Error('No items found in the response');
      // }
      const body = responseBody.data;

      const storeItems: StoreItem[] = body.storeCollection.items.map((item: any) => ({
          id: item.sys.id,
          itemName: item.itemName,
          title: item.asset.title,
          fileName: item.asset.fileName,
          url: item.asset.url,
      }));

    return storeItems;
  } catch (error) {
      console.error('Error fetching store items:', error);
      return [];
  }
};

const contentfulService = {
  fetchStoreData,
};

export default contentfulService;