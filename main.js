const apiToken = 'YOUR_API_TOKEN';
const title = 'テスト01';
const body = 'テスト01です';
const tags = ['テスト投稿', 'JavaScript']; // 投稿に関連付けるタグの配列

const url = 'https://qiita.com/api/v2/items';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer 31664c23aa1195b404934bf8c5876f134d24389f`,
};

const data = {
  title: document.getElementById('title'),
  body: body,
  tags: tags.map(tag => ({ name: tag })),
};

fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(data => {
    console.log('投稿が成功しました:', data);
  })
  .catch(error => {
    console.error('投稿エラー:', error);
  });
