/**
 * 运算符 - 其他预算符
 */

import 'dart:io' as io;

class Person {
  String firstName;

  Person() {
    this.firstName = 'Bob';
  }

  a() {
    print('Person method a');
  }

  b() {
    print('Person method b');
  }
}

void main() {
  Person aAsPerson = new Person();

  // 类型判断运算符
  print(aAsPerson is Person);
  print(aAsPerson is! Person);

  var bAsString = null ?? aAsPerson.firstName;
  print(bAsString);

  // 及联运算符
  Person dAsPerson = new Person();
  dAsPerson.firstName = 'Bob2';
  dAsPerson.a();
  dAsPerson.b();

  new Person()
    ..firstName = 'Bob2'
    ..a()
    ..b();

  // 可选链
  var eAsMap;
  print(eAsMap?.hello);
}
