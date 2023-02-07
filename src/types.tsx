import { FC, ReactNode } from 'react';

type propsTypes = {
	children: ReactNode;
};

const component: FC<propsTypes> = (children) => {
	return <>{children}</>;
};

type clickEventTypes = {
	handleClick: () => void;
	mouseEvent: (event: React.MouseEvent) => void;
	mouseEvent2: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const clickEvent = (props: clickEventTypes) => {
	return (
		<>
			<button onClick={props.handleClick}>Click</button>
			<button onClick={(event) => props.mouseEvent(event)}>Click</button>
			<button onClick={(event) => props.mouseEvent2(event, 1)}>Click</button>
		</>
	);
};


// type InputTypes = {
// 	value: () => void;
// 	handleChange: (event: React.ChangeEventHandler<HTMLButtonElement>) => void;
// };

// const Input = (props: InputTypes) => {
// 	return (
// 		<>
// 			<input type="text" value={props.value}  onChange={props.handleChange}/>
// 		</>
// 	);
// };


type MyTypeHere = null
type OptionalType = null
type Props = null
type MyButtonWithForwardRef = any

type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";
  /** an object with known properties (but could have more at runtime) */
  obj: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];
  /** any non-primitive value - can't access any properties (NOT COMMON but useful as placeholder) */
  obj2: object;
  /** an interface with no required properties - (NOT COMMON, except for things like `React.Component<{}, State>`) */
  obj3: {};
  /** a dict object with any number of properties of the same type */
  dict1: {
    [key: string]: MyTypeHere;
  };
  dict2: Record<string, MyTypeHere>; // equivalent to dict1
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void;
  /** function type syntax that takes an event (VERY COMMON) */
  onChange2: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick2(event: React.MouseEvent<HTMLButtonElement>): void;
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function;
  /** an optional prop (VERY COMMON!) */
  optional?: OptionalType;
  /** when passing down the state setter function returned by `useState` to a child component. `number` is an example, swap out with whatever the type of your state */
  setState: React.Dispatch<React.SetStateAction<number>>;
};

export declare interface ReactAppProps {
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
  //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
  props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicitly not forwarding its ref
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}


// Quote @ferdaber: A more technical explanation is that a valid React node is not the same 
//   thing as what is returned by React.createElement. Regardless of what a component ends 
//   up rendering, React.createElement always returns an object, which is the JSX.Element 
//   interface, but React.ReactNode is the set of all possible return values of a component.

// JSX.Element -> Return value of React.createElement
// React.ReactNode -> Return value of a component