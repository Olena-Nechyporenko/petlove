import { NewsList } from 'components/NewsList/NewList';
import { SearchBar } from 'components/SearchBar/SearchBar';

export default function NewsPage() {
  return (
    <section>
      <SearchBar />
      <NewsList />
    </section>
  );
}
