import Container from '../components/container'
import Section from '../components/section'
import Col from '../components/column'
import Link from '../components/link'

const Index = () => {
  return (
    <Container>
      <Section>
        <Col columnMd={2} column={6} start={1} startMd={1}>
          <h5>Hello world</h5>
        </Col>
        <Col columnMd={6} column={12} start={1} startMd={3}>
          <h1>&mdash; Frontend&nbsp;developer, Product&nbsp;designer</h1>
          <p>
            I’m an passionate developer and designer currenting empowering the
            future of travel and aviation as a Creative Technologist for{' '}
            <a href="https://ba.com">British Airways</a>
          </p>
        </Col>
        <Col columnMd={2} column={12} start={1} startMd={11} alignMd="right">
          <Link href="mailto:richard%40m&#99;%63a%72tn%65y.%69&#111;?subject=Hello%20Richard">
            Get in contact &mdash;
          </Link>
        </Col>
      </Section>
    </Container>
  )
}

export default Index
