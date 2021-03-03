/**
 * 1. final只能被赋值一次，在运行时赋值
 * 2. const只能被赋值一次，在编译时赋值
 * 3. final 用来修饰变量，const 用来修饰变量也可用来修饰构造函数
 * 相同的集合final声明的会在内存中重复创建，const声明的就不会重复创建
 */

// 重命名类型
typedef Compare = int Function(int a, int b);

int sort(int a, int b) => a - b;

void main() {
  const List<int> bar = [1, 2, 3];
  const List<int> bar2 = [1, 2, 3];
  print(identical(bar, bar2));

  final List<int> bar3 = [1, 2, 3];
  final List<int> bar4 = [1, 2, 3];
  print(identical(bar3, bar4));

  print(sort is Compare);
}

// 使用场景区别
class TitleWidget {
  final String title;

  // 类需要和static配套使用
  static const String world = "hello world";
  
  TitleWidget({ this.title });
}

