import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import blog_categories from 'assets/blog_categories.png'
import blog_tags from 'assets/blog_tags.png'
import blog_authors from 'assets/blog_authors.png'
import blog_show_all from 'assets/blog_show_all.png'
import { initialFilters } from '../Blog'

type Props = {
  filters: {
    category: string
    tag: string
    author: string
  }
  onChange: (object: { [key: string]: string }) => void
}

const BlogFilter = ({ filters, onChange }: Props) => {
  const isFilters = filters.category || filters.tag || filters.author

  return (
    <section className="blog-filters">
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="categories-select-standard-label">
            <img
              className="blog-posts-content-filters-by-categories-icon"
              src={blog_categories}
              alt=""
            />
            <span className="blog-posts-content-filters-by-categories-information">
              Categories
            </span>
          </InputLabel>
          <Select
            labelId="categories-select-standard-label"
            id="categories-select-standard"
            value={filters.category}
            label="Categories"
            onChange={(e) => onChange({ category: e.target.value })}
          >
            <MenuItem value="travel">Travel</MenuItem>
            <MenuItem value="fashion">Fashion</MenuItem>
            <MenuItem value="lifestyle">Lifestyle</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="tag-select-standard-label">
            <img
              className="blog-posts-content-filters-by-tags-icon"
              src={blog_tags}
              alt=""
            />
            <span className="blog-posts-content-filters-by-tags-information">
              Tags
            </span>
          </InputLabel>
          <Select
            labelId="tag-select-standard-label"
            id="tag-select-standard"
            value={filters.tag}
            label="Tag"
            onChange={(e) => onChange({ tag: e.target.value })}
          >
            <MenuItem value="mountains">Mountains</MenuItem>
            <MenuItem value="sea">Sea</MenuItem>
            <MenuItem value="makeup">Make-Up</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="author-standard-label">
            <img
              className="blog-posts-content-filters-by-authors-icon"
              src={blog_authors}
              alt=""
            />
            <span className="blog-posts-content-filters-by-authors-information">
              Authors
            </span>
          </InputLabel>
          <Select
            labelId="author-select-standard-label"
            id="author-select-standard"
            value={filters.author}
            label="Author"
            onChange={(e) => onChange({ author: e.target.value })}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="John Doe">John Doe</MenuItem>
          </Select>
        </FormControl>
      </div>
      {isFilters && (
        <div>
          <button
            className="blog-posts-content-filters-show"
            onClick={() => onChange(initialFilters)}
          >
            <img
              className="blog-posts-content-filters-show-icon"
              src={blog_show_all}
              alt=""
            />
            <span className="blog-posts-content-filters-show-information">
              Show all
            </span>
          </button>
        </div>
      )}
    </section>
  )
}

export default BlogFilter
