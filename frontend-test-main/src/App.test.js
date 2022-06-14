import {render, screen }  from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/React Axios example - netlify 11/06/2022/i);
    expect(linkElement).toBeInTheDocument();

    expect(screen.queryByText('React Axios example - netlify 11/06/2022/')).not.toBe(null);

    expect(screen.getAllByText('React Axios example - netlify 11/06/2022/').length).toBe(1);

    expect(await screen.findByText('React Axios example - netlify 11/06/2022/')).toBeInTheDocument();

    const linkElementTestId = screen.getByTestId("App");
    expect(linkElementTestId).toBeInTheDocument();
});
