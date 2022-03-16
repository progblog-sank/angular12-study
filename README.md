# angular12-study

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# angular12の勉強用リポジトリ

## 12指定でインスール
```
$ npm install -g @angular/cli@12.0.0
```

## バージョン確認
```
$ ng v

     _                      _                 ____ _     ___ 
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | | 
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | | 
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.0.0
Node: 14.17.5
Package Manager: npm 6.14.14
OS: win32 x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1200.0 (cli-only)
@angular-devkit/core         12.0.0 (cli-only)
@angular-devkit/schematics   12.0.0 (cli-only)
@schematics/angular          12.0.0 (cli-only)
```

## material UI をインストール
```
$ ng add @angular/material
ℹ Using package manager: npm
✔ Found compatible package version: @angular/material@12.2.13.
✔ Package information loaded.

The package @angular/material@12.2.13 will be installed and executed.
Would you like to proceed? Yes
✔ Package successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Custom
? Set up global Angular Material typography styles? No  
? Set up browser animations for Angular Material? Yes
```

## custom theme 設定

参考リンクを参照に実行すればcustom themeを変更できる。

実際の作業は → [こちら](https://github.com/progblog-sank/angular12-study/commit/995f5a01c9a0eb9ea246ead722c00c7a112d3e51)

参考：[Angular Material でカスタムカラーを使う](https://zenn.dev/fusho_takahashi/articles/20d044c4a2d459b5c2ca)