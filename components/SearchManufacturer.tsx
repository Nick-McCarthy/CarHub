"use client"

import React from 'react'
import { useState, Fragment } from 'react'
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('')

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px]">
            <Image 
              src="/car-logo.svg" 
              width={20} 
              height={20} 
              alt="Car Logo" 
              className="ml-4" 
            />
          </Combobox.Button>
          <Combobox.Input 
            className="search-manufacturer__input" 
            placeholder="Volkswagen" 
            displayValue={(manufacturer: string) => manufacturer} onChange={(e) => setQuery(e.target.value)} 
          />
          <Transition 
            as={Fragment}
            Leave="transition ease-in duration-100"
            LeaveFrom="opacity-100"
            LeaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options></Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer