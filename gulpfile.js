const gulp = require('gulp')
const babel = require('gulp-babel')
const webpack = require('gulp-webpack')
const filter = require('gulp-filter')

/** Names of directories containing icons from google material icons. */
const ICON_CATEGORIES = [
  'action',
  'alert',
  'av',
  'communication',
  'content',
  'device',
  'editor',
  'file',
  'hardware',
  'image',
  'maps',
  'navigation',
  'notification',
  'places',
  'social',
  'toggle',
  'mycujoo', // custom icons
]

const ICON_DIRECTORIES = 'node_modules/material-design-icons'
const MYCUJOO_ICON_SRC = 'src/mycujoo/svg/raw'
const MYCUJOO_ICON_DESTINATION = `${ICON_DIRECTORIES}/mycujoo/svg/production`

gulp.task('copy', () => {
    return gulp.src(MYCUJOO_ICON_SRC)
        .pipe(svgmin())
        .pipe(gulp.dest(MYCUJOO_ICON_DESTINATION))
})

gulp.task('parse', () => {
    return gulp.src(ICON_DIRECTORIES)
        .pipe(filter(ICON_CATEGORIES))
})

gulp.task('transpile', () => {

})

gulp.task('default', ['copy', 'parse', 'transpile'])
