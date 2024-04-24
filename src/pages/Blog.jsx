import React from "react";
import "../css/blog.css";
function Blog() {
  return (
    <section className="blog">
      <div className="blog__info">
        <h1 className="blog__title">
          Biznesingizni keyingi bosqichga olib chiqing
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          veniam animi omnis numquam temporibus ab pariatur voluptate odio
          impedit molestias fuga commodi corporis mollitia reprehenderit
        </p>
        <button>Xizmatlar bilan tanishish</button>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VVTwVmb_f90?si=lFXH8BKfeKq7uwa_"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    
    </section>
  );
}

export default Blog;
