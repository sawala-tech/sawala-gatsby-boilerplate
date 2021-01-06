import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center font-sans absolute inset-x-0 bottom-0 h-10">
      © {new Date().getFullYear()} - Built with
      {` `}
      <svg
        className="w-5 h-5 inline-block mb-1 text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {' by '}
      <a
        className="text-blue-500 hover:text-blue-600"
        href="https://github.com/andrijunaedi"
      >
        Andri Junaedi
      </a>
    </footer>
  )
}
