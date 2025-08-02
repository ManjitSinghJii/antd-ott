import React from 'react'
import ButtonAnd from './components/ButtonAnd'
import CardAnt from './components/CardAnt'
import ModelAnt from './components/ModelAnt'
import DrawerAnt from './components/DrawerAnt'
import FormAnt from './components/FormAnt'
import TableAnt from './components/TableAnt'
import AdminLayout from './components/AdminLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='min-h-screen'>
      {/* <ButtonAnd/> */}
      {/* <CardAnt/> */}
      {/* <ModelAnt/> */}
      {/* <DrawerAnt/> */}
      {/* <FormAnt/> */}
      {/* <TableAnt/> */}
      {/* <AdminLayout/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLayout/>} />
          <Route path='/products' element={<FormAnt/>} />
          <Route path='/orders' element={<ModelAnt/>} />
          <Route path='/' element={<CardAnt/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App