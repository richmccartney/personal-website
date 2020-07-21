import React, {
  FunctionComponent,
  MouseEvent,
  ReactNode,
  forwardRef,
} from 'react'

type ButtonProps = {
  /** Specify the content of your Button */
  children?: ReactNode

  /** Specify whether the Button is disables, or not */
  disabled?: boolean

  /** Optional prop to prompts a user to save the linked URL instead of navigating to it */
  download?: string

  /** Optionally specify an href for your Button to become an <a> element */
  href?: string

  /** Optionally specify the language of the linked URL */
  hrefLang?: string

  /** Optionally specify Button onClick function */
  onClick?: (e: MouseEvent<HTMLElement>) => void

  /** Optional relationship of the linked URL */
  rel?: string

  /** Optional prop to specify the role of the Button */
  role?: string

  /** Optional prop to specify the tabIndex of the Button */
  tabIndex?: number

  /** Optional prop to to display where the linked URL will show */
  target?: '_blank' | '_parent' | '_self' | '_top'

  /** Optional prop to specify the type of the Button */
  type?: 'button' | 'reset' | 'submit'
}

/**
 * Button functional component
 */
const Button: FunctionComponent<ButtonProps> = forwardRef(function Button(
  {
    children,
    disabled = false,
    download,
    href,
    hrefLang,
    onClick,
    rel,
    role,
    tabIndex,
    target,
    type = 'button',
  },
  ref
) {
  const commonAttrs = {
    ref,
    tabIndex,
    onClick,
  }
  const Component = href && !disabled ? ('a' as any) : 'button'
  const attrs =
    Component === 'button'
      ? { disabled, role, type, ...commonAttrs }
      : { download, href, hrefLang, rel, target, ...commonAttrs }

  return <Component {...attrs}>{children}</Component>
})

export default Button
