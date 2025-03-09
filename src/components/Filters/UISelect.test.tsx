import { render, screen, fireEvent } from '@testing-library/react';
import UISelect from './UISelect';
import { useSearchFilters } from '@/hooks/useSearchFilters';

// Mock the useSearchFilters hook
jest.mock('@/hooks/useFilters', () => ({
  useSearchFilters: jest.fn()
}));

describe('UISelect Component', () => {
  const mockUpdateFilter = jest.fn();
  
  beforeEach(() => {
    // Setup the mock implementation for useSearchFilters
    (useSearchFilters as jest.Mock).mockReturnValue({
      updateFilter: mockUpdateFilter
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct label and options', () => {
    const props = {
      id: 'genre',
      label: 'Genre',
      value: 'Any',
      options: ['Action', 'Comedy', 'Drama']
    };

    render(<UISelect {...props} />);
    
    // Check if label is rendered
    expect(screen.getByText('Genre')).toBeInTheDocument();
    
    // Check if all options are rendered
    expect(screen.getByRole('option', { name: 'Any' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Action' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Comedy' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Drama' })).toBeInTheDocument();
  });

  it('selects the correct default value', () => {
    const props = {
      id: 'genre',
      label: 'Genre',
      value: 'Comedy',
      options: ['Action', 'Comedy', 'Drama']
    };

    render(<UISelect {...props} />);
    
    // Check if the select has the correct value
    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
    expect(selectElement.value).toBe('Comedy');
  });

  it('calls updateFilter when selection changes', () => {
    const props = {
      id: 'genre',
      label: 'Genre',
      value: 'Any',
      options: ['Action', 'Comedy', 'Drama']
    };

    render(<UISelect {...props} />);
    
    // Simulate changing the select value
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'Comedy' } });
    
    // Check if updateFilter was called with correct parameters
    expect(mockUpdateFilter).toHaveBeenCalledWith('genre', 'Comedy');
  });

  it('formats option text correctly', () => {
    const props = {
      id: 'status',
      label: 'Status',
      value: 'Any',
      options: ['FINISHED', 'RELEASING', 'NOT_YET_RELEASED']
    };

    render(<UISelect {...props} />);
    
    // Check if text is formatted correctly (assuming formatText converts to Title Case)
    expect(screen.getByText('Finished')).toBeInTheDocument();
    expect(screen.getByText('Releasing')).toBeInTheDocument();
    expect(screen.getByText('Not Yet Released')).toBeInTheDocument();
  });
});