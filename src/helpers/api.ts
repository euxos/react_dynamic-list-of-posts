const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-posts/api';

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  address: {
    city: string;
    street: string;
    suite: string;
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getAll = <T>(url: string): Promise<T[]> => {
  return fetch(API_URL + url).then(response => response.json());
}

export const getUsers = () => getAll<User>('/users.json');
export const getPosts = () => getAll<Post>('/posts.json');
export const getComments = () => getAll<Comment>('/comments.json');

