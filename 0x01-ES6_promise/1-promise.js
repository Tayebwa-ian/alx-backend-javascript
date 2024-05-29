export default function getFullResponseFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      throw Error('The fake API is not working currently');
    }
  });
}
