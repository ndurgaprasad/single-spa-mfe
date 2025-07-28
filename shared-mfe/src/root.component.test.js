import { render } from '@testing-library/react';
import SharedMfe from './root.component';

describe('Root component', () => {
  it('should be in the document', () => {
    const { getByText } = render(<SharedMfe name="Testapp" />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
