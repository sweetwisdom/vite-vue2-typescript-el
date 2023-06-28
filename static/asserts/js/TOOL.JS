const fs = require('fs')
const uglify = require('uglify-js')

const inputFile = 'quill.js'
const outputFile = 'output.js'

// 读取输入文件内容
const inputCode = fs.readFileSync(inputFile, 'utf8')

// 压缩文件
const result = uglify.minify(inputCode)

// 将压缩后的代码写入输出文件
fs.writeFileSync(outputFile, result.code)
