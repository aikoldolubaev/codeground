function reverseListInPlace(list) {
  for (var i = 0; i < list.length / 2; i++) {
    var current = list[i];
    list[i] = list[list.length - 1 - i];
    list[list.length - 1 - i] = current;
  }

  return list;
}

reverseListInPlace([1, 2, 3, 4, 5, 6, 7, 8]);
