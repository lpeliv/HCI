"use client"
import { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Link from 'next/link';

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
    return <div className="text-blue-900 p-10 rounded-lg">Loading...</div>;
  }

  return (
    <div>
      {data.map((entry: any) => (
        <div key={entry.sys.id} className="bg-blue-50 p-10 rounded-lg m-2" style={{ textShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)' }}>
          <Link href={`/blog/${entry.sys.id}`}>
          <h2 className="pb-10 text-blue-900 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {entry.fields.title}
          </h2>
          </Link>
          <div className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-blue-600 text-left">
            Author: {entry.fields.author}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentfulData;
