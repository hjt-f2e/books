abstract class ICache<T> {
  T getCache(String key);

  void setCache(String key, T value);

  void display();
}

class FileCache<T> implements ICache<T> {
  final Map<String, T> _cache = {};

  @override
  T getCache(String key) {
    return _cache[key];
  }
  
  @override
  void setCache(String key, T value) {
    _cache[key] = value;
  }

  @override
  void display() {
    print(this._cache);
  }
}

class MCache<T> implements ICache<T> {
  @override
  T getCache(String key) {
    // TODO: implement getCache
    throw UnimplementedError();
  }
  
    @override
    void setCache(String key, T value) {
    // TODO: implement setCache
  }

  @override
  void display() {
    // TODO: implement display
  }
}

enum Store {
  file,
  memory
}

class Cache {
  Store _stroe = Store.file;

  void changeStore(Store store) => this._stroe = store;

  ICache<T> getStore<T>() {
    switch (_stroe) {
      case Store.file:
      return new FileCache<T>();
      case Store.memory:
      return new MCache<T>();
      default:
      throw 'error';
    }
  }

  static ICache<T> getCacheWithStoreType<T>(Store stroe) {
    switch (stroe) {
      case Store.file:
        var cache = new Cache();
        return cache.getStore<T>();
        break;
      default:
      throw 'error';
    }
  }
}

main(List<String> args) {
  // var p = new Cache();
  // var store = p.getStore();
  // store.setCache('key', '123');
  // store.setCache('key2', 456);
  // store.display();

  ICache<String> store = Cache.getCacheWithStoreType<String>(Store.file);
  store.setCache('key', '123');
  store.display();
}