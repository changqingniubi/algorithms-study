/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-05 17:01:52
 * @LastEditTime: 2021-09-05 17:01:53
 * @LastEditors: changqing
 * @Usage:
 */
export default class Book {
  constructor(title) {
    this.title = title;
  }
  printTitle() {
    console.log(this.title);
  }
}
