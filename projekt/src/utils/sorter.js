function sorter(data, sorting) {
    let ascending = false;
    let sortBy = 'createdAt';

    switch (sorting) {
        case 'new':
            ascending = false;
            sortBy = 'createdAt';
            break;

        case 'old':
            ascending = true;
            sortBy = 'createdAt';
            break;

        case 'asc':
            ascending = true;
            sortBy = 'title';
            break;

        case 'desc':
            ascending = false;
            sortBy = 'title';
            break;

        default:
            ascending = false;
            sortBy = 'createdAt';
    };

    const sortedData = data.toSorted((a, b) => {
        const conditionA = a[sortBy].toUpperCase();
        const conditionB = b[sortBy].toUpperCase();

        switch (ascending) {
            case true:
                if (conditionA < conditionB) {
                    return -1;
                };

                if (conditionA > conditionB) {
                    return 1;
                };
                break;

            case false:
                if (conditionA > conditionB) {
                    return -1;
                };

                if (conditionA < conditionB) {
                    return 1;
                };
                break;
        }

        return 0;
    });

    return sortedData;
}

export default sorter;