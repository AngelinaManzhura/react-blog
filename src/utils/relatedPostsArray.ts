type RelatedPosts = {
  id: number
  image: string
  adminIcon: string
  adminInformation: string
  dateIcon: string
  date: string
  categoriesIcon?: string
  categoriesInformation?: string
  favoritesIcon?: string
  title: string
}

const relatedPostsArray: RelatedPosts[] = [
  {
    id: 1,
    image: '/images/related_posts1.jpeg',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    favoritesIcon: 'images/favorites.png',
    title: 'Nullam viverra est ullamcorper',
  },
  {
    id: 2,
    image: '/images/related_posts2.jpeg',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    favoritesIcon: 'images/favorites.png',
    title: 'Vivamus fermentum ultrices posuere mattis',
  },
  {
    id: 3,
    image: '/images/related_posts3.jpeg',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    favoritesIcon: 'images/favorites.png',
    title: 'Aenean ligula non nibh rutrum',
  },
]

export default relatedPostsArray
