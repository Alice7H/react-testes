import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Conta from './Conta';

describe('Componente de conta', ()=>{
  test('Exibir o saldo da conta com a formatação monetária', ()=>{
    render(<Conta saldo={1000} />);
    const saldo = screen.getByTestId('saldo-conta');

    expect(saldo.textContent).toBe('R$ 1000');
  })

  test('Chama a função de realizar transação, quando o formulário está preenchido', ()=>{
    const funcaoRealizarTransacao = jest.fn()

    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao}/>)
    
    fireEvent.click(screen.getByLabelText('Depósito'));
    fireEvent.change(screen.getByTestId('valor'), { target: { value: 100 } });
    fireEvent.click(screen.getByText('Realizar operação'));

    expect(funcaoRealizarTransacao).toHaveBeenCalled();
  })

  test('Não chama a função de realizar transação, quando o formulário não está totalmente preenchido', ()=>{
    const funcaoRealizarTransacao = jest.fn();
    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao}/>);
    
    fireEvent.click(screen.getByLabelText('Depósito'));
    fireEvent.click(screen.getByText('Realizar operação'));
    expect(funcaoRealizarTransacao).not.toHaveBeenCalled();
  })
})