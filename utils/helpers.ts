
import classNames from 'classnames/bind';
// @ts-ignore
import Bootstrap from './../node_modules/bootstrap/dist/css/bootstrap.css';

let cx = classNames.bind(Bootstrap);

type TStyles = {
  readonly [key: string]: string;
}

export const usc = (s: TStyles, c: string[]) => {
  return `${c.map((cc) => (s[cc])).join(' ')}`;
}

export const usb = (c: string[]) => {
  return cx(...c.map((k: string) => ({ [k]: true })));
}

export const usw = (s: TStyles, sc: string[], sb: string[]) => {
  return `${usc(s, sc)} ${usb(sb)}`;
}
