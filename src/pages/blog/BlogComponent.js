import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { blog, blogDesp } from "../../portfolio";
import "./BlogComponent.css";
import BlogImg from "./BlogsImg";

class BlogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: blog.blogPosts,
      selectedPost: null,
      isModalOpen: false,
    };
  }
  formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  handlePostClick = (post) => {
    this.setState({
      selectedPost: post,
      isModalOpen: true,
    });
  };

  handlePostKeyPress = (event, post) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.handlePostClick(post);
    }
  };

  render() {
    const { theme } = this.props;
    const { blogPosts } = this.state;

    const totalPosts = blogPosts.length;
    const totalCategories = [...new Set(blogPosts.map((post) => post.category))]
      .length;
    const avgReadTime = Math.round(
      blogPosts.reduce((sum, post) => sum + parseInt(post.readTime), 0) /
        totalPosts
    );
    const sortedPosts = Array.isArray(blogPosts)
      ? [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
      : [];

    return (
      <div className="blog-main">
        <Header theme={theme} />
        <header className="blog-header">
          <Fade bottom duration={1000} distance="30px">
            <div className="blog-header-img" aria-hidden="true">
              <BlogImg theme={theme} />
            </div>
            <div className="blog-header-content">
              <h1 className="blog-title" style={{ color: theme.text }}>
                My Blog
              </h1>
              <p
                className="blog-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {blogDesp.description}
              </p>
              <div
                className="blog-stats"
                style={{ borderTopColor: theme.highlight }}
              >
                <div className="blog-stat">
                  <span
                    className="blog-stat-number"
                    style={{ color: theme.text }}
                  >
                    {totalPosts}
                  </span>
                  <span
                    className="blog-stat-label"
                    style={{ color: theme.secondaryText }}
                  >
                    Articles
                  </span>
                </div>
                <div className="blog-stat">
                  <span
                    className="blog-stat-number"
                    style={{ color: theme.text }}
                  >
                    {totalCategories}
                  </span>
                  <span
                    className="blog-stat-label"
                    style={{ color: theme.secondaryText }}
                  >
                    Categories
                  </span>
                </div>
                <div className="blog-stat">
                  <span
                    className="blog-stat-number"
                    style={{ color: theme.text }}
                  >
                    {avgReadTime}m
                  </span>
                  <span
                    className="blog-stat-label"
                    style={{ color: theme.secondaryText }}
                  >
                    Avg Read
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </header>
        <main className="blog-posts-container">
          <div className="blog-posts-grid">
            {sortedPosts.map((post, index) => {
              return (
                <Fade
                  bottom
                  duration={800}
                  delay={index * 150}
                  distance="20px"
                  key={post.id}
                >
                  <article
                    className="blog-post-card"
                    style={{
                      background: theme.body,
                      color: theme.text,
                    }}
                    onClick={() => this.handlePostClick(post)}
                    onKeyPress={(e) => this.handlePostKeyPress(e, post)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Read article: ${post.title}`}
                  >
                    <header className="blog-post-header">
                      <span
                        className="blog-post-category"
                        style={{
                          color: theme.text,
                          background: theme.highlight,
                        }}
                      >
                        {post.category}
                      </span>
                      <h2
                        className="blog-post-title"
                        style={{ color: theme.text }}
                      >
                        <span
                          className="blog-post-emoji"
                          role="img"
                          aria-label={post.category}
                        >
                          {post.emoji}
                        </span>
                        <span>{post.title}</span>
                      </h2>
                    </header>
                    <div className="blog-post-content">
                      <p
                        className="blog-post-excerpt"
                        style={{ color: theme.secondaryText }}
                      >
                        {post.excerpt}
                      </p>
                    </div>
                    <div
                      className="blog-post-footer"
                      style={{ borderTopColor: theme.highlight }}
                    >
                      <div className="blog-post-meta">
                        <time
                          className="blog-post-date"
                          style={{ color: theme.text }}
                          dateTime={post.date}
                        >
                          📅 {this.formatDate(post.date)}
                        </time>
                        <span
                          className="blog-post-read-time"
                          style={{
                            color: theme.text,
                            borderLeftColor: theme.highlight,
                          }}
                        >
                          ⏱️ {post.readTime}
                        </span>
                      </div>

                      <div className="blog-post-tags">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="blog-tag"
                            style={{
                              background:
                                theme.text === "dark"
                                  ? "#ffffff14"
                                  : "#0000000d",
                              color: theme.text,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Fade>
              );
            })}
          </div>
        </main>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default BlogComponent;
