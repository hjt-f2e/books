/**
 * 类
 */

// 基础类
class Person {
  void sayHello() {
    print('hello');
  }
}

class PersonB {
  void sayHello() {
    print('你好');
  }
}

class PersonA {
  final String _name;

  PersonA(this._name);

  String greet(String who) => 'hello, $who. i am $_name';
}

/**
 * 抽象类
 * 1. 使用 abstract 修饰符定义抽象类
 * 2. 只定义接口不进行实现
 * 3. 通过 implements 实现抽象类
 * 4. 实现接口可以一个或者多个，用“,”隔开
 */
abstract class People {
  String name;
  String age;

  void setName(String name);

  void sayName();
}

/**
 * 1. 实现一个缓存
 * 2. 我的缓存可以是文件缓存也是内存缓存
 * 3. 自己的类要使用这个缓存
 * 4. 用oop的方式
 */

class XiaoMing extends Person implements People {
  @override
  String name;

  XiaoMing() {
    this.name = 'xiaoming';
    this.age = '24';
  }

  @override
  void sayHello() {
    print('方言 hello');
  }

  @override
  void setName(String name) => this.name = name;

  @override
  String age;

  @override
  void sayName() {
    print(this.name);
  }
}

// main(List<String> args) {
//   var xiaoming = new XiaoMing();
//   xiaoming.setName('xiaoming2');
//   xiaoming.sayName();
//   xiaoming.sayHello();

// }

// 继承、实现抽象类
// class XiaoMing extends Person implements People {
//   // 类私有成员_b（等同于 JAVA protected 关键字）
//   String _age = '24';

//   @override
//   String name = '小明';

//   // 构造函数
//   // age可选参数
//   // XiaoMing([this._age]);
//   XiaoMing([String age]) {
//     this._age = age;
//   }

//   @override
//   void setName(String name) {
//     this.name = name;
//     // 也可写成 _name = name;
//   }

//   @override
//   void sayHello() {
//     super.sayHello();
//     print('my name is $name, $_age years of age.');
//   }
// }

// void main() {
//   XiaoMing xiaoming = new XiaoMing();
//   xiaoming.sayHello();

//   print(xiaoming is Person);
//   print(xiaoming is People);

//   XiaoMing xiaoming2 = XiaoMing('14');
//   xiaoming2.sayHello();
// }

/**
 * 工厂构造函数
 */
class Logger {
  final String name;
  bool mute = false;

  static final Map<String, Logger> _cache = <String, Logger>{};

  // 构造函数不能访问 this
  factory Logger(String name) {
    if (_cache.containsKey(name)) {
      return _cache[name];
    } else {
      final logger = Logger._internal(name);
      _cache[name] = logger;
      return logger;
    }
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!this.mute) print(msg);
  }
}

main(List<String> args) {
  var uilogger = new Logger('ui');
  var uilogger2 = new Logger('ui');
  print(uilogger2 == uilogger);
}