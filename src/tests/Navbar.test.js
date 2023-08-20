import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {

    const renderedNavbar = () => render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    );

    test('is navbar rendered', () => {
        const { container } = renderedNavbar();
        expect(container).toBeInTheDocument();
    });

    test('is search field present', () => {
        renderedNavbar();
        screen.getByPlaceholderText('Search');
    });

    test('is home icon present', () => {
        renderedNavbar();
        screen.getByTestId('home-link');
    });
});