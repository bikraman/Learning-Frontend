
function camelize(str) {

    const reduced = str.split("-").reduce((previousValue, currentValue, currentIndex) => {
        if (currentIndex > 0) {
            return previousValue + currentValue[0]?.toUpperCase() + currentValue?.slice(1, currentValue?.length);
        }
        return previousValue + currentValue
    });

    return reduced;
}



camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

