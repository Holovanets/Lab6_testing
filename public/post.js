const postDetailsContainer = document.getElementById('post-details');

async function fetchPostDetails(postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }

    const post = await response.json();

    if (postDetailsContainer) {
      postDetailsContainer.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
    }
  } catch (error) {
    if (postDetailsContainer) {
      postDetailsContainer.innerHTML = '<p>Пост не завантажується. Сєрвак спить.</p>';
    }
    console.error('Трабли йопта:', error);
  }
}

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

if (postId) {
  fetchPostDetails(postId);
} else if (postDetailsContainer) {
  postDetailsContainer.innerHTML = '<p>Айді поста десь забув.</p>';
}
