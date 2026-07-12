import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Button
 * Single reusable button used across the entire site.
 *
 * Props:
 *  - variant: 'primary' (gold fill) | 'outline' (ghost/border) | 'dark' (navy fill) | 'white'
 *  - size: 'md' | 'lg'
 *  - to: internal route (renders a <Link>)
 *  - href: external link (renders an <a>)
 *  - icon: optional Font Awesome class, e.g. "fa-solid fa-arrow-right"
 *  - iconPosition: 'left' | 'right'
 *  - onClick, type, disabled, className: standard passthroughs for <button>
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <i className={`${icon} btn__icon`} aria-hidden="true" />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <i className={`${icon} btn__icon`} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
