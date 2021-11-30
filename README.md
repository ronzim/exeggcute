# exeggcute

Just a launcher for scripts that work on files.  

## Dev notes: 
To set maximum file dimension, change `maxFileSize` in `Home.vue`.  
To add specific behaviour on file upload, fill the `doSomething` function in `Home.vue`.  
At the moment, a file check extension is enabled (only .txt): to bypass it, comment out lines 63-66 in `DropZone.vue`.  

## Project setup:
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
