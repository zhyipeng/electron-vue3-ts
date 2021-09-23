# Electron + Vue3 模板

- Electron
- Vue3
- Vite
- Typescript
- 集成 Element-Plus
- 集成 Sass
- ...

## 开发环境
```bash
# 先启动 vite server, 默认端口 3456
npm dev
# 启动 electron, 开发环境监听 3456 端口
npm start
```

## 编译
```bash
# 如果有修改 main.ts/preload.ts 需先编译
# tsc main.ts preload.ts

# 编译 vite & electron
npm run make
```
