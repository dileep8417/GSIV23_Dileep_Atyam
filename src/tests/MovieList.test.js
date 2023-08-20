import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import MoviesList from "../components/MoviesList";


describe('MovieList', () => {

    test('is MovieList component rendered', () => {
        const { container } = render(<MoviesList />);
        expect(container).toBeInTheDocument();
    });
});