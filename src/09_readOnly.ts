const colors: readonly string[] = ['red', 'green', 'blue'];

const sizes: ReadonlyArray<number> = [10, 20, 30];

console.log(colors[0]);
const Count = colors.length;
const upperColors = colors.map(c => c.toUpperCase());


// you can't
colors.push('yellow');
color[0] = 'purple';
colors.pop();