import { useState } from 'react';
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [currentPaginationData, setCurrentPaginationData] = useState(blogs.posts.slice(0, pageSize))

  const updateRowsPerPage = (newValue) => {
    if (PAGE_SIZES.includes(newValue)) {
      setPageSize(newValue);
      setCurrentPage(1);
      setCurrentPaginationData(blogs.posts.slice(0, newValue));
    }
  };
  const updatePage = (newValue) => {
    setCurrentPage(newValue);
    setCurrentPaginationData(blogs.posts.slice((newValue - 1) * pageSize, newValue * pageSize));
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
