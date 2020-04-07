echo '开始执行部署 Gitee 命令'

echo '备份原配置文件'
cp ./docs/.vuepress/config.js ./docs/.vuepress/_config.js

echo '删除 config.js 配置文件'
rm ./docs/.vuepress/config.js

echo '复制 Gitee 的配置文件'
cp ./docs/.vuepress/config_gitee.js ./docs/.vuepress/config.js

# 生成静态文件
echo '执行命令：npx vuepress build docs'
npx vuepress build docs

# 进入生成的文件夹
echo "执行命令：cd ./docs/.vuepress/dist \n"
cd ./docs/.vuepress/dist


# 初始化一个仓库，仅仅是做了一个初始化的操作，项目里的文件还没有被跟踪
echo "执行命令：git init \n"
git init

# 保存所有的修改
echo "执行命令：git add -A"
git add -A

# 把修改的文件提交
echo "执行命令：commit -m 'deploy_gitee'"
git commit -m 'deploy_gitee'

# 发布到Gitee
echo "代码推送的 Gitee 的 gh-pages 分支，用于部署"
git push -f https://gitee.com/liu-lihao/vuepress-demo.git master:gh-pages

# 返回到上一次的工作目录
echo "回到刚才工作目录"
cd -

echo '删除 config.js 配置文件'
rm ./docs/.vuepress/config.js

echo '还原配置文件'
cp ./docs/.vuepress/_config.js ./docs/.vuepress/config.js

echo '删除备份的 config.js 配置文件'
rm ./docs/.vuepress/_config.js

echo "打开 Gitee Pages 服务，手动更新服务"
echo '若浏览器没打开，请手动打开链接：https://gitee.com/liu-lihao/vuepress-demo/pages'
