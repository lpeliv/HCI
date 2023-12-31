"use client"
import { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Link from 'next/link';

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
    return <div className="text-blue-50 p-10 rounded-lg">Loading...</div>;
  }

  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-center p-10 mx-auto bg-blue-800">
        <div className="font-roboto-condensed whitespace-break-spaces 
        text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5 text-blue-100">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
              <div className="whitespace-break-spaces" style={{ textShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)' }}>
                <h1 className="font-extrabold capitalize text-blue-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-5">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{contentfulData.title}</span>
                </h1>
                <div className="bg-gradient-to-br from-blue-700 to-blue-400 p-3 rounded-l m-2 shadow-lg
                transition-all duration-500 ease-in-out transform shadow-xl text-blue-50 rounded-lg
                text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left"
                  style={{ textShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)' }}>
                  <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-100">{contentfulData.author}</div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl m-4">
                    {documentToReactComponents(contentfulData.content, {
                      renderNode: {
                        [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{children}</p>,
                      },
                    })}
                  </p>
                </div>
                <div className="flex justify-center gap-5">
                  <Link href="/blog">
                    <span className="font-bold uppercase whitespace-nowrap font-roboto-condensed text-base 
                    px-10 py-2 rounded-lg bg-brand-blue-100 text-brand-blue-900 
                    hover:text-brand-blue-50 hover:bg-brand-blue-900 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-all duration-300 ease-in-out">
                      BACK
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}