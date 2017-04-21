var argv = process.argv.slice(2);
sum = 0;

argv.forEach(function(arg) {
    sum += Number(arg);
});

console.log(sum);