import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import {
  StarIcon,
  BookOpenIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  RssIcon,
  CheckCircleIcon,
  NewspaperIcon,
  CollectionIcon,
} from '@heroicons/react/outline'

//Stores insight information. Add block to create a new card. Must assign it a relevant category to appear in when filtered.

const insights = [
  {
    name: 'My best client',
    icon: <StarIcon />,
    image: 'https://source.unsplash.com/random/800x600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi purus, auctor quis nulla ut, laoreet egestas mauris. Proin a.',
    category: ['all', 'article', 'feature'],
  },
  {
    name: 'My favorite case',
    icon: <VideoCameraIcon />,
    image: 'https://source.unsplash.com/random/800x600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi purus, auctor quis nulla ut, laoreet egestas mauris. Proin a. uis nulla ut, laoreet egestas mauris. Proin a. ',
    category: ['all', 'video', 'article'],
  },
  {
    name: 'A old job',
    icon: <BookOpenIcon />,
    image: 'https://source.unsplash.com/random/800x600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi purus, auctor quis nulla ut, laoreet egestas mauris. Proin a.',
    category: ['all', 'article'],
  },
  {
    name: 'It is a really cool',
    icon: <RssIcon />,
    image: 'https://source.unsplash.com/random/800x600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi purus, auctor quis nulla ut, laoreet egestas mauris. Proin a.',
    category: ['all', 'radio'],
  },
  {
    name: 'Something more',
    icon: <MicrophoneIcon />,
    image: 'https://source.unsplash.com/random/800x600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi purus, auctor quis nulla ut, laoreet egestas mauris. Proin a.',
    category: ['all', 'interview'],
  },
]

//Filter function. Maps the insight information to filter.

function InsightsFilter() {
  const [filter, setFilter] = useState('all')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(insights)
  }, [])
  useEffect(() => {
    setProjects([])
    const filtered = insights.map((p) => ({ ...p, filtered: p.category.includes(filter) }))
    setProjects(filtered)
  }, [filter])

  return (
    <div className="container">
      {/* Filter buttons */}
      <div className="mb-10 grid grid-cols-4 gap-2 lg:gap-0 lg:flex lg:flex-row lg:h-14 border-8 lg:border-4 border-white dark:border-indigo-light dark:bg-indigo-light shadow-md rounded-lg lg:float-left lg:pb-0 lg:justify-self-auto lg:mb-10 lg:bg-white">
        <button
          className="ml-0 whitespace-nowrap inline-flex items-center justify-center  px-2 py-6 lg:px-6 lg:py-6 xl:px-2 xl:py-2 border border-transparent lg:rounded-none lg:rounded-tl-md lg:rounded-bl-md rounded-md shadow-sm text-xs font-medium text-white bg-kikorangi-default shadow hover:bg-kikorangi-light hover:shadow-inner"
          active={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          <CheckCircleIcon className="h-6 w-6 mb-1 xl:mr-10 lg:mb-2 xl:mb-0 lg:h-5 lg:w-5" />
          <span className="absolute pt-10 lg:pb-2 xl:pb-0 xl:pt-1 xl:ml-2">All</span>
        </button>
        <button
          className="ml-0 lg:ml-2 whitespace-nowrap inline-flex items-center justify-center px-2 py-6 lg:px-6 lg:py-6 xl:px-2 xl:py-2 border border-transparent rounded-md lg:rounded-none shadow-sm text-xs font-medium text-white bg-kowhai-default shadow hover:bg-kowhai-light hover:shadow-inner"
          active={filter === 'article'}
          onClick={() => setFilter('article')}
        >
          <BookOpenIcon className="h-6 w-6 mb-1 lg:mb-2 xl:mr-11 xl:mb-0 lg:h-5 lg:w-5" />
          <span className="absolute pt-10 lg:pb-2 xl:pb-0 xl:pt-1 xl:ml-6">Article</span>
        </button>
        <button
          className="ml-0 whitespace-nowrap inline-flex items-center justify-center px-2 py-6 lg:px-6 lg:py-6 xl:px-2 xl:py-2 border border-transparent rounded-md lg:rounded-none shadow-sm text-xs font-medium text-white bg-kowhai-default shadow hover:bg-kowhai-light hover:shadow-inner"
          active={filter === 'radio'}
          onClick={() => setFilter('radio')}
        >
          <RssIcon className="h-6 w-6 mb-1 lg:mb-2 xl:mr-10 xl:mb-0 lg:h-5 lg:w-5" />
          <span className="absolute pt-10 lg:pb-2 xl:pb-0 xl:pt-1 xl:ml-4">Radio</span>
        </button>
        <button
          className="ml-0 whitespace-nowrap inline-flex items-center justify-center px-2 py-6 lg:px-6 lg:py-6 xl:px-2 xl:py-2 border border-transparent rounded-md lg:rounded-none  shadow-sm text-xs font-medium text-white bg-kowhai-default shadow hover:bg-kowhai-light hover:shadow-inner"
          active={filter === 'video'}
          onClick={() => setFilter('video')}
        >
          <VideoCameraIcon className="h-6 w-6 mb-1 lg:mb-2 xl:mr-12 xl:mb-0 lg:h-5 lg:w-5" />
          <span className="absolute pt-10 lg:pb-2 xl:pb-0 xl:pt-1 xl:ml-4">Video</span>
        </button>
        <button
          className="ml-0 lg:ml-2 whitespace-nowrap inline-flex items-center justify-center px-2 py-6 lg:px-6 lg:py-6 lg:order-last xl:px-2 xl:py-2 border border-transparent rounded-md lg:rounded-none lg:rounded-r-md  shadow-sm text-xs font-medium text-white bg-beige-default shadow hover:bg-beige-light hover:shadow-inner"
          active={filter === 'others'}
          onClick={() => setFilter('others')}
        >
          <CollectionIcon className="h-6 w-6 mb-1 lg:mb-2 xl:mr-10 xl:mb-0 lg:h-5 lg:w-5" />
          <span className="absolute pt-10 lg:pb-2 xl:pb-0 xl:pt-1 xl:ml-6">Other</span>
        </button>
        <button
          className="ml-0 lg:ml-2 whitespace-nowrap inline-flex items-center justify-center px-2 py-6 lg:px-6 lg:py-6 xl:px-2 xl:py-2 border border-transparent rounded-md lg:rounded-none  shadow-sm text-xs font-medium text-white bg-whero-default shadow hover:bg-whero-light hover:shadow-inner"
          active={filter === 'interview'}
          onClick={() => setFilter('interview')}
        >
          <MicrophoneIcon className="h-6 w-6 mb-1 lg:mb-2 xl:mr-14 xl:mb-0 lg:h-5 lg:w-5" />
          <span className="absolute pt-10 lg:pb-2 xl:pb-0 xl:pt-1 xl:ml-6">Interview</span>
        </button>
        <button
          className="ml-0 whitespace-nowrap inline-flex items-center justify-center px-2 py-6 lg:px-6 lg:py-6 xl:px-2 xl:py-2 border border-transparent rounded-md lg:rounded-none  shadow-sm text-xs font-medium text-white bg-whero-default shadow hover:bg-whero-light hover:shadow-inner"
          active={filter === 'news'}
          onClick={() => setFilter('news')}
        >
          <NewspaperIcon className="h-6 w-6 mb-1 lg:mb-2 xl:mr-10 xl:mb-0 lg:h-5 lg:w-5" />
          <span className="absolute pt-10 lg:pb-2 xl:pb-0 xl:pt-1 xl:ml-5">News</span>
        </button>
        <button
          className="ml-0 whitespace-nowrap inline-flex items-center justify-center px-2 py-6 lg:px-6 lg:py-6 xl:px-2 xl:py-2 border border-transparent rounded-md lg:rounded-none shadow-sm text-xs font-medium text-white bg-whero-default shadow hover:bg-whero-light hover:shadow-inner"
          active={filter === 'feature'}
          onClick={() => setFilter('feature')}
        >
          <StarIcon className="h-6 w-6 mb-1 lg:mb-2 xl:mr-12 xl:mb-0 lg:h-5 lg:w-5" />
          <span className="absolute pt-10 lg:pb-2 xl:pb-0 xl:pt-1 xl:ml-6">Feature</span>
        </button>
      </div>
      {/* Insights card */}

      <div className="grid grid-cols-2 w-full gap-4 sml:grid-cols-3 sml:w-screen sml:pr-8 ipad:grid-cols-3 ipad:gap-4 ipad:pr-0 ipad:w-full lg:grid-cols-4 lg:w-full lg:pr-0 lg:ml-2 xl:ml-0 xl:grid-cols-4 xl:w-full xl:pr-2">
        {projects.map((item) =>
          item.filtered === true ? (
            <div className="border border-transparent rounded-md shadow-lg dark:border dark:border-gray-900 dark:bg-indigo-light bg-white">
              <div>
                <img
                  className="border border-transparent rounded-t-md w-full"
                  key={item.image}
                  src={item.image}
                  alt=""
                />
                <div className="flex flex-row xxs:space-x-0 ipad:space-x-1">
                  <div className="flex-shrink-0 ml-1.5 h-8 w-8 mt-2 bg-gray-100 shadow-sm dark:bg-gray-700 rounded-2xl">
                    <svg
                      className="h-5 w-5 mt-1.5 ml-1.5 text-gray-900 dark:text-white"
                      key={item.icon}
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h1
                    className="pr-2 pl-1 pt-3 lg:pr-2 lg:pl-1 xxs:text-md ipad:text-lg font-medium text-gray-800 dark:text-gray-100 font-sans lg:pt-3"
                    key={item.name}
                  >
                    {item.name}
                  </h1>
                </div>
                <p
                  className="pr-2 pl-2 pt-4 pb-4 text-sm text-gray-800 dark:text-gray-400 font-serif"
                  key={item.description}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ) : (
            ''
          )
        )}
      </div>
    </div>
  )
}

export default InsightsFilter
