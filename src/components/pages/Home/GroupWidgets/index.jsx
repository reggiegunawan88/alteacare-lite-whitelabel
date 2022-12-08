import React from 'react';

import dynamic from 'next/dynamic';

import SpecialistCard from '@/components/Card/SpecialistCard';
import SymptomsCard from '@/components/Card/SymptomsCard';
import { widgetType } from '@/constants/widget';
import useGroupWidgets from '@/hooks/components/Home/useSpecialization';

const GroupWidgets = () => {
  const { data, isLoading } = useGroupWidgets();

  if (isLoading) {
    const DynamicHomeLoader = dynamic(() => import('@/components/SkeletonLoader/HomeLoader'));
    return <DynamicHomeLoader />;
  }

  return (
    <div className="flex flex-col space-y-3">
      {/* widget group */}
      {data?.map(widget => (
        <div key={widget.id} className="flex flex-col space-y-2">
          {widgetType.includes(widget.type) && <p className="text-sm font-medium text-dark-1">{widget.title}</p>}
          {widget.type === widgetType[0] && (
            <div className="flex overflow-scroll space-x-2 hide-scrollbar">
              {widget.symptoms?.map(item => (
                <SymptomsCard key={item.id} data={item} query={`keyword=${encodeURIComponent(item.name)}`} />
              ))}
            </div>
          )}
          {widget.type === widgetType[1] && (
            <div className="flex overflow-scroll space-x-2 hide-scrollbar">
              {widget.specializations?.map(item => (
                <SymptomsCard key={item.id} data={item} query={`specializations[]=${item.id}`} />
              ))}
            </div>
          )}
          {widget.type === widgetType[2] && (
            <div className="flex overflow-x-scroll space-x-2 hide-scrollbar">
              {widget.specialization_with_symptoms?.map(item => (
                <SpecialistCard key={item.id} data={item} query={`specializations[]=${item.id}`} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GroupWidgets;
