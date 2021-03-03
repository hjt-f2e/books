/**
 * 异步
 */
import 'dart:async';
import 'dart:convert';
import 'dart:io';

Future<String> lookUpVersion() async {
  return '1.0.0';
}

void checkVersion() async {
  String version = await lookUpVersion();
  print(version);
}

// 创建微任务
void microTask() {
  Future.microtask(() => print('microTask result'));
}

// 获取百度网页
Future<String> getBaiduHtml() async {
  var client = new HttpClient();
  var response = await client
      .getUrl(Uri.parse('https://www.baidu.com'))
      .then((value) => value.close(), onError: (error) {
    // 处理异常
    print(error);
  });

  String result = '';
  await for (var value in response.transform(utf8.decoder)) {
    result = '$result$value';
  }

  return result;
}

// event loop
void eventLoop() {
  print('01');
  checkVersion();
  microTask();
  print('02');
}

void main() {
  eventLoop();

  // 异步Future链式调用
  lookUpVersion()
      .then((value) => print(value))
      .then((value) => print('hello Future'));

  // 发送异步请求
  // getBaiduHtml().then((value) {
  //   print(value);
  // }).catchError((err) {
  //   print(err);
  // });

  makeStream();
}

// 创建流
void makeStream() {
  // 任意类型的流
  StreamController controller = new StreamController();
  controller.sink.add(345);
  controller.sink.add('hello');
  // controller.sink.add(Anything);

  // 消费流
  controller.stream.listen((event) => print(event));

  // 指定类型流
  StreamController<int> numController = new StreamController();
  numController.sink.add(123);

  // 或者StreamController.broadcast()
  var stream = numController.stream.asBroadcastStream();
  stream.listen((event) {
    print(event);
  });
  stream.listen((event) {
    print(event);
  });

  // Stream.fromFuture 创建新的单订阅流
  var fStream = Stream.fromFuture(getBaiduHtml());
  fStream.listen((event) {
    print(event);
  });
}
