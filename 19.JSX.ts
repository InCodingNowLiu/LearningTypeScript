// 无状态函数组件

interface FooProp {
  name: string;
  X: number;
  Y: number;
}

declare function AnotherComponent(prop: { name: string });

function ComponentFoo(prop: FooProp) {
  return <AnotherComponent name={prop.name}/>;
}

const Button = (prop: {value: string}, context: {color: string}) => <button>

interface ClickableProps {
  children: JSX.Element[] | JSX.Element
}

interface HomeProps extends ClickablePros {
  home: JSX.Element
}

interface SideProps extends ClickableProps {
  side: JSX.Element | string;
}

function MainButton(prop: HomeProps): JSX.Element;
function MainButton(prop: SideProps): JSX.Element {
  ...
}

// Go on for further usage
