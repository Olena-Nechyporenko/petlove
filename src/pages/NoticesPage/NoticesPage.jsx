import { NoticesFilter } from 'components/NoticesFilter/NoticesFilter';
import { Title } from './NoticesPage.styled';
import { NoticesList } from 'components/NoticesList/NoticesList';

export default function NoticesPage() {
  return (
    <section>
      <Title>Find your favorite pet</Title>
      <NoticesFilter />
      <NoticesList />
    </section>
  );
}
