/**
 * 流程控制语句
 */

main(List<String> args) {
  // for循环
  var message = StringBuffer('dart is fun');
  for (var i = 0; i < 5; i++) {
    message.write('!');
  }
  print(message);

  var collection = [0, 1, 2];
  for (var x in collection) {
    print(x);
  }
}