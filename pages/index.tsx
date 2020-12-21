import Container from '../components/container'
import Section from '../components/section'
import Col from '../components/column'

const Index = () => {
  return (
    <Container>
      <Section>
        <Col columnMd={6} column={12} start={1} startMd={2}>
          <p>&mdash; Hello world</p>
          <h1>
            My name’s Richard. I’m&nbsp;a Lead Frontend&nbsp;Developer &amp;
            Product Designer.
          </h1>
          <button>Scroll down</button>
        </Col>
        <Col column={12} columnMd={5} start={1} startMd={8}>
          <img src="https://placehold.it/350x350" alt="" />
        </Col>
      </Section>
      <Section>
        <Col start={1} startMd={2} column={12} columnMd={7}>
          <p>&mdash; What I do</p>
          <h2>
            Currently empowering the future of insurance leading design system
            development for{' '}
            <a href="https://www.lloyds.com/">Lloyds of London</a>.
          </h2>
        </Col>
        <Col column={12} columnMd={3} start={1} startMd={10}>
          <img src="https://placehold.it/350x350" alt="" />
        </Col>
      </Section>
    </Container>
  )
}

export default Index
