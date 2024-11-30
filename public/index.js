const postsContainer = document.getElementById('posts');

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const posts = await response.json();
    console.log(posts.slice(0, 2));

    if (postsContainer) {
      postsContainer.innerHTML = posts
        .slice(0, 10)
        .map(function (post) {
          return `
            <div>
              <h3>${post.title}</h3>
              <a href="post.html?id=${post.id}">Подробиці</a>
            </div>`;
        })
        .join('');
    }
  } catch (error) {
    if (postsContainer) {
      postsContainer.innerHTML = '<p>Помилка завантаження, оновіть сторінку</p>';
    }
    console.error('Трабли йопта:', error);
  }
}

fetchPosts();
