"use client"
import { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const ContentfulData = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/stud5n3cvo5e/entries?access_token=CH3QnaQPmv07zUDO0xBn4V26gKNRaBPTKSY4F-zS1hc`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data from Contentful');
        }

        const result = await response.json();
        setData(result.items);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((entry: any) => (
        <div key={entry.sys.id} className="bg-blue-100 p-2 rounded-lg">
        <h2>{entry.fields.title}</h2>
          <div>
            {documentToReactComponents(entry.fields.content, {
              renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
              },
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentfulData;
