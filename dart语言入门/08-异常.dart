/**
 * 异常
 */

class FormatException implements Exception {
  final String message;

  FormatException(this.message);

  @override
  String toString() {
    return super.toString();
  }
}

// 捕获自定义异常
void exception_demo() {
  try {
    throw FormatException('FormatException: error message');
  } on FormatException {
    print('捕获到FormatException异常');
  } catch(e) {
    print(e);
  }
}

// rethrow 案例
void misbehave() {
  try {
    dynamic foo = true;
    print(foo++);
  } catch(e) {
    print('misbehave() partially handled ${e.runtimeType}');
    rethrow;
  }
}

void main(List<String> args) {
  try {
    misbehave();
  } catch(e) {
    print('main() finished handling ${e.runtimeType}');
  }

  exception_demo();
}