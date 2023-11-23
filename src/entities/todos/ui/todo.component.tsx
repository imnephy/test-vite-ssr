import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export const Todos = () => {
  const [page, setPage] = useState(0)

  const fetchProjects = async (page_ = 0) => {
    const limit = 10
    const skip = limit * page_
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)

    return res.json()
  }

  const { isPending, isError, error, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => {
      return fetchProjects(page)
    },
    placeholderData: keepPreviousData,
    staleTime: 10_000,
  })

  return (
    <div>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.products.map((item: any) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        type="button"
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setPage((old) => old + 1)
        }}
        // Disable the Next Page button until we know a next page is available
      >
        Next Page
      </button>
      {/* {isFetching ? <span> Loading...</span> : null}{' '} */}
    </div>
  )
}
