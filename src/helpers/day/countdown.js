const countdownCalc = scheduleTimestamp => {
  const currentTimestamp = new Date().getTime();
  const diff = scheduleTimestamp - currentTimestamp;
  // calculate time left
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return `${days} hari : ${hours} jam : ${minutes} menit : ${seconds} detik`;
};

export default countdownCalc;
