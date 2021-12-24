import ApiSource from '../../data/api-source';
import post from '../../utils/post';

const Post = {
  async render() {
    return `
    <div class="section container add__post">
      <div class="post__title">
        <h2>Tambah Lomba</h2>
        <p>Share lomba / event yang kampus kamu punya disini</p>
      </div>
      <form action="#" class="post__content">
        <div class="form__post">
          <div class="form__post__input">
            <span class="posts">Judul</span>
            <input type="text" name="title" id="judul" />
          </div>
          <div class="form__post__input">
            <span class="posts">Deskripsi</span>
            <input type="text" name="description" id="desc" />
          </div>
          <div class="form__post__input">
          <span class="posts">tipe</span>  
          <select class="tipe__post" name="type" id="tipe">
          <option value="lomba">lomba</option>
          <option value="event">event</option>
        </select>
          </div>
          <div class="form__post__input">
            <span class="posts">Katergori</span>
            <input type="text" name="category" id="kategori" />
          </div>
          <div class="form__post-upload">
            <span class="post__upload">Upload Poster</span>
            <input type="file" name="thumbnail" id="img-upload" />
          </div>
        </div>
        <button class="button" id="add-post">Tambah</button>
      </form>
    </div>
        `;
  },

  async afterRender() {
    post();
  },
};

export default Post;
