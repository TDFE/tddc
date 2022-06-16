# tddc

### 立即开始

安装依赖
```bash
npm run install
```

开启服务，
```bash
npm run start
```

构建site，并同步到homepage
```bash
npm run deploy
```

构建packages下的组件
```bash
npm run build
```


🚀🚀 传送门：
1. 通过lerna包管理，每个组件放在packages下。目录结构为如下：通过`npm run build`构建出lib文件目录
    ```
      packages
      └─layout（组件名）
          │  package.json
          │  lib
          │  src
              └─layout.md
          
    ```
2. 同步homepage地址，执行`npm run deploy`即可，会自动推到github的gh-pages分支
3. 发包执行`npm run publish-packages`。根据packages中每个包的package.json的版本发布
