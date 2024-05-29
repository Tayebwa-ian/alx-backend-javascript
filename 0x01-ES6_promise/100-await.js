import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([
    await createUser(), await uploadPhoto(),
  ]).then((data) => ({
    photo: data[1],
    user: data[0],
  })).catch(() => ({
    photo: null,
    user: null,
  }));
}
