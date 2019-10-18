# geojson-tools

**Pre-requisites:**

Execute this code: `npm install minimist`

## Install:

```
git clone git@github.com:piligab/geojson-tools.git
cd geojson-tools/
npm link
```

## Tools:

Many times we have a .geojson file, but we want to make some changes, here you find:

- **Delete tags** --> `uid`, `id`, `user`, `timestamp`, `changeset` and `version`

  `tool deletetags <file>`

  We will obtain `output.geojson`

- **Change a tag value** --> string to integer(`"100"` to `100`)

  `tool changevalue <file>`

  We will obtain `outputcv.geojson`

- **Change .geojson to .poly** --> the geojson file should be a polygon

  `tool poly <file.geojson> > file.poly`

- **Polygon Area - m2-km2-ha** --> the geojson file should be a polygon

  `tool area <file.geojson> >`

- **Distance moved**

  `tool distancemoved input.geojson > output.geojson`

- **Add coordinates** --> add the coordinates of the points into the geojson as a new attributes

  `tool addcoord input.geojson > output.geojson`

<!-- - **Convert array** --> convert one atribute in array

  `tool convert_array input.geojson`

- **Count POI's and tiles that exist in the file** --> use the oputput from **Convert array** (script above), and the yu can view the output in console. 

  `tool count_pois_tiles` -->
