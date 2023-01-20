import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
export const MainHeader = () => {
  return (
    <>
<Header title={"Todo's List"} searchBar={true} />
      <Outlet/>
    </>
  )
}
