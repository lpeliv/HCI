"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContentfulDataStore = () => {
    const [data, setData] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

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
        return <div className="text-blue-50 p-10 rounded-lg">Loading...</div>;
    }

    const filteredData = data.filter((entry: any) => {
        const itemName = (entry.fields.itemName || '').toLowerCase();
        const query = searchQuery.toLowerCase();

        if (query.length === 0) {
            return entry.sys.contentType.sys.id === 'store';
        }

        if (entry.sys.contentType.sys.id !== 'store') {
            return false;
        }

        return itemName.startsWith(query);
    });

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <div className="mb-10 ml-5 flex justify-start">
                <input
                    type="text"
                    placeholder="Search items..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="p-2 border rounded-l text-blue-900 focus:outline-none focus:ring focus:border-blue-300"
                    style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}
                />
            </div>
            {filteredData.map((entry: any) => (
                <div key={entry.sys.id} className="pb-2">
                    <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-3 rounded-l m-2 shadow-lg
                        transition-all duration-500 ease-in-out transform hover:from-blue-200 
                        hover:to-blue-500 hover:shadow-xl hover:scale-110 text-blue-50 hover:text-blue-900"
                        style={{ textShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)' }}>
                        <Link href={`/store/${entry.sys.id}`}>
                            <div className="h-[200px]">
                                <h2 className="pb-10 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-left">
                                    {entry.fields.itemName}
                                </h2>
                                {entry.fields.asset && entry.fields.asset.fields && (
                                    <Image
                                        src={`https:${entry.fields.asset.fields.file.url}`}
                                        alt={entry.fields.asset.fields.description || ''}
                                        className="w-full h-auto"
                                    />
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContentfulDataStore;