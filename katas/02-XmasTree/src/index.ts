const generateTree = (height: number): string => {
  let tree = '';

  // build tree leaves
  for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat(height - i);
    const leaves = '*'.repeat(2 * i - 1);
    tree += `${spaces}${leaves}\n`;
  }

  // add trunk
  const trunk = ' '.repeat(height - 1) + '|';
  tree += trunk;

  return tree;
};

export default generateTree;
