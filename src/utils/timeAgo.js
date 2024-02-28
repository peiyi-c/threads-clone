export const timeAgo = (timestamp) => {
  const now = Date.now();
  const secondsAgo = Math.floor((now - timestamp) / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo}s`;
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return `${minutesAgo}m`;
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return `${hoursAgo}h`;
  } else if (secondsAgo < 604800) {
    const daysAgo = Math.floor(secondsAgo / 86400);
    return `${daysAgo}d`;
  } else if (secondsAgo < 18144000) {
    const weeksAgo = Math.floor(secondsAgo / 604800); // 7 days in seconds
    return `${weeksAgo}w`;
  } else if (secondsAgo < 6622560000) {
    const monthsAgo = Math.floor(secondsAgo / 18144000); // 30 days in seconds
    return `${monthsAgo}m`;
  } else {
    const yearsAgo = Math.floor(secondsAgo / 6622560000); // 365 days in seconds
    return `${yearsAgo}y`;
  }
};
