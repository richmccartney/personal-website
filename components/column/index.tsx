import styled from '@emotion/styled'

type ColumnProps = {
  /** Specify the amount of columns */
  column: number

  /** Specify the start position of your column */
  start: number

  /** Specify the amount of columns for medium screens and above */
  columnMd?: number

  /** Specify the start position of your column for medium screens and above */
  startMd?: number

  /** Specify the order position of your column */
  order?: string

  /** Specify the order position of your column for medium screens and above */
  orderMd?: string

  /** Specify the text alignment */
  align?: string

  /** Specify the text alignment or medium screens and above */
  alignMd?: string
}

/**
 * Column component.
 *
 * @component
 * @example
 * return (
 *   <Col column={6} start={4}>...</Col>
 * )
 */
const Col = styled.div<ColumnProps>`
  --column: ${(props) => props.column};

  --start: ${(props) => props.start};

  --order: ${(props) => props.order};

  --align: ${(props) => props.align};

  grid-column: var(--start) / var(--column) span;
  order: var(--order);
  text-align: var(--align);

  @media (min-width: 768px) {
    --column: ${(props) => props.columnMd};
    --start: ${(props) => props.startMd};
    --order: ${(props) => props.orderMd};
    --align: ${(props) => props.alignMd};
  }
`

export default Col
