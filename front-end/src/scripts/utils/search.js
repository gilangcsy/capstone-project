import ApiSource from '../../scripts/data/api-source';

async function search(data) {
  let res;

  if (data) {
    res = ApiSource.searchPost(data);
  } else {
    res = ApiSource.getPost();
  }

  let results = await res.json();
}
