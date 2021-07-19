export interface BaseConstant {
  key: Key;
  fullKey: string;
  value: number;
}

export class Utils {

  public static createBaseConstant(key: Key, fullKey: string, defaultValue: number): BaseConstant {
    return {
      key,
      fullKey,
      value: defaultValue
    };
  }

  public static createConstant(key: Key, fullKey: string, defaultValue: number): Constant {
    return {
      key,
      fullKey,
      defaultValue,
      value: defaultValue
    };
  }

  public static createFromConstant(constant: BaseConstant): Constant {
    return {
      key: constant.key,
      fullKey: constant.fullKey,
      value: constant.value,
      defaultValue: constant.value
    };
  }

  public static copyKey(key: Key): Key {
    return {
      keyName: key.keyName,
      subsystem: key.subsystem
    };
  }

  public static createKey(keyName: string, subsystem: string): Key {
    return {
      keyName,
      subsystem
    };
  }


}

export interface Constant extends BaseConstant {
  defaultValue?: number;

}

export interface Key {
  keyName: string;
  subsystem: string;
}
