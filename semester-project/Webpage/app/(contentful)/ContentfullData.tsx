"use client"
import { useEffect, useState } from 'react';
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
        <div className="pb-2">
          <Link href={`/blog/${entry.sys.id}`}>
            <div key={entry.sys.id} className="bg-gradient-to-r from-blue-50 to-blue-300 p-3 rounded-l m-2 transition-all duration-300 ease-in-out transform hover:from-blue-100 hover:to-blue-300 hover:shadow-xl hover:scale-110" style={{ textShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)' }}>
              <h2 className="pb-10 text-blue-900 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-left">
                {entry.fields.title}
              </h2>
              <div className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-blue-500 text-left">
                Author: {entry.fields.author}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContentfulData;
