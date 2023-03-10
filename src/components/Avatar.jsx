import styles from './Avatar.module.css'
// Valor default de hasBorder é true, caso seja enviado um valor o default será trocado
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}