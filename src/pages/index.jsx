import GroupWidgets from '@/components/pages/Home/GroupWidgets';
import Searchbar from '@/components/pages/Home/Searchbar';
import HomeLayout from '@/layouts/Home';

const Index = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="absolute top-0 z-50 px-4 w-full bg-light-4">
        <Searchbar />
      </div>
      <div className="flex-1 pt-31 mx-4 hide-scrollbar">
        <GroupWidgets />
      </div>
    </div>
  );
};

Index.getLayout = page => {
  return <HomeLayout>{page}</HomeLayout>;
};

export async function getServerSideProps(ctx) {
  const { res, query } = ctx;
  if (query?.alt_user_token || query?.alt_refresh_token) {
    res.setHeader(
      'set-cookie',
      [`alt_user_token=${query?.alt_user_token}`, `alt_refresh_token=${query?.alt_refresh_token}`],
      {
        path: '/',
        maxAge: 60 * 60 * 24 * 3,
        secure: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'
      }
    );
  }
  return { props: {} };
}

export default Index;
