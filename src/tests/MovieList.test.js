import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import MoviesList from "../components/MoviesList";
import { Provider } from 'react-redux';
import store from '../store/store';

jest.mock('../assets/images/loading.gif', () => 'loading.gif');

describe('MovieList', () => {

    test('is MovieList component rendered', () => {
        const { container } = render(
            <Provider store={store}>
                <MoviesList />
            </Provider>
        );
        expect(container).toBeInTheDocument();
    });
});