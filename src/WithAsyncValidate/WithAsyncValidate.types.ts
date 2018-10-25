export interface IWithAsyncValidateFormValues {
  email: string;
}

export interface IWithAsyncValidateProps {
  loadPosts: () => Promise<any>;
}
