import { NewsList } from 'components/NewsPageComponents/NewsList/NewList';
import { SearchBar } from 'components/NewsPageComponents/SearchBar/SearchBar';

export default function NewsPage() {
  return (
    <section>
      <SearchBar />
      <NewsList />
    </section>
  );
}
