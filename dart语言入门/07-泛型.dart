/**
 * 泛型
 */

// 没有泛型支持的情况
abstract class StringCache {
  String getCache(String key);

  void setCache(String key, String value);
}

abstract class BooleanCache {
  bool getCache(String key);

  void setCache(String key, bool value);
}

// 有泛型支持的情况
abstract class Cache<T> {
  T getCache(String key);

  void setCache(String key, T value);
}

class CustomMap<T> implements Cache<T> {
  Map<String, T> _cache = {};

  @override
  T getCache(String key) {
    if (this._cache.containsKey(key)) {
      return this._cache[key];
    }

    return null;
  }

  @override
  void setCache(String key, T value) {
    this._cache[key] = value;
  }

  void display() {
    print(this._cache);
  }
}

// 限制泛型类型
class Foo<T extends StringCache> {

}

main() {
  // var map = new CustomMap<String>();
  // map.setCache('key', 'value');

  // String value = map.getCache('key');
  // print(value);

  var map2 = new CustomMap();
  map2.setCache('abc', 123);
  map2.setCache('key', '123');
  map2.display();

  // 这里就会报错
  // var foo = Foo<Object>();
}