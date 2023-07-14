/*
 * @Descripttion: 
 * @version: 
 * @Author: Hamster Huang
 * @Date: 2023-04-11 17:01:10
 * @LastEditors: Hamster Huang
 * @LastEditTime: 2023-07-14 19:41:42
 */
export function sleep(milliseconds: number) {
  return new Promise((r) => setTimeout(r, milliseconds,0));
}
