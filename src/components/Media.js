import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '../api';

const BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function Media({ posts = [], refreshPosts }) {
  const { t } = useTranslation();
  const [showAddForm, setShowAddForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [expandedComments, setExpandedComments] = useState({});
  const [commentText, setCommentText] = useState({});
  const [commentAuthor, setCommentAuthor] = useState({});
  const [commentsCache, setCommentsCache] = useState({});
  const [postingComment, setPostingComment] = useState({});

  const mediaUrl = (path) => (path && path.startsWith('/') ? BASE + path : path);

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const farmer = form.farmer?.value?.trim() || 'My Farm';
    const location = form.location?.value?.trim() || '';
    const type = form.type?.value || 'Photo';
    const title = form.title?.value?.trim();
    const description = form.description?.value?.trim() || '';
    const tagsStr = form.tags?.value?.trim() || '';
    const fileInput = form.media;
    if (!title) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('farmer', farmer);
      formData.append('location', location);
      formData.append('type', type);
      formData.append('title', title);
      formData.append('description', description);
      if (tagsStr) formData.append('tags', tagsStr);
      if (fileInput?.files?.[0]) formData.append('media', fileInput.files[0]);
      await api.createPost(formData);
      form.reset();
      setShowAddForm(false);
      if (refreshPosts) refreshPosts();
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleLike = async (postId) => {
    try {
      await api.likePost(postId);
      if (refreshPosts) refreshPosts();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComments = async (postId) => {
    if (expandedComments[postId]) {
      setExpandedComments((prev) => ({ ...prev, [postId]: false }));
      return;
    }
    setExpandedComments((prev) => ({ ...prev, [postId]: true }));
    try {
      const list = await api.getComments(postId);
      setCommentsCache((prev) => ({ ...prev, [postId]: list }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitComment = async (postId) => {
    const author = (commentAuthor[postId] || '').trim() || 'Anonymous';
    const text = (commentText[postId] || '').trim();
    if (!text) return;
    setPostingComment((prev) => ({ ...prev, [postId]: true }));
    try {
      await api.addComment(postId, author, text);
      setCommentText((prev) => ({ ...prev, [postId]: '' }));
      const list = await api.getComments(postId);
      setCommentsCache((prev) => ({ ...prev, [postId]: list }));
      if (refreshPosts) refreshPosts();
    } catch (err) {
      console.error(err);
    } finally {
      setPostingComment((prev) => ({ ...prev, [postId]: false }));
    }
  };

  const handleFollow = async (postId) => {
    try {
      await api.followPost(postId);
      if (refreshPosts) refreshPosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="section">
      <header className="section-header">
        <h2>{t('media.title')}</h2>
        <p>{t('media.description')}</p>
        {refreshPosts && (
          <button
            type="button"
            className="primary-btn"
            onClick={() => setShowAddForm((v) => !v)}
            aria-expanded={showAddForm}
          >
            {t('media.addPost')}
          </button>
        )}
      </header>

      {showAddForm && (
        <div className="card form-card media-form-card">
          <h3>{t('media.newPost')}</h3>
          <form onSubmit={handleSubmitPost}>
            <label>
              {t('media.farmerName')}
              <input type="text" name="farmer" placeholder={t('media.farmerName')} />
            </label>
            <label>
              {t('sales.locationLabel')}
              <input type="text" name="location" placeholder="e.g. Punjab, India" />
            </label>
            <label>
              Type
              <select name="type">
                <option value="Photo">{t('media.uploadPhoto')}</option>
                <option value="Video">{t('media.uploadVideo')}</option>
              </select>
            </label>
            <label>
              {t('media.titleLabel')} <span className="required">*</span>
              <input type="text" name="title" required placeholder={t('media.titleLabel')} />
            </label>
            <label>
              {t('media.descriptionLabel')}
              <textarea name="description" rows={3} placeholder={t('media.descriptionLabel')} />
            </label>
            <label>
              {t('media.tagsLabel')}
              <input type="text" name="tags" placeholder="#organic, #waterSaving" />
            </label>
            <label>
              {t('media.uploadMedia')}
              <input type="file" name="media" accept="image/*,video/*" />
            </label>
            <div className="card-footer-row">
              <button type="submit" className="primary-btn" disabled={uploading}>
                {uploading ? '…' : t('media.post')}
              </button>
              <button
                type="button"
                className="ghost-btn"
                onClick={() => setShowAddForm(false)}
              >
                {t('common.cancel')}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid">
        {posts.map((post) => {
          const likeCount = post.likeCount ?? 0;
          const commentCount = post.commentCount ?? 0;
          const isLiked = post.isLiked ?? false;
          const isFollowing = post.isFollowing ?? false;
          const url = mediaUrl(post.mediaUrl);
          const comments = commentsCache[post.id] || [];
          const expanded = expandedComments[post.id];

          return (
            <article key={post.id} className="card media-card">
              <div className="card-media-placeholder">
                {url ? (
                  post.type === 'Video' ? (
                    <video
                      src={url}
                      controls
                      className="media-card-video"
                      poster=""
                    />
                  ) : (
                    <img src={url} alt={post.title} className="media-card-img" />
                  )
                ) : (
                  <span>{post.type}</span>
                )}
              </div>
              <div className="card-body">
                <h3>{post.title}</h3>
                <p className="muted">
                  {post.farmer} • {post.location}
                </p>
                <p>{post.description}</p>
                <div className="tag-row">
                  {(post.tags || []).map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-footer-row media-actions">
                  <button
                    type="button"
                    className={`ghost-btn ${isLiked ? 'active' : ''}`}
                    onClick={() => handleLike(post.id)}
                    aria-pressed={isLiked}
                  >
                    {t('media.like')} {likeCount > 0 && `(${likeCount})`}
                  </button>
                  <button
                    type="button"
                    className="ghost-btn"
                    onClick={() => toggleComments(post.id)}
                  >
                    {t('media.comment')} {commentCount > 0 && `(${commentCount})`}
                  </button>
                  <button
                    type="button"
                    className={`ghost-btn ${isFollowing ? 'active' : ''}`}
                    onClick={() => handleFollow(post.id)}
                    aria-pressed={isFollowing}
                  >
                    {isFollowing ? t('media.following') : t('media.followFarm')}
                  </button>
                </div>

                {expanded && (
                  <div className="media-comments">
                    <h4>{t('media.comments')}</h4>
                    <ul className="media-comment-list">
                      {comments.map((c) => (
                        <li key={c.id} className="media-comment-item">
                          <strong>{c.author}</strong>: {c.text}
                        </li>
                      ))}
                    </ul>
                    <div className="media-comment-form">
                      <input
                        type="text"
                        placeholder={t('media.yourName')}
                        value={commentAuthor[post.id] || ''}
                        onChange={(e) =>
                          setCommentAuthor((prev) => ({ ...prev, [post.id]: e.target.value }))
                        }
                      />
                      <input
                        type="text"
                        placeholder={t('media.writeComment')}
                        value={commentText[post.id] || ''}
                        onChange={(e) =>
                          setCommentText((prev) => ({ ...prev, [post.id]: e.target.value }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSubmitComment(post.id);
                        }}
                      />
                      <button
                        type="button"
                        className="small-btn"
                        onClick={() => handleSubmitComment(post.id)}
                        disabled={postingComment[post.id]}
                      >
                        {t('media.submitComment')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Media;
