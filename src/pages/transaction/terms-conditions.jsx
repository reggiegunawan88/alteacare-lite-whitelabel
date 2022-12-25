import React from 'react';

import Div100vh from 'react-div-100vh';

import BackNavigation from '@/components/Reusable/BackNavigation';
import getTermsCondition from '@/services/TnC/getTermsCondition';

const TermsConditions = props => {
  const { data } = props;
  return (
    <Div100vh className="flex flex-col">
      <BackNavigation title="Syarat &amp; Ketentuan" />
      <div className="overflow-auto flex-1">
        <div
          className="flex flex-col p-4 space-y-2 text-sm leading-4 text-dark-1"
          dangerouslySetInnerHTML={{ __html: data?.data?.text }}
        ></div>
      </div>
    </Div100vh>
  );
};

export async function getServerSideProps() {
  const data = await getTermsCondition();
  return {
    props: { data }
  };
}

export default TermsConditions;
