import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar', () => {

    test('is navbar rendered', () => {
        const { container } = render(<Navbar />);
        expect(container).toBeInTheDocument();
    });

    test('is search field present', () => {
        render(<Navbar />);
        screen.getByPlaceholderText('Search');
    });

    test('is home icon present', () => {
        render(<Navbar />);
        screen.getByRole('svg');
    });
});