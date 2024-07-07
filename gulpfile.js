const gulp = require("gulp");
const fileInclude = require("gulp-file-include");

// Task to include HTML files
gulp.task("includeHTML", function () {
  return gulp
    .src("./src/*.html") // Đường dẫn đến các file HTML cần nối
    .pipe(fileInclude({ prefix: "@@", basepath: "@file" })) // Cấu hình plugin
    .pipe(gulp.dest("./dist")); // Đường dẫn đến thư mục đích
});

// Task mặc định
gulp.task("default", gulp.series("includeHTML"));

// Task theo dõi sự thay đổi và tự động thực hiện lại khi có sự thay đổi
gulp.task("watch", function () {
  gulp.watch("./src/**/*.html", gulp.series("includeHTML"));
});

// Task serve để tự động thực hiện lại khi có sự thay đổi và cùng lúc cập nhật trình duyệt
gulp.task("serve", gulp.series("includeHTML", "watch"));
