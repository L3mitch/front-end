import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroComponent from './Component/IntroComponent'
import EventComponent from './Component/EventComponent'
import ConditionalComponent1 from './Component/ConditionalComponent1'
import ConditionalComponent2 from './Component/ConditionalComponent2'
import ProductComponent from './Component/ProductComponent'
import GenericComponent from './Component/GenericComponent'
import MyButtonComponent from './Component/MyButtonComponent'
import UseStateComponent1 from './Component/UseStateComponent1'


function App() {
let component;
let condition = true;
const products = [
  { id: 1, name: 'Laranja'},
  { id: 2, name: 'Uva'},
  { id: 3, name: 'Maçã'},
];
//PRIMEIRA FORMA
const listItems = products.map((product) =>
  <li key={product.id}>
    {product.name}
  </li>
);

if (condition) {
  component = <ConditionalComponent1 />
}
else { 
  component = <ConditionalComponent2 />
}

  return (
   <>
   <ul>{listItems}</ul>
   {component}

   <div>
    {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}
   </div>
   <ul>
    {products.map((prod) => (
      <li key={prod.id}>{prod.name}</li>
    ))}
    </ul>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.id}</td>
            <td>{prod.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <hr />
    <ProductComponent name="Laranja" category="Fruta" />
    <ProductComponent name="Universo" category="Tudo" />
    <hr />
    <div>
    <GenericComponent>
      <p>Eu sou o primeiro conteúdo fornecido pelo componente pai</p>
      <hr />
    </GenericComponent>
    </div>
    <div>
      <GenericComponent>
        <p>Eu sou o segundo conteúdo fornecido pelo componente pai</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <hr />
      </GenericComponent>
    </div>
    <h1>My button component</h1>
    <MyButtonComponent />
    <hr />
    <h1>Use State component</h1>
    <UseStateComponent1 />
   </>
  )
}

export default App
