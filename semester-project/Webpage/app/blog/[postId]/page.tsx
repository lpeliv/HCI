"use client"
import { useEffect, useState } from 'react';
import ContentfulData from '@/app/(contentful)/ContentfullData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

interface Params {
  postId: string;
}

const CONTENTFUL_API_URL = "https://cdn.contentful.com/spaces/stud5n3cvo5e/entries";

const fetchContentfulData = async (postId: string) => {
  try {
    const response = await fetch(`${CONTENTFUL_API_URL}/${postId}?access_token=CH3QnaQPmv07zUDO0xBn4V26gKNRaBPTKSY4F-zS1hc`);

    if (!response.ok) {
      throw new Error('Failed to fetch data from Contentful');
    }

    const result = await response.json();
    return result.fields;
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    throw error;
  }
};

export default function BlogPost({ params }: { params: Params }) {
  const [contentfulData, setContentfulData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchContentfulData(params.postId);
        setContentfulData(data);
      } catch (error) {

      }
    };

    fetchData();
  }, [params.postId]);

  if (contentfulData === null) {
    return <div className="text-blue-900 p-10 rounded-lg">Loading...</div>;
  }

  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-center p-16 mx-auto bg-blue-800">
        <div className="text-center text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="text-center p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              <h1 className="text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-100 pb-10">
                <span className="text-5xl lg:text-6xl">{contentfulData.title}</span>
              </h1>
              <div className="text-4xl lg:text-5xl p-10 text-left bg-gradient-to-t from-blue-900 to-blue-600 rounded-lg shadow-lg">
                <div className="font-bold pb-10">{contentfulData.author}
                </div>
                <p>
                  {documentToReactComponents(contentfulData.content, {
                    renderNode: {
                      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
                    },
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >
    </main >
  );
}