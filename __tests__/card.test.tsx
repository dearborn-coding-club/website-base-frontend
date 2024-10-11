import renderer from 'react-test-renderer';
import Card from '../src/components/Card'

it('sums numbers', () => {
  expect(1).toEqual(1);
  expect(1).toEqual(1);
});

it('Renders the component class', () => {
  const component = renderer.create(
    <Card />
  )
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})