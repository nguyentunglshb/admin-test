export interface HttpResponse<T> {
  status: number;
  statusText: string;
  data: T;
}
