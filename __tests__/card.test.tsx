import renderer from 'react-test-renderer';
import Card from '../src/components/Card'

it('Renders the Card component successfully', () => {
  const component = renderer.create(
    <Card />
  )
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})