import withHomeSSR from '@/components/HOC/SSR/withHomeSSR';
import GroupWidgets from '@/components/pages/Home/GroupWidgets';
import HomeLayout from '@/layouts/Home';

const Home = () => {
  return (
    <div className="overflow-auto flex-1 pt-5 mx-4 hide-scrollbar">
      <GroupWidgets />
    </div>
  );
};

Home.getLayout = page => {
  return <HomeLayout>{page}</HomeLayout>;
};

export const getServerSideProps = withHomeSSR(() => {
  return { props: {} };
});

export default Home;
