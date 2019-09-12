var middleNode = function (head) {
  var list = []
  while (head) {
    list.push(head)
    head = head.next
  }
  return list[Math.floor(list.length / 2)]
}
