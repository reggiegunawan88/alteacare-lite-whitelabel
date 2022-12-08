import React from 'react';

import BackNavLayout from '@/layouts/BackNav';
import getTermsCondition from '@/services/TnC/getTermsCondition';

const TermsConditions = props => {
  const { data } = props;
  return (
    <div
      className="flex flex-col p-4 space-y-2 text-sm leading-4 text-dark-1"
      dangerouslySetInnerHTML={{ __html: data?.data?.text }}
    ></div>
  );
};

export async function getServerSideProps() {
  const data = await getTermsCondition();
  return {
    props: { data }
  };
}

TermsConditions.getLayout = page => {
  return <BackNavLayout title="Syarat &amp; Ketentuan">{page}</BackNavLayout>;
};

export default TermsConditions;
