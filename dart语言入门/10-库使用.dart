import 'dart:async';

/**
 * 库使用及常库
 */

class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}

@deprecated
void futureDemo() {
  Future<String> future = new Future(() {
    return 'hello future';
  });

  future.then((value) => print(value));
}

@Todo('seth', 'make this do something')
void doSomething() {
  print('do something');
}

void main(List<String> args) {
  futureDemo();

  doSomething();
  

}