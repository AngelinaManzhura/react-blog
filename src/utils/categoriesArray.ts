type Categories = {
  id: number
  image: string
  description: string
  path: string
}

const categoriesArray: Categories[] = [
  {
    id: 1,
    image: '/images/categories_fashion.png',
    description: 'Fashion',
    path: '/blog/fashion',
  },
  {
    id: 2,
    image: '/images/categories_travel.webp.png',
    description: 'Travel',
    path: '/blog/travel',
  },
  {
    id: 3,
    image: '/images/categories_lifestyle.webp.png',
    description: 'Lifestyle',
    path: '/blog/lifestyle',
  },
  {
    id: 4,
    image: '/images/categories_beauty.webp.png',
    description: 'Beauty',
    path: '/blog/beauty',
  },
]

export default categoriesArray
