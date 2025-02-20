// https://codepen.io/Staghouse/pen/OzpVya
export function generateBoardClasses(size: number): string {
    let rule = 'div {';

    if (size % 2 === 0) {
        rule += 'background-color: #d6e4d6;';
    } else {
        rule += 'background-color: #c0a58b;';
    }

    rule += `&:nth-of-type(-2n + ${size}),`;
    for (let i = 1; i < size; i++) {
        if (i % 2 === 0) {
            rule += `&:nth-of-type(${size * i}) ~ *:nth-of-type(-2n + ${size * (i + 1)})`;
        } else {
            rule += `&:nth-of-type(${size * i}) ~ *:nth-of-type(-2n + ${size * (i + 1) - 1})`;
        }

        if (i !== size - 1) {
            rule += ',';
        }
    }

    if (size % 2 === 0) {
        rule += `{background-color: #c0a58b;}}`;
    } else {
        rule += `{background-color: #d6e4d6;}}`;
    }

    return rule;
}

export function generateId(index: number, size: number) {
    if (index % size === 0) {
        return `${Math.ceil(index / size)}${size}`;
    }
    return `${Math.ceil(index / size)}${index % size}`;
}
