import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="37"
      height="34"
      viewBox="0 0 37 34"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="37" height="34" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <path d="M0 0H4V28.3933L0 34V0Z" fill="currentColor"/>
        <path d="M4 0H12L9.45455 4H4V0Z" fill="currentColor"/>
        <path d="M19 0H36.8049L34 4H16.2787L19 0Z" fill="currentColor"/>
        <path d="M28.8718 4H34L24.1282 17H19L28.8718 4Z" fill="currentColor"/>
        <path d="M19 17H24.2174L37 34H31.913L19 17Z" fill="currentColor"/>
        <path d="M16.2778 4H21L4 28.3945V21.6304L16.2778 4Z" fill="currentColor"/>
        <rect x="19" y="30" width="13" height="4" fill="currentColor"/>
        <path d="M15.6962 22L20.6037 29.9535L19 34L13.6037 25.2609L15.6962 22Z" fill="currentColor"/>
      </g>
      {highlight && (
        <rect className={styles.highlight} width="37" height="34" fill="currentcolor" />
      )}
    </svg>
  );
});
