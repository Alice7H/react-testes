import React from 'react';
import { render, screen } from '@testing-library/react';
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
    test('que é um saque, sem saldo na conta, o saldo diminui.', ()=>{
      const valores = {
        transacao: 'saque', 
        valor: 50
      }
      const novoSaldo = calcularNovoSaldo(valores, 0)
      expect(novoSaldo).toBe(-50);
    })
    test('que é de depósito, o saldo aumenta', ()=>{
      const valores = {
        transacao: 'deposito',
        valor: 50
      }
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(200);
    })  
  })
})

