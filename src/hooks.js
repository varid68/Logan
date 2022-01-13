/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react'
import axios from 'axios'

export const useLoadMore = (prefix) => {
  const [list, setList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(1)

  useEffect(() => {
    getList()
  }, [currentPage])

  const execute = () => setCurrentPage(currentPage + 1)

  const getList = () => {
    if (count == list.length || count < list.length) {
      setIsLoading(false)
      return
    }

    setIsLoading(true)

    axios.get(`https://randomuser.me/${prefix}/?page=${currentPage}&results=10`)
      .then((res) => {
        setCount(32)
        setList([...list, ...res.data.results])
      })
  }

  return { execute, list, isLoading }
}
