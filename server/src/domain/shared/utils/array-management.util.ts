//TODO: check if it is possible to activate elements of the arrangement again
export class ArrayUtil {
  static update<T>(
    clientArray: T[],
    backendArray: T[],
    key: keyof T & string,
    parent: {
      key: keyof T & string;
      value: any;
    },
  ) {
    clientArray = clientArray ?? [];
    clientArray = clientArray.map((item) => ({
      ...item,
      [parent.key]: parent.value,
    }));
    backendArray?.forEach((bItem) => {
      const clientArrayItemIndex = clientArray.findIndex(
        (item) => item[key] === bItem[key],
      );
      if (clientArrayItemIndex !== -1) {
        const temp = clientArray[clientArrayItemIndex];
        delete temp[key];
        clientArray[clientArrayItemIndex] = {
          ...bItem,
          ...temp,
          [parent.key]: parent.value,
        };
      } else {
        clientArray.push({
          ...bItem,
          is_active: false,
          [parent.key]: parent.value,
        });
      }
    });
    return clientArray;
  }
}
