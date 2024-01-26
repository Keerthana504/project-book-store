import { render, screen } from '@testing-library/react'
//import FirstTest from '../components/FirstTest';
import Main from '../components/Main';

test("Example 1 renders successfully", () => {
    render(<Main/>);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})

