const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    // định nghĩa
    // nhưng cần add scrollReveal add file từ github về.
});

// top with interval
sr.reveal(
    `.feature__card, .serving-bottom, .menu-bottom, .blog-list__item `,
    // .class>* lấy tất cả các element đó
    // class cuối cùng không có dấu phẩy nếu không nó ko ứng dụng đc feature này
    {
    origin:'top',
    interval: 300,
    // sau 0.3s hiện tiếp item tiếp theo
});
// left with not interval
sr.reveal(
    `.header__left, .serving-top__left, .menu-top__left,.menu-top-1__left,.our-history,.open-letter__left
    ,.story-left,.feature-blog__container-left,.blog-content-details__copy>*`,
    // các class áp dụng cái reveal này và cách nhau giữa các e là dấu phẩy
{
    origin:'left',
    // vị trí hiện item ra
    
});
// right with no interval
sr.reveal(
    `.serving-top__right, .menu-top__right,.menu-top-1__right,.open-letter__right,.story-right
    ,.feature-blog__container-right`,
{
    origin:'right',
    
});
ScrollReveal({distance: '0px', duration: 1500}).reveal(
    `.header__right,.banner-img,.article-list`,
{
    delay: 200,
    interval: 100,
}
)