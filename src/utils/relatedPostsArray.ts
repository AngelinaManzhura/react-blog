export type RelatedPosts = {
  id: number
  image: string
  adminIcon: string
  adminInformation: string
  dateIcon: string
  date: string
  categoriesIcon?: string
  categoriesInformation?: string
  category: {
    id: number
    name: string
  }
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
    category: {
      id: 1,
      name: 'travel',
    },
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
    category: {
      id: 2,
      name: 'fashion',
    },
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
    category: {
      id: 3,
      name: 'lifestyle',
    },
    favoritesIcon: 'images/favorites.png',
    title: 'Aenean ligula non nibh rutrum',
  },
  {
    id: 4,
    image: '/images/related_posts4.webp',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    category: {
      id: 1,
      name: 'travel',
    },
    favoritesIcon: 'images/favorites.png',
    title: 'Pellentesque habitant morbi tristique',
  },
  {
    id: 5,
    image: '/images/related_posts5.webp',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    category: {
      id: 1,
      name: 'travel',
    },
    favoritesIcon: 'images/favorites.png',
    title: 'Pellentesque mattis id, turpis',
  },
  {
    id: 6,
    image: '/images/related_posts6.webp',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    category: {
      id: 3,
      name: 'lifestyle',
    },
    favoritesIcon: 'images/favorites.png',
    title: 'Nulla in ligula tempor tincidunt varius',
  },
  {
    id: 7,
    image: '/images/related_posts7.webp',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    category: {
      id: 3,
      name: 'lifestyle',
    },
    favoritesIcon: 'images/favorites.png',
    title: 'Donec tempus rutrum pede nec',
  },
  {
    id: 8,
    image: '/images/related_posts8.webp',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    category: {
      id: 1,
      name: 'travel',
    },
    favoritesIcon: 'images/favorites.png',
    title: 'Duis ornare nisl, eu odio at sapien',
  },
  {
    id: 9,
    image: '/images/related_posts9.webp',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    category: {
      id: 1,
      name: 'travel',
    },
    favoritesIcon: 'images/favorites.png',
    title: 'Quisque cursus mauris nulla',
  },
  {
    id: 10,
    image: '/images/related_posts10.webp',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    category: {
      id: 3,
      name: 'lifestyle',
    },
    favoritesIcon: 'images/favorites.png',
    title: 'Vestibulum ante sem et gravida ullamcorper feugiat',
  },
  {
    id: 11,
    image: '/images/related_posts11.webp',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    category: {
      id: 3,
      name: 'lifestyle',
    },
    favoritesIcon: 'images/favorites.png',
    title: 'Donec elit. Curabitur non mi',
  },
  {
    id: 12,
    image: '/images/related_posts12.webp',
    adminIcon: './images/related_posts_admin_icon.png',
    adminInformation: 'admin at',
    dateIcon: 'images/related_posts_date_icon.svg',
    date: 'January 17, 2022',
    categoriesIcon: 'images/popular_post_categories_icon.png',
    categoriesInformation: 'Categories',
    category: {
      id: 3,
      name: 'lifestyle',
    },
    favoritesIcon: 'images/favorites.png',
    title: 'Cum sociis natoque penatibus et turpis',
  },
]

export const getRelatedPostsObject = (array: RelatedPosts[]) =>
  array.reduce((object, post) => ({ ...object, [post.id]: post }), {})

export default relatedPostsArray
