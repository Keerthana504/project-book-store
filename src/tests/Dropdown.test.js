import { render, screen } from '@testing-library/react'
import Dropdown from '../components/Dropdown';

test("Example 1 renders successfully", () => {
    render(<Dropdown props={props["titles"]}/>);

    const element = screen.getByText(/harry potter/i);

    expect(element).toBeInTheDocument();
})

