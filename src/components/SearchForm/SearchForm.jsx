export const SearchForm = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="input"
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
