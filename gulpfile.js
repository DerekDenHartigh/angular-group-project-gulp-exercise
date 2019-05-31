"use strict";
const gulp = require("gulp");

const taskOne = (done)=>{
    console.log("Hello");
    done();
};

const taskTwo = ()={
    console.log("World!");
};



gulp.task("taskOne");