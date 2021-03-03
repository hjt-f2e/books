/**
 * 数据类型
 */

// 声明枚举型
enum Status {
  none,
  running,
  stopped,
  paused
}

void main() {
//   // 声明整型
//   int aAsInt = 1;

//   // 声明浮点型
//   double aAsDouble = 1.0;

//   num aAsNumber = 1.1;

//   // 声明字符串类型 utf-16
//   String aAsString = 'hello world';
//   String s1 = '''
// You can create
// multi-line strings like this one.
//   ''';
//   print(aAsInt);
//   print(aAsDouble);
//   print(aAsNumber);
//   print(aAsString);
//   print(Status.none);
//   print('s1 = $s1');

//   print('========');

  // // 声明原始字符串类型
  // String aAsRawString = r"In a raw string, even \n isn't special.";
  // print('aAsRowString = $aAsRawString');

  // print('========');

  // int a;  // 未初始化，输出多少 ?
  // print('a=$a');

  // bool aAsBoolean = true;
  // bool bAsBoolean = false;

  // 声明一个有序集合
  // List<String> aAsList = ['hello'];
  // aAsList.add('world');
  // print(aAsList);

  // List<List<String>> aAsListArr = [['hello']];

  // print('========');

  // // 声明动态类型
  // dynamic hello;
  // hello = '12332313';

  // 声明一个空无序集合
  // Set<int> aAsSet = <int>{};  // 或者 Set(int) aAsSet = new Set();

  // aAsSet.add(1);
  // aAsSet.add(2);
  // aAsSet.add(3);
  // aAsSet.add(1);
  // aAsSet.add(2);

  // print(aAsSet);

  // print('========');

  var aAsList = ['123', {'first': 1}];
  print(aAsList);

  // 创建一个字典
  // Map<String, dynamic> aAsMap = {};
  var aAsMap = new Map();
  aAsMap['first'] = 1;
  aAsMap['second'] = '123';
  aAsMap['child'] = {'first': 1, 'second': '123'};
  print(aAsMap);

  // print(aAsMap);
  // aAsMap.forEach((key, value) {
  //   print("$key: $value");
  // });

  // print('========');

  // // Rune utf-32编码字符
  // String clapping = '\u{1f44f}';
  // print(clapping);
  // print(clapping.codeUnits);
  // print(clapping.runes.toList());

  // Runes input = new Runes('\u2665  \u{1f605}  \u{1f60e}  \u{1f47b}  \u{1f596}  \u{1f44d}');
  // print(new String.fromCharCodes(input));

  // print('========');

  // // Symbol
  // var radix = #radix;
}

// 常用类型转换
void transform() {
  // String -> int
  int one = int.parse('1');

  // String -> double
  double onePointOne = double.parse('1.1');

  // int -> String
  String oneAsString = 1.toString();

  // double -> String
  String piAsString = 3.1415926.toString();

  // int -> double
  double piAsInt = 1.toDouble();

  // double -> int
  int oneAsDouble = 3.1415.toInt();
}

// 模版字符串
void templateString() {
  String s = 'string interpolation';

  print('Dart has $s, which is very handy.');

  assert('Dart has ${s}, which is very handy.' == 'Dart has string interpolation, which is very handy.');
}