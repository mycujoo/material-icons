const gulp = require('gulp')
const path = require('path')
const svgmin = require('gulp-svgmin')

const ICON_DIRECTORIES = 'node_modules/material-design-icons'
const MYCUJOO_ICON_SRC = 'src/mycujoo/svg/raw'
const MYCUJOO_ICON_DESTINATION = `${ICON_DIRECTORIES}/mycujoo/svg/production`

const svgminOptions = {
    plugins: [
        {
            removeTitle: true
        },
        {
            cleanupNumericValues: {
                floatPrecision: 2,
            }
        }, {
            removeAttrs: {
                attrs: 'fill',
            }
        }
    ]
}

// parses custom icons through svgo, and moves them into the icons directory
gulp.task('default', () => {
    return gulp.src(path.join(MYCUJOO_ICON_SRC, '*.svg'))
        .pipe(svgmin(svgminOptions))
        .pipe(gulp.dest(MYCUJOO_ICON_DESTINATION))
})
