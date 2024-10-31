import { NoticesFilter } from 'components/NoticesPageComponents/NoticesFilter/NoticesFilter';
import { Title } from './NoticesPage.styled';
import { NoticesList } from 'components/NoticesPageComponents/NoticesList/NoticesList';

export default function NoticesPage() {
  return (
    <section>
      <Title>Find your favorite pet</Title>
      <NoticesFilter />
      <NoticesList />
    </section>
  );
}
