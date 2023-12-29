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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Submitted:', { name, email, writing });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, writing }),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-3xl font-roboto text-blue-100 font-bold"
          style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}
        >
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Full Name"
          className="mt-1 p-4 w-full rounded-md font-roboto text-lg bg-blue-50 bg-opacity-80 text-opacity-70"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-3xl font-roboto text-blue-100 font-bold"
          style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}
        >
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="nameFull@example.com"
          className="mt-1 p-4 w-full rounded-md font-roboto text-lg bg-blue-50 bg-opacity-80 text-opacity-70"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="writing"
          className="block text-3xl font-roboto text-blue-100 font-bold"
          style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}
        >
          Your Message:
        </label>
        <textarea
          id="writing"
          name="writing"
          value={writing}
          onChange={handleChange}
          placeholder="Message here"
          className="mt-1 p-4 w-full rounded-md font-roboto text-lg bg-blue-50 bg-opacity-80 text-opacity-70"
          rows={6}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-brand-blue-700 py-4 px-8 rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-blue-100 hover:bg-blue-900 hover:text-blue-100 hover:shadow-lg transition-all duration-500 ease-in-out font-bold mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;