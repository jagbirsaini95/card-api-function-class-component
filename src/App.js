import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Count from './Count'
import ListTry from './ListTry'
import Person from './Person'
import App1 from './App1'
import UseEffectDidupdate from './components/UseEffectDidupdate';
import UseEffectDidMount from './components/UseEffectDidMount';
import UseEffectWillunMount from './components/UseEffectWillunMount';
export default function App() {
  return (<>
  <h1>routing</h1>
    <ol >
      <li> <Link to='/count'>Counter</Link><br /></li>
      <li><Link to='/listtry'>listry program key with map</Link><br /></li>
      <li><Link to='/person'>assignment program</Link><br /></li>
      <li><Link to='/didmount'>UseEffectDidmount</Link><br /></li>
      <li> <Link to='/didupdate'>UseEffectDidupdate</Link><br /></li>
      <li> <Link to='/willunmount'>UseffectWillunmount</Link><br /></li>
      <li> <Link to='/combineexample'>counter and two way binding</Link><br /></li>
    </ol>
    <Routes>
      <Route path='/count' element={<Count />} />
      <Route path='/listtry' element={<ListTry />} />
      <Route path='/didmount' element={<UseEffectDidMount />} />
      <Route path='/didupdate' element={<UseEffectDidupdate />} />
      <Route path='/willunmount' element={<UseEffectWillunMount />} />
      <Route path='/combineexample' element={<App1 />} />
      <Route path='/person' element={<Person name='jagbir singh' />} />
    </Routes>
  </>
  )
}