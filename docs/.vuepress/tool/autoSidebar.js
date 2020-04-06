const path = require('path');
const fs = require('fs')
const natsort = require('./natsort.min.js');

// 配置
// 侧边栏过滤的目录
const filterFile = ['assets', '.vuepress'];
// 分组名称的连接符（文件夹嵌套的情况下文件名的拼接字符串）
const separator = ' - ';

const utils = {
  /**
   * 遍历目录下所有文件（同步的）
   * @param {string} path 指定目录，如'./dist'
   * @param {function}fn (type, dir) type：0=文件夹，1=文件
   */
  scanningAllFile(dir, fn, self = false) {
    const reading = (dir, self = false) => {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach((file, index) => {
          const curPath = path.resolve(dir, file);
          if (fs.statSync(curPath).isDirectory()) { // recurse
            reading(curPath, true);
          } else {
            fn(1, curPath);
          }
        });
        if (self) {
          fn(0, dir);
        }
      }
    }
    reading(dir, self);
  }
}

// 自动添加侧边栏，扫描docs目录，排除 filterFile 所示目录，及其他文件。
// 只对目录添加至侧边栏！！！！！
const autoSidebar = () => {
  const env = path.join(__dirname, `../../`);
  const envFiles = fs.readdirSync(env);
  const res = {};
  envFiles.forEach((name, index) => {
    if (filterFile.includes(name)) {
      return;
    }
    const curPath = path.resolve(env, name);
    if (fs.statSync(curPath).isDirectory()) {
      // 只对文件夹处理
      const sidebarKey = `/${name}/`;
      res[sidebarKey] = [];
      utils.scanningAllFile(curPath, (type, dir) => {
        if (type === 1) {
          // 只处理文件
          const mdInfo = path.parse(dir);
          const ext = mdInfo.ext.toLocaleLowerCase();
          if (ext === '.md') {
            // 只处理md
            const dirRelative = path.relative(curPath, dir);
            const dirArr = dirRelative.split(path.sep);
            const sidebarValue = dirRelative.replace(new RegExp('\\' + mdInfo.ext + '$'), '').replace(new RegExp('\\' + path.sep, 'g'), '/');
            if (mdInfo.ext !== '.md') {
              // 格式化 .md 后缀，vuepress 无法识别 .MD
              fs.rename(dir, path.join(dir, '../', mdInfo.name + '.md'))
            }
            if (dirArr.length === 1) {
              // 不分组
              res[sidebarKey].push(sidebarValue)
            } else {
              // 分组
              const tempDirArr = [...dirArr];
              tempDirArr.pop();
              const title = tempDirArr.join(separator);
              const hasTitle = res[sidebarKey].some(item => {
                if (typeof item === 'object' && item.title === title) {
                  res[sidebarKey].children.push(sidebarValue);
                  return true;
                }
              })
              if (!hasTitle) {
                // 判断当前这个title是否 不存在
                res[sidebarKey].push({
                  title,
                  children: [sidebarValue]
                })
              }
            }
          }
        }
      })
    }
  })
  return res;
}
const res = autoSidebar();

module.exports = res;