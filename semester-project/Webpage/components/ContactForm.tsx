"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [writing, setWriting] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'writing') {
            setWriting(value);
        }
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Submitted:', { name, email, writing });

        // send data to server (will implement later)
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">

            <div className="mb-4">
                <label
                    htmlFor="writing"
                    className="block text-2xl font-roboto text-blue-900 font-bold"
                    style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}
                >
                    Your Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name . . ."
                    className="mt-1 p-2 w-full rounded-md font-roboto text-base bg-blue-50 bg-opacity-80 text-opacity-70 italic"
                    required
                />

            </div>

            <div className="mb-4">
                <label
                    htmlFor="writing"
                    className="block text-2xl font-roboto text-blue-900 font-bold"
                    style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}
                >
                    E-mail:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mail@example.com"
                    className="mt-1 p-2 w-full rounded-md font-roboto text-base bg-blue-50 bg-opacity-80 text-opacity-70 italic"
                    required
                />


            </div>

            <div className="mb-4">
                <label
                    htmlFor="writing"
                    className="block text-2xl font-roboto text-blue-900 font-bold"
                    style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}
                >
                    Your Message:
                </label>
                <textarea
                    id="writing"
                    name="writing"
                    value={writing}
                    onChange={(e) => setWriting(e.target.value)}
                    placeholder="Message here . . ."
                    className="mt-1 p-2 w-full rounded-md font-roboto text-base bg-blue-50 bg-opacity-80 text-opacity-70 italic"
                    rows={6}
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="text-brand-blue-700 py-2 px-4 rounded-md text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl bg-blue-100 hover:bg-blue-900 hover:text-blue-100 hover:shadow-lg transition-all duration-300 ease-in-out font-bold mx-auto"
            >
                Submit
            </button>

        </form>
    );
};

export default ContactForm;