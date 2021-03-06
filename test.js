var test =  require('./index.js');

var sigma = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5];
console.log('3-sigma: ', test.sigma(sigma), test.sigma(sigma, {indexes: true})); // [5] [14]

var grubbs = [10.45, 10.26, 10.49, 10.36, 10.53, 10.77, 10.4, 10.4, 10.56, 10.88, 10.47, 10.49, 10.46, 10.38, 10.47, 10.39, 10.51, 10.49, 10.54, 10.46, 10.45, 10.49, 10.46, 10.46, 10.51, 10.47, 10.54, 10.52, 10.47, 10.44, 11.62, 11.6, 10.42, 10.42, 10.39, 10.22, 10.47, 10.42, 10.52, 10.57, 10.49, 10.49, 10.51, 10.47, 10.51, 10.48, 10.4, 10.26, 10.47, 10.45];
console.log('GRABBS: ', test.grubbs(grubbs), '\n', test.grubbs(grubbs, {indexes: true})); 
// [1, 5, 9, 30, 31, 35, 47] \n [ 10.26, 10.77, 10.88, 11.62, 11.6, 10.22, 10.26 ]

var iqr = [12, 14, 51, 12, 10, 9, 16, 1];
console.log('IRQ: ', test.iqr(iqr), test.iqr(iqr, {indexes: true})); // [1, 51] [2, 7]

var mad = [-2, 1, 2, 2, 3, 4, 15];
console.log('MAD: ', test.mad(mad), test.mad(mad, {indexes: true})); // [15] [6]

var mad2 = [1.1, 1.2, 2.2, -20, 3.3, 2.1, 2.3, -10.2];
console.log('MAD2: ', test.mad(mad2), test.mad(mad2, {indexes: true})); // [-20, -10.2] [3, 7]

var md = [-2, 1, 2, 2, 3, 4, 15, 11];
console.log('MD: ', test.md(md), test.md(md, {indexes: true})); // [15] [6]

var md2 = [0.9, 0.74, 0.41, 2518, 0.64, 1.7, 0.63, 0.39, 1.54, 0.277, 2.27, 0.37, 0.56, 0.2005, 3, 2.15, 0.78, 3.15, 2, 0.29, 0.76, 1.38, 1.09, 2.6, 1.26, 0.83, 0.63, 2.98, 1.4, 0.36, 0.59, 2.1, 1.58, 0.211, 0.65, 1.18, 2.95, 0.7, 0.22, 0.55, 0.37, 0.93, 0.334, 0.47, 0.93, 0.233, 1.24, 0.2041, 1.38, 0.63, 0.58, 1.91, 1.25, 0.33, 1.73, 2.29, 0.32, 0.272, 0.332, 0.8, 1.49, 0.38, 0.32, 0.225, 3.47, 0.73, 0.4, 0.2559, 0.2039, 0.44, 0.2029, 0.2018, 0.25, 0.46, 0.2024, 2.62, 0.83, 0.21, 0.53, 0.212, 1.64, 0.89, 0.59,  0.39, 0.38, 2.99, 1.15, 0.603, 0.44, 0.207, 2.6, 0.48, 0.34, 0.2022, 0.56, 1.3, 0.41, 0.204, 0.286, 0.28]
console.log('MD2: ', test.md(md2), test.md(md2, {indexes: true})); // [2518, 0.64] [3, 4]

/*
# odd.R: Read first argument (json), parse, remove all even numbers, convert to json and print
library(jsonlite)
args = commandArgs(trailingOnly=TRUE)
x <- fromJSON(args[1], flatten=TRUE)
x <- x[which(x %% 2 != 0)]
x <- toJSON(x)
x
*/
var ext = [-2, 1, 2, 2, 3, 4, 15];
var opts = {'command': 'c:/R/bin/rscript odd.R ${dataset}', 'cwd': 'c:/R/bin/'};
console.log('Ext-SYNC', test.external(ext, opts)) // [1, 3, 15]
test.external(ext, opts, (err, res) => console.log('Ext-ASYNC: ', (err) ? err : res))



