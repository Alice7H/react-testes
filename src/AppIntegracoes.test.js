import React from "react";
import { findByText, render, screen } from "@testing-library/react";
import api from "./api";
import App from "./App";

jest.mock('./api');

describe('Requisições para API', ()=>{
  test('Exibir lista de transações através da API', async () => {
    api.listaTransacoes.mockResolvedValue([
      {
        "valor": "10",
        "transacao": "saque",
        "data": "10/08/2020",
        "id": 1
      },
      {
        "transacao": "deposito",
        "valor": "20",
        "data": "26/09/2020",
        "id": 2
      }
    ]);

    render(<App />);
    const res = await screen.findByText('saque'); 
    expect(res).toBeInTheDocument();
    expect(screen.getByTestId('transacoes').children.length).toBe(2);
  });
})