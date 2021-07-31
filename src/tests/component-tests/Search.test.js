import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../../components/Search';

const mockedFetchWithSearchName = jest.fn();

describe("Search", () => {
    it('should render input element', () => {
        render(
            <Search 
                searchName={''}
                fetchWithSearchName={mockedFetchWithSearchName}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search Name/i);
        expect(inputElement).toBeInTheDocument();
    })

    // it('should be able to type into input', () => {
    //     render(
    //         <Search 
    //             searchName={''}
    //             fetchWithSearchName={mockedFetchWithSearchName}
    //         />
    //     );
    //     const inputElement = screen.getByPlaceholderText(/Search Name/i);
    //     fireEvent.click(inputElement);
    //     fireEvent.change(inputElement, { target: { value: "Deneme" } });
    //     screen.debug();
    //     expect(inputElement.value).toBe("Deneme");
    // });
})