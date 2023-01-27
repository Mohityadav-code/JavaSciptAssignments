function depth(arr) {
  let max = 1;

  function depthcheck(arr, current) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        depthcheck(arr[i], current + 1);
      } else {
        max = Math.max(max, current);
      }
    }
  }
  depthcheck(arr, 1);
  return max;
}
