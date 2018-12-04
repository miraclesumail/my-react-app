import { toggleAlert } from "../redux/action";
import { store } from "../index";

export const promise = fn => {
  return new Promise((resolve, reject) => {
    fn();
    setTimeout(() => {
      resolve();
    }, 1500);
  });
};

export const showAlert = ({ text, category }) => {
  const fn = () => {
    store.dispatch(
      toggleAlert({
        text,
        category,
        status: 1
      })
    );

    setTimeout(() => {
      store.dispatch({
        type: "CHANGE_ALERT",
        canChange: 1
      });
    }, 2000);
  };

  promise(fn).then(() => {
    store.dispatch(
      toggleAlert({
        status: 0
      })
    );
  });
};

export const baseString = arr => {
  // 解析返回的Buffer数据流
  let base64String =
    "data:image/png;base64," +
    btoa(String.fromCharCode(...new Uint8Array(arr)));
  return base64String;
};
