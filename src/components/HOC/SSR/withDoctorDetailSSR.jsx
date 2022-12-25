import getDoctorDetail from '@/services/Doctor/getDoctorDetail';
import getTimeSlot from '@/services/Doctor/getTimeSlot';

const withDoctorDetailSSR = gssp => {
  return async ctx => {
    if (ctx.query.id !== undefined || ctx.query.id !== '') {
      const { id } = ctx.query;
      // get current date
      const date = new Date();
      const currentDate = date.setDate(date.getDate());
      const currentDateString = new Date(currentDate).toISOString().slice(0, 10);
      // conditional assign to selected date
      const selectedDate = ctx.query?.date || currentDateString;
      const queryParams = { docId: id, selectedDate };
      // try catch doctor time slot
      let timeslot = null;
      try {
        timeslot = await getTimeSlot(queryParams);
      } catch (error) {
        timeslot = null;
      }
      // try catch doctor detail data
      let doctorData = null;
      try {
        doctorData = await getDoctorDetail(id);
      } catch (error) {
        doctorData = null;
      }
      const ssrTimeSlot = timeslot;

      return {
        props: { doctorData, ssrTimeSlot }
      };
    }

    const gsspData = await gssp(ctx);

    return {
      props: {
        ...gsspData.props,
        redirect: {
          permanent: true,
          destination: '/' // should change to 404 later
        }
      }
    };
  };
};

export default withDoctorDetailSSR;
