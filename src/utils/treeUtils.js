export function arrayToTree(arr) {
  if (!arr || arr.length === 0) return null;

  let root = { info: arr[0], left: null, right: null };
  let queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    let current = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      current.left = { info: arr[i], left: null, right: null };
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = { info: arr[i], left: null, right: null };
      queue.push(current.right);
    }
    i++;
  }
  return root;
}
