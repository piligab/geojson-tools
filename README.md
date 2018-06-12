# geojson-tools

**Pre-requisites:**

Execute this code: `npm install minimist`

**Install:**


```
git clone git@github.com:piligab/geojson-tools.git
cd geojson-tools/
npm link
```


Many times we have a .geojson file, but we want to make some changes, here you find:

- **Delete tags**  --> `uid`, `id`, `user`, `timestamp`, `changeset` and `version`

  `node deletetags.js <file>`

  We will obtain `outputdt.geojson`	

- **Change a tag value** --> string to integer(`"100"` to `100`)

  `node changevalue.js <file>`

  We will obtain `outputcv.geojson`	


