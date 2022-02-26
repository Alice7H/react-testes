import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App';

describe('Componente principal', () => {
  describe('Quando eu abro o app do banco', ()=>{
    it('O nome é exibido', ()=>{
      render(<App/>);
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    })
    test('O saldo é exibido', ()=>{
      render(<App/>);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    })
    test('O botão de realizar operação é exibido.', ()=>{
      render(<App/>);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    })
  })
  describe('Quando realizo uma transação', ()=>{
    test('que é um saque, o saldo diminui', ()=>{
      const valores = {
        transacao: 'saque',
        valor: 50
      }
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    })
    test('que é um saque, sem saldo na conta, o saldo não deve mudar', ()=>{
      const valores = {
        transacao: 'saque', 
        valor: 50
      }
      const novoSaldo = calcularNovoSaldo(valores, 0)
      expect(novoSaldo).toBe(0);
    })
    test('que é de depósito, o saldo aumenta', ()=>{
      const valores = {
        transacao: 'deposito',
        valor: 50
      }
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(200);
    })  
    test('que é um saque, a transação deve ser realizada', ()=>{
      const { getByText, getByTestId, getByLabelText } = render(<App/>);

      const saldo = getByText('R$ 1000');
      const transacao = getByLabelText('Saque');
      const valor = getByTestId('valor');
      const botaoTransacao = getByText('Realizar operação');
      
      expect(saldo.textContent).toBe('R$ 1000');
      
      fireEvent.click(transacao, { target: {value: 'saque'}});
      fireEvent.change(valor, { target: {value: 10 }});
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe('R$ 990');
    })
    test('que é um saque, sem saldo na conta, a transação não deve ser realizada', ()=>{
      const { getByText, getByTestId, getByLabelText } = render(<App/>);
      
      const saldo = getByText('R$ 1000');
      const transacao = getByLabelText('Saque');
      const valor = getByTestId('valor');
      const botaoTransacao = getByText('Realizar operação');

      expect(saldo.textContent).toBe('R$ 1000');

      fireEvent.click(transacao, { target: {value: 'saque'}});
      fireEvent.change(valor, { target: {value: 10000 }});
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe('R$ 1000');
    })
  })
})

