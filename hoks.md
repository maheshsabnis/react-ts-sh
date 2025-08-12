# React Hooks

- React Hooks are functions that let you use state and other React features in functional components—without converting them into class components. They simplify your component logic and make code more readable and reusable.


# Understanding Commonly Used Hooks with Simple Example

- useState – Add State to Functional Components
    - Stores a value that can change over time.

# What is useState?
- useState is a React Hook that lets you add state to functional components. State refers to data that a component can hold and update over time—like a counter value, form input, or toggle switch. Think of it as giving your component a memory

- Syntax

````typescript
const [stateVariable, setStateFunction] = useState(initialValue);

````

- stateVariable: The current value of the state.

- setStateFunction: A function used to update the state.

- initialValue: The default value the state starts with.

````typescript
import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0); // initial state = 0

  return (
    <div>
      <p>Button is clicked {value} times</p>
      <button onClick={() => setCount(value + 1)}>Click</button>
    </div>
  );
}

````

- How useState works?
- Every time you click the button, setValue is called with the new value.

Re- act automatically re-renders the component with the updated state.

# Detailed Breakdown of useState 

| **Concept**         | **Meaning**                                                                  |
|---------------------|------------------------------------------------------------------------------|
| Initial Value       | The value that state starts with (`0` in example)                            |
| State Variable      | Holds the current value (`count`)                                            |
| Updater Function    | Updates the state and triggers re-render (`setCount`)                        |
| Reactivity          | React updates the DOM whenever state changes                                 |
| Isolation           | Each call to `useState` creates independent state for that component         |

# Key Rules & Tips os using useState

- Call useState only at the top level of the component, never inside loops or conditions.
- You can use multiple useState calls to manage different pieces of state.
- Don't modify state directly!


# The useContext 

# What Is useContext?

- useContext is a React Hook that allows you to access data stored in a React Context directly, without passing it through multiple levels of components (known as prop drilling).

- Context is like a shared “data pool” that components can read from or write to — things like user settings, themes, authentication status, etc.

# Syntax
````typescript
const value = useContext(SomeContext);
````

- SomeContext: This is the context object you created with createContext().

- value: The current value of that context, which you can use in your component.

# Step-By-Step use of the useContext

1. Create a Context

````typescript
import { createContext } from 'react';

const ThemeContext = createContext('light'); // optional default value
````

2. Provide the Context Value
- Wrap your components with the Provider of your context:

````typescript
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

````
Now all components inside <App /> can access "dark" as the context value.

3. Consume Context Using useContext
````typescript
import { useContext } from 'react';

function Header() {
  const theme = useContext(ThemeContext);
  return <h1 className={theme}>Welcome!</h1>;
}

````

# Important feature uses of useContext

| **Benefit**         | **Description**                                      |
|---------------------|------------------------------------------------------|
| No Prop Drilling    | Avoid passing props down multiple layers             |
| Cleaner Code        | More readable and maintainable                       |
| Reusable State      | Share state across many components                   |


# Best Practices & Limitations of useContext

- Use context for global or app-wide values.

- Don't overuse it for fast-changing data (like animations).

- You can nest providers for multiple context values (e.g. auth + theme).

- Consider combining with useReducer for complex shared logic.


# The useEffect hook

# What Is useEffect?

- useEffect is a React Hook that allows you to perform side effects in functional components. Side effects are anything that affects something outside the scope of the function, like:
    - Fetching data from an API
    - Subscribing to a data stream or event
    - Manually modifying the DOM
    - Setting up timers or intervals
- Technically it's the React's way of saying 'Hey, after the component renders or updates with data, run this extra bit of code.'

- Basix Syntax

````typescript
useEffect(() => {
  // code to run (the effect)
}, [dependencies]);

````
- Parameters:
    - First argument: A function that defines the effect.
    - Second argument (optional): A dependency array that controls when the effect should run.

# Examples of useEffect

- Example 1: Run Once on Mount

````typescript
import { useEffect } from 'react';

useEffect(() => {
  console.log('Component mounted!');
}, []);

````
- The empty array [] means: run this only once, when the component mounts.

- Example 2: Run When Dependencies Change

````typescript
useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]);

````
- This runs every time count changes. Only when count updates, not other values.

- Example 3: Cleanup on Unmount, Perfect for things like subscriptions, timers, or event listeners.

````typescript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup before next run or unmount
  };
}, []);

````
# Behavior of useEffect with conclision based on te syntax

| **Pattern**                 | **When Effect Runs**            |
|-----------------------------|---------------------------------|
| `useEffect(() => {})`       | After every render              |
| `useEffect(() => {}, [])`   | Only once on mount              |
| `useEffect(() => {}, [x])`  | Every time `x` changes          |


# Best Practices of using useEffect

- Always use the cleanup function when setting up timers, listeners, etc.
- Avoid side effects inside render logic — useEffect keeps them separate.
- Minimize what you include in the dependency array to prevent unnecessary re-renders.


# The useReducer

# What Is useReducer?
- useReducer is a React Hook that helps you manage complex state logic. It’s an alternative to useState, especially useful when:
    - State depends on previous state.
    - Multiple pieces of state need to be updated together.
    - You want centralized and predictable state transitions like a state machine

# Syntax of useReducer

````typescript
const [state, dispatch] = useReducer(reducer, initialState);
````
- state: The current state value.
- dispatch: A function to send actions to change state.
- reducer: A function that decides how to update the state based on the action.
- initialState: The starting value of the state.

# Anatomy of a Reducer Function
- The reducer takes the current state and an action object, then returns the new state.

````typescript
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

````

# Why Use useReducer Instead of useState?

| **Scenario**                              | **Preferred Hook**  |
|-------------------------------------------|---------------------|
| Simple, isolated state                    | `useState`          |
| Complex state with multiple branches      | `useReducer`        |
| Logic-heavy state transitions             | `useReducer`        |
| Shared reducer logic across components    | `useReducer`        |


# Best Practices for useReducer

- Keep your reducer function pure (no side effects inside it).
- Use constants or enums for action types to avoid typos.
- Modularize complex reducers with helper functions or split patterns.


# The useRef Hook

# What Is useRef?

- useRef is a React Hook that gives you access to a mutable reference object. You use it to:
    - Store values that persist across renders without causing re-renders
    - Access and interact with DOM elements directly
    - Hold on to any value (like a timer ID, previous state, etc.)
- Unlike useState, changing a ref does not trigger a component re-render.

# Syntax

````typescript
const myRef = useRef(initialValue);
````
- initialValue: Optional starting value (can be null for DOM refs)
- myRef: The reference object with a .current property

# Using the useRef
- Typical Use Case: DOM Access

````typescript
function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Direct DOM access ✅
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}
````

Here’s what happens with the above code:

- You assign ref={inputRef} to the input element
- On button click, you access the DOM node and call .focus()

# Ref vs State — Key Differences

| **Feature**          | **useRef**                   | **useState**             |
|----------------------|------------------------------|--------------------------|
| Triggers Render      | No                           | Yes                      |
| DOM Access           | Yes (`ref.current`)          | No                       |
| Persist on Update    | Yes                          | Yes                      |
| Use Case             | Mutable values, DOM refs     | UI state, reactivity     |


# Common Scenarios for useRef

- Focusing input fields (ref.current.focus())
- Storing interval or timeout IDs
- Keeping track of previous props or state
- Avoiding re-renders for performance optimization

# The useCallback Hook

- This is useful when dealing with performance optimization and function memoization

# What Is useCallback?
- useCallback lets you memoize a function — meaning it returns the same instance of a function unless its dependencies change.
- This helps prevent unnecessary re-renders or recomputations, particularly when:
    - Passing functions as props to child components
    - Using functions inside dependency arrays
    - Avoiding unwanted reruns of expensive logic

# Syntax of useCallback

````typescript
const memoizedCallback = useCallback(() => {
  // function logic here
}, [dependencies]);
`````
- Parameters:
    - Callback function: The function you want to memoize.

    - Dependencies array: React will re-create the function only if one of these values changes.

# Example with Explanation

````typescript
import { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

````

- What’s happening here when the code is executed:
    - increment is memoized — it stays the same between renders unless its dependencies change.
    - This is useful if you're passing increment to a child component that only re-renders when its props change.

# Behind the Scenes: What's the Difference?

| **Hook**         | **Purpose**                        |
|------------------|------------------------------------|
| `useState`       | Store reactive values              |
| `useEffect`      | Run side effects on changes        |
| `useMemo`        | Memoize computed values            |
| `useCallback`    | Memoize functions                  |


# When to Use and Not Use useCallback

- Use it when:

    - A function is passed to memoized components (like React.memo)
    - A function is used inside a dependency array
    - Re-render performance matters
- Avoid it when:
    - The function doesn't impact performance
    - Over-memoization makes code harder to read

# The useTransition Hook

- useTransition, a lesser-known but super useful React hook introduced with React 18 — especially helpful for managing UI responsiveness during slow state updates

# What Is useTransition?

- useTransition is a hook that lets you mark certain state updates as non-urgent. This tells React: “Don't block the UI while you process the current block; keep things snappy!”

- It's ideal when:
    - You're updating large lists
    - Making expensive computations
    - Navigating between screens that depend on slow-loading data

- With useTransition, React can de-prioritize non-urgent updates, keeping the UI fast and responsive.

# Syntax

````typescript
const [isPending, startTransition] = useTransition();

`````

- startTransition(callback): Wrap your non-urgent logic inside this function.
- isPending: A boolean that tells you if the transition is still happening — perfect for showing a loading spinner or progress indicator.

# Example

````typescript
import React, { useState, useTransition } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  // Simulate a big dataset
  const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Start a low-priority transition
    startTransition(() => {
      const filteredList = bigList.filter(item => item.includes(value));
      setList(filteredList);
    });
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Live Filter Demo</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type to filter..."
      />
      {isPending && <p>🔄 Filtering list, please wait...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
`````

- Explanation
    - useState hooks:
        - input keeps track of what the user types.
        - list holds the filtered output from our dataset.

    - useTransition() returns:
        - startTransition — A function to wrap your non-urgent updates.
        - isPending — A boolean to show if the transition is in progress.

    - startTransition(() => {...})
        - Wrap the code that might be slow (like filtering a big array). This tells React: “Don’t prioritize this, just do it when it can.”

    - isPending
        - Lets you display a spinner or message while the transition runs, which improves perceived performance.
# Benefits
    - The text input remains fast and responsive—even when filtering a large list.
    - You get smoother user experiences in data-heavy apps.

# Best Practices
    - Use for large or expensive state updates that might block the UI
    - Avoid overusing — only wrap updates that don’t need to feel instant
    - Combine with Suspense or lazy-loading for smoother UX

# The useMemo Hook

- useMemo, a powerful React hook designed to optimize performance by memoizing computed values

# What Is useMemo?
    - useMemo lets you cache the result of a computation, so React can skip re-calculating it unless the inputs (dependencies) change.
    -  This “Only re-run this expensive calculation if its inputs have changed.”
    - It’s perfect for:
        - Optimizing slow functions
        - Avoiding unnecessary recalculations
        - Improving performance in large or complex components
    
# Syntax

````typescript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
````

- computeExpensiveValue(a, b): Your expensive function
- [a, b]: Dependency array — recalculate only when a or b changes
- memoizedValue: The returned memoized result

# Example: Avoiding Slow Recalculation

````typescript
function MyExpensiveComponent({ input }) {
  const slowCalculation = (num) => {
    // Simulate heavy computation
    for (let i = 0; i < 1e7; i++) {}
    return num * 2;
  };

  const result = useMemo(() => slowCalculation(input), [input]);

  return <p>Result: {result}</p>;
}

````
-  Without useMemo, every render would redo the calculation  With useMemo, it only recalculates when input changes

# useMemo vs useCallback

| **Hook**         | **Purpose**                        |
|------------------|------------------------------------|
| `useState`       | Store reactive values              |
| `useEffect`      | Run side effects on changes        |
| `useMemo`        | Memoize computed values            |
| `useCallback`    | Memoize functions                  |


# When to Use useMemo and when to avoid

- Good use cases:
    - Heavy computations (e.g., math, filtering, sorting)
    - Derived data from props or state
    - Preventing unnecessary renders for child components
- Avoid when:
    - Calculations are light and fast
    - It adds complexity without measurable performance gain

# The execution of useMemo
- React stores your memoized value and checks the dependency array:
    - If nothing changes → it returns the cached value
    - If dependencies change → it re-executes the function
        