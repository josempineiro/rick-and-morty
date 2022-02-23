import { createContext, useContext } from 'react'

const TableContext = createContext({})

export const useTable = () => useContext(TableContext)

export default TableContext
