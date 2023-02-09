export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface ColumnsProps<T> {
  title: string;
  dataIndex: keyof T | string;
  key: string;
  render?: (text: string, record: Post, index: number) => React.ReactNode;
}
