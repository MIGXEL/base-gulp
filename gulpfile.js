const { series, src, dest, watch } = require('gulp');
var sass = require('gulp-sass')(require('sass'));


//compilar sass a css
function compilarSASS(){
    return src("./src/scss/app.scss")
            .pipe( sass({
                outputStyle: 'expanded'
            }) )
            .pipe( dest("./build/css"))
}

function minificarCSS(){
    return src("./src/scss/app.scss")
            .pipe( sass({
                outputStyle: 'compressed'
            }) )
            .pipe( dest("./build/css"))
}

//pediente cambios en archivos
function watchArchivos(){
    watch("./src/**/*.scss", compilarSASS)
}

exports.compilarSASS = compilarSASS;
exports.minificarCSS = minificarCSS;
exports.watchArchivos = watchArchivos;