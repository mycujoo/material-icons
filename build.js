const fs = require('fs')
const path = require('path')
const glob = require('glob')
const babel = require('babel-core')

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
]

const directory = 'node_modules/material-design-icons/'

const generate = category => ({ category, glob: `./${category}/svg/production/*_24px.svg` })
const isDirectory = category => fs.lstatSync(category).isDirectory()
const isFile = file => fs.lstatSync(file).isFile()
const isFromGoogleMaterialIcons = source => ICON_CATEGORIES.includes(`${source}`)

const templateFile = fs.readFileSync('./template-file.js', 'utf-8')
const templateIcon = fs.readFileSync('./template-icon.js', 'utf-8')

const dirs = fs.readdirSync(path.join('.', directory))
    .filter(isFromGoogleMaterialIcons)
    .map(name => path.join(directory, name))
    .filter(isDirectory)
    .map(generate)

Promise.all(dirs.map(source =>
        new Promise((res, rej) =>
            glob(source.glob, (err, icons) => err ? rej(err) : res({ category: source.category, icons }))
        )
    ))
    .catch(err => console.error(err))
    .then(icons => icons.map(buildSvg))

function buildSvg(source) {
    const category = source.category.replace(directory, '')
    const file = [templateFile]
    source.icons.filter(isFile)
        .map(icon => {
            const raw = fs.readFileSync(icon, 'utf8')
            const iconName = `icon_${/svg\/production\/ic_(.*)_24px.svg/.exec(icon)[1]}`
            const iconNamePascalCase = `${iconName.replace(/(^|_)([a-zA-Z0-9])/g, (a,b,c) => c.toUpperCase())}`
            const template = templateIcon.replace('__TEMPLATE__', raw)
                .replace(/__ICON__NAME__PASCAL__CASE__/g, iconNamePascalCase)
                .replace(/__ICON__NAME__/g, iconName)
            file.push(template)
        })
    const dir = `./${category}/`
    if (fs.existsSync(dir) === false) {
        fs.mkdirSync(dir, 0777)
    }
    const transformed = babel.transform(file.join(''), {
        presets: ['react']
    })
    fs.writeFileSync(`${dir}/index.js`, transformed.code)
}
