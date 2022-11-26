import {
  Container,
  FormSearch,
  SearchInput,
  SearchButton,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  return (
    <Container>
      <FormSearch onSubmit={onSubmit}>
        <SearchInput
          type="text"
          autoFocus
          name="input"
          placeholder="Enter movie title"
        />
        <SearchButton type="submit">Search</SearchButton>
      </FormSearch>
    </Container>
  );
};
