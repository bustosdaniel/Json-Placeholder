const URL = 'https://jsonplaceholder.typicode.com'

export const getPosts = () => {
  const enpoint = `${URL}/posts`
  return fetch(enpoint)
  .then((response) => {
    return response.json()
  })
  .then((res) => {
    return res
  })
  .catch(error => console.error(error))
}