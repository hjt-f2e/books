/**
 * 函数
 */

void main(List<String> args) {
  isNoble(2);

  enableFlags(bold: true);

  print(say("hello", "world"));
  print(say("hello", "world", "lei"));

  List<String> list = ['apples', 'bannas', 'oranges'];
  // 匿名函数
  list.forEach((element) {
    print(element);
  });

  var add2 = makeAdder(2);
  assert(add2(3) == 5);
}

bool isNoble(int atomicNumber) {
  return atomicNumber != null;
}

// => expr 箭头函数语法
isNoble2(int atmicNumber) => atmicNumber != null;

// 指定函数参数名 + 默认参数
void enableFlags({ bool bold, bool hidden = true }) {
  print('$bold $hidden');
}

// [] 定义参数可选
String say(String from, String msg, [String device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }

  return result;
}

Function makeAdder(num addBy) {
  return (num i) => addBy + i;
}