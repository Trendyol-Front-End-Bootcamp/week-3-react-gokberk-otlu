import { render, screen, fireEvent } from '@testing-library/react';
import FilterChars from '../../components/FilterChars';

const mockedFetchWithStatus = jest.fn();

it('should check and uncheck radio button', () => {
    render(
        <FilterChars
            fetchWithStatus={mockedFetchWithStatus}
        />
    );
    const radio = screen.getAllByRole('radio')[0];
    expect(radio).not.toBeChecked();
    fireEvent.click(radio);
    expect(radio).toBeChecked();
})