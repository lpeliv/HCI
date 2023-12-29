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

  const filteredData = data.filter((entry: any) => entry.sys.contentType.sys.id === 'blog');

  return (
    <div>
      {filteredData.map((entry: any) => (
        <div key={entry.sys.id} className="pb-2">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-3 rounded-l m-2 shadow-lg
          transition-all duration-500 ease-in-out transform hover:from-blue-200 
          hover:to-blue-500 hover:shadow-xl hover:scale-110 text-blue-50 hover:text-blue-900"
          style={{ textShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)' }}>
            <Link href={`/blog/${entry.sys.id}`}>
              <div>
                <h2 className="pb-10  text-lg md:text-xl lg:text-2xl 
                xl:text-3xl 2xl:text-4xl text-left">
                  {entry.fields.title}
                </h2>
                <div className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 
                text-blue-50 text-left">
                  Written by {entry.fields.author}
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentfulData;
