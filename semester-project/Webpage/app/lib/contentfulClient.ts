export interface StoreItem {
  id: string;
  itemName: string;
  title: string;
  fileName: string;
  url: string;
}

export interface GameIcon {
  id: string;
  gameName: string;
  title: string;
  fileName: string;
  url: string;
  shortDescription: string;
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

const gqlGamesQuery = `
query GameList {
  gamesCollection {
    items {
      sys {
        id
      }
      gameName
      shortDescription
      gamePoster {
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

const fetchGamesData = async (): Promise<GameIcon[]> => {
  try {
      const response = await fetch(baseUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query: gqlGamesQuery }),
      });
      
      if (!response.ok) {
          throw new Error('Failed to fetch data from Contentful');
      }

      const responseBody = await response.json();

      const body = responseBody.data;

      const gameIcons: GameIcon[] = body.gamesCollection.items.map((item: any) => ({
          id: item.sys.id,
          gameName: item.gameName,
          shortDescription: item.shortDescription,
          title: item.gamePoster.title,
          fileName: item.gamePoster.fileName,
          url: item.gamePoster.url,
      }));

    return gameIcons;
  } catch (error) {
      console.error('Error fetching store items:', error);
      return [];
  }
};

const contentfulService = {
  fetchStoreData,
  fetchGamesData,
};

export default contentfulService;