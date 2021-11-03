import { render, screen, fireEvent } from '@testing-library/react';
import Calculadora from './calculadora';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora', () => {

    test('deve renderizar o componente sem erros', () => {
        render(<Calculadora />);
    });

    it('deve limpar o campo de numeros', () => {
        const { getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('C'));
        expect(getByTestId('txtNumeros')).toHaveValue('0');
    });

    it('deve somar 2 + 3 e obter 5', () => {
        const { getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('5');
    });
      
});

