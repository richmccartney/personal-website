import styled from '@emotion/styled'

type LinkProps = {
  align?: string
  alignMd?: string
}

/**
 * Link component.
 *
 * @component
 * @example
 * return (
 *   <Link href='#'>Click here</Link>
 * )
 */
const Link = styled.a<LinkProps>`
  --align: ${(props: LinkProps) => (props.align ? props.align : 'left')};

  text-transform: uppercase;
  text-decoration: none;
  font-size: var(--rem-sie-0-75);
  text-align: var(--align);

  @media (min-width: 768px) {
    --align: ${(props: LinkProps) => props.alignMd};
  }
`

export default Link
