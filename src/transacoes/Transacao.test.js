import React from 'react';
import { render } from '@testing-library/react';
import Transacao from './Transacao';

describe('Componente de transação do extrato', ()=>{
  test('o snapshot do component deve permanecer sempre o mesmo', 
  ()=> {
    const { container } = render(<Transacao 
      data="25/02/2022" 
      tipo="saque" 
      valor="20.00"
    />)

    expect(container.firstChild).toMatchSnapshot();
  })
})