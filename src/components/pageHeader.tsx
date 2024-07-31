import React from 'react'

export default function PageHeader({children}:{children : React.ReactNode}) {
  return (
      <div className='font-medium text-xl p-3 '>
          {children}
    </div>
  )
}
