import dayjs from "dayjs";

export const formatDate = (dateString: string, format?: string) => {
  return format ? dayjs(dateString, format) : dayjs(dateString, "DD/MM/YYYY");
};
