import React from "react";

import "./pagination.css";

const Pagination = (props: {
    totalPosts: number;
    postsPerPage: number;
    currentPage: number;
    setCurrentPage: any;
    setTotalPages: any;
}) => {
    let pages = [];
    let totalPages = Math.ceil(props.totalPosts / props.postsPerPage);
    props.setTotalPages(totalPages);

    for (let i = 1; i <=totalPages ; i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => props.setCurrentPage(page)}
                        className={page === props.currentPage ? "active" : ""}>
                        {page}
                        
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;