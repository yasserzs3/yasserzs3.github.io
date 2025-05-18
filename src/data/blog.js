const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    slug: "getting-started-with-react-hooks",
    date: "2023-05-15",
    excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    content: `
      # Getting Started with React Hooks

      React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. They allow you to "hook into" React state and lifecycle features from function components.

      ## Why Hooks?

      Hooks solve several problems in React:
      - They let you reuse stateful logic between components without changing your component hierarchy
      - They let you split one component into smaller functions based on related pieces
      - They let you use more of React's features without classes

      ## The useState Hook

      The useState hook lets you add React state to function components:

      \`\`\`jsx
      import React, { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`

      ## The useEffect Hook

      The useEffect hook lets you perform side effects in function components:

      \`\`\`jsx
      import React, { useState, useEffect } from 'react';

      function Example() {
        const [count, setCount] = useState(0);

        useEffect(() => {
          document.title = \`You clicked \${count} times\`;
        });

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`

      ## Rules of Hooks

      - Only call hooks at the top level of your function components
      - Only call hooks from React function components or custom hooks

      Start integrating hooks into your React applications today for cleaner, more reusable code!
    `
  },
  {
    id: 2,
    title: "Building Responsive UIs with Tailwind CSS",
    slug: "building-responsive-uis-with-tailwind-css",
    date: "2023-06-22",
    excerpt: "Discover how to create beautiful responsive interfaces quickly using Tailwind CSS utility classes.",
    content: `
      # Building Responsive UIs with Tailwind CSS

      Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. It provides low-level utility classes that let you build completely custom designs.

      ## Why Tailwind CSS?

      - No more silly names for CSS classes
      - No more jumping between HTML and CSS files
      - Make changes without worrying about breaking existing styles
      - Responsive design made easy

      ## Getting Started

      To install Tailwind CSS, you can use npm:

      \`\`\`bash
      npm install tailwindcss
      \`\`\`

      ## Responsive Design with Tailwind

      Tailwind makes responsive design a breeze with its built-in breakpoint prefixes:

      \`\`\`html
      <div class="text-center sm:text-left md:text-right lg:text-justify">
        This text will have different alignments on different screen sizes.
      </div>
      \`\`\`

      ## Customization

      Tailwind is highly customizable through its configuration file:

      \`\`\`js
      // tailwind.config.js
      module.exports = {
        theme: {
          extend: {
            colors: {
              'brand-blue': '#1992d4',
            },
            spacing: {
              '72': '18rem',
              '84': '21rem',
              '96': '24rem',
            }
          }
        }
      }
      \`\`\`

      Start using Tailwind CSS today to build fast, responsive, and maintainable user interfaces!
    `
  },
  {
    id: 3,
    title: "Modern JavaScript Features Every Developer Should Know",
    slug: "modern-javascript-features-every-developer-should-know",
    date: "2023-07-10",
    excerpt: "Explore essential modern JavaScript features that will help you write cleaner, more efficient code.",
    content: `
      # Modern JavaScript Features Every Developer Should Know

      JavaScript has evolved significantly over the past few years. Let's explore some key features that can help you write better code.

      ## Arrow Functions

      Arrow functions provide a concise syntax for writing functions:

      \`\`\`javascript
      // Traditional function
      function add(a, b) {
        return a + b;
      }

      // Arrow function
      const add = (a, b) => a + b;
      \`\`\`

      ## Destructuring

      Destructuring allows you to extract values from arrays and objects:

      \`\`\`javascript
      // Array destructuring
      const [first, second] = [1, 2];

      // Object destructuring
      const { name, age } = { name: 'John', age: 30 };
      \`\`\`

      ## Spread Operator

      The spread operator lets you expand arrays and objects:

      \`\`\`javascript
      // Array spread
      const newArray = [...oldArray, newItem];

      // Object spread
      const newObject = { ...oldObject, newProperty: 'value' };
      \`\`\`

      ## Optional Chaining

      Optional chaining helps you access nested properties safely:

      \`\`\`javascript
      // Instead of: user && user.address && user.address.street
      const street = user?.address?.street;
      \`\`\`

      ## Nullish Coalescing

      The nullish coalescing operator provides a way to specify a default value:

      \`\`\`javascript
      // Returns right side only if left is null or undefined
      const value = maybeNull ?? defaultValue;
      \`\`\`

      Learning these modern JavaScript features will help you write more elegant and maintainable code.
    `
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    slug: "optimizing-react-performance",
    date: "2023-08-05",
    excerpt: "Learn strategies and techniques to improve the performance of your React applications.",
    content: `
      # Optimizing React Performance

      Performance optimization is crucial for delivering a good user experience. Let's explore some strategies for optimizing React applications.

      ## Using React.memo

      Prevent unnecessary re-renders with React.memo:

      \`\`\`jsx
      const MyComponent = React.memo(function MyComponent(props) {
        // Only re-renders if props change
        return <div>{props.name}</div>;
      });
      \`\`\`

      ## Virtual List with React Window

      Render large lists efficiently:

      \`\`\`jsx
      import { FixedSizeList } from 'react-window';

      const Row = ({ index, style }) => (
        <div style={style}>Row {index}</div>
      );

      const Example = () => (
        <FixedSizeList
          height={500}
          width={500}
          itemCount={10000}
          itemSize={35}
        >
          {Row}
        </FixedSizeList>
      );
      \`\`\`

      ## Code Splitting

      Split your code into smaller chunks:

      \`\`\`jsx
      import React, { Suspense, lazy } from 'react';

      const OtherComponent = lazy(() => import('./OtherComponent'));

      function MyComponent() {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </Suspense>
        );
      }
      \`\`\`

      ## useMemo and useCallback

      Memoize expensive calculations and callbacks:

      \`\`\`jsx
      // Memoize calculation
      const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

      // Memoize callback
      const memoizedCallback = useCallback(() => {
        doSomething(a, b);
      }, [a, b]);
      \`\`\`

      Implementing these optimizations can significantly improve the performance of your React applications.
    `
  },
];

export default blogPosts; 