import style from "./button.module.scss";

const Button = (props: any) => {
  return <button className={style.button}>{props.children}</button>;
};

export default Button;
