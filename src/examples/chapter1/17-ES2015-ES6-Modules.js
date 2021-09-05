/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-05 17:02:48
 * @LastEditTime: 2021-09-05 17:02:49
 * @LastEditors: changqing
 * @Usage:
 */
import * as area from "./17-CalcArea.js"; // we need the .js to run this code in the browser
import Book from "./17-Book.js";

console.log(area.circle(2));
console.log(area.square(2));

const myBook = new Book("some title");
myBook.printTitle();
