import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/';
import App from './App';

describe('App', () => {
  it('upon click, link takes user to a list of names', async () => {
    render(
      <MemoryRouter
        initialEntries={['/', '/list', '/detail/1']}
        initialIndex={0}
      >
        <App />
      </MemoryRouter>
    );
    const listLink = screen.getByText('Character List');
    expect(listLink).toBeInTheDocument();
  });
});
// describe('App', () => {
//   it('Character name in a link that takes user to a list of details', async () => {
//     render(
//       <MemoryRouter>
//         <App />
//       </MemoryRouter>
//     );
//     characterList = screen.getByText('Name: Rick Sanchez');
//     expect(characterList).toBeInTheDocument();
//   });
// describe('App', async () => {
//   it('displays character image', () => {
//     render(
//       <MemoryRouter>
//         <App />
//       </MemoryRouter>
//     );
//     const image = screen.getByAltText('image');
//     expect(image).toBeInTheDocument();
//   });
// });
