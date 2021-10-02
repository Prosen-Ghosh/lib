const format = (date, delim = '-') => {
    const options = [{day: '2-digit'}, {month: 'short'}, {year: 'numeric'}];
    return options.map(option => {
        return new Intl.DateTimeFormat('en', option).format(date);
    }).join(delim)
}

console.log(format(new Date(), '/'))

console.log(format(new Date(), '-'));