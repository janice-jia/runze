'use strict';
/**
 * 引入包
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');//sass的编译
//var cleanCss = require('gulp-clean-css');//压缩css
var autoprefixer = require('gulp-autoprefixer');//自动添加css前缀
var concat = require('gulp-concat');//合并js文件
var uglify = require('gulp-uglify');//压缩js代码
var rename = require('gulp-rename');//重命名
var notify = require('gulp-notify');//更改提醒
//var cssSprite = require('gulp-css-spritesmith');//css 代码中的切片合并成雪碧图的工具
//var gulpIf = require('gulp-if');//gulp if
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


/*
 * default
 * */
gulp.task('default', [
    'styles-runze'
],function(){

});

// 实时刷新浏览器
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: [
                "./html",
            ]
        }
    });

});


/*
 * 监听
 * */
gulp.task("watch",['server'], function(){
    gulp.watch('./html/css/*.css').on('change', reload);
    gulp.watch("./html/*.html").on('change', reload);

    gulp.watch('./html/scss/*.scss', ['styles-runze']);
});


// 润泽官网
gulp.task('styles-runze', function() {
    //编译sass
    return sass('./html/scss/*.scss')

    //保存编译之后的css文件到指定的目录
    .pipe(gulp.dest('./html/css/'))
});
