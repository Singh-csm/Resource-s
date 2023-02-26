DOM:
DOM stands for Document Object Model. It is a programming interface for web documents. In other words, it represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. With the DOM, programmers can access and manipulate the content of a web page.

Pass by value and Pass by reference:
Pass by value and pass by reference are two methods of passing data between functions or variables. In pass by value, a copy of the data is created and passed to the function or variable, whereas in pass by reference, a reference to the original data is passed. In JavaScript, primitive types such as numbers and strings are passed by value, whereas objects and arrays are passed by reference.

Promises:
Promises are a way to handle asynchronous operations in JavaScript. A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a cleaner syntax for handling asynchronous operations than using callbacks.

Closures:
A closure is a function that has access to variables in its outer scope, even after the outer function has returned. Closures are used in JavaScript to create private variables and functions, as well as to implement callbacks and other advanced programming techniques.

SYNC and ASYNC:
SYNC and ASYNC refer to synchronous and asynchronous programming. In synchronous programming, each operation is executed one after another, and the program waits for each operation to complete before moving on to the next one. In asynchronous programming, operations can be executed simultaneously, and the program does not have to wait for each operation to complete before moving on to the next one.

Components:
Components are a fundamental building block of modern front-end web development frameworks like React. A component is a modular, reusable piece of code that encapsulates a specific piece of functionality or UI element.

useState:
useState is a React hook that allows you to add state to a functional component. State allows you to store and update data within a component, and can be used to create dynamic UIs.

Event loop:
The event loop is a mechanism in JavaScript that allows for asynchronous programming. It is responsible for handling callbacks and ensuring that the program executes all of its code in the correct order.

Callback:
A callback is a function that is passed as an argument to another function and is called when a specific event occurs or a specific condition is met. Callbacks are commonly used in JavaScript to handle asynchronous programming.

RESTful API:
A RESTful API is a type of web API that follows the principles of Representational State Transfer (REST). RESTful APIs use HTTP methods like GET, POST, PUT, and DELETE to manipulate resources on a server.

Middleware:
Middleware is software that sits between two applications or systems, allowing them to communicate with each other. In the context of web development, middleware is often used to handle common tasks like authentication, logging, and request parsing.

Error Handling:
Error handling is the process of dealing with errors that occur in a program. In JavaScript, errors can be caught and handled using try-catch blocks, which allow you to gracefully handle errors without crashing the entire program.

Reference and Populate:
Reference and populate are terms used in MongoDB to describe the relationship between documents in different collections. Referencing allows you to store references to other documents in a collection, while populating allows you to retrieve those referenced documents.

Replica Set:
A replica set is a group of MongoDB servers that maintain the same data set. Replica sets provide redundancy and high availability, and are used to ensure that data is always available, even in the event of server failures.

Transaction Property in DBMS:
Transaction is a property of database management systems that ensures the consistency, integrity, and durability of data during database operations. A transaction is a set of operations that must either all succeed or all fail,

Higher-order component: A higher-order component works by taking a component as an argument and returning a new component with additional props, state, or functionality. For example, an HOC may add authentication logic or data fetching capabilities to a component.

Pure component: In ReactJS, a pure component is a type of component that is optimized for performance. Pure components are a subclass of regular class components and are implemented using the React.PureComponent base class.

Streams: In Node.js, streams are a way to handle reading and writing large amounts of data in chunks, rather than all at once. Streams allow you to process data as it is being streamed, which can improve performance and reduce memory usage.
four types :
Readable streams: streams from which data can be read, for example, reading from a file or an HTTP response.
Writable streams: streams to which data can be written, for example, writing to a file or an HTTP request.
Duplex streams: streams that can both read from and write to the same stream, for example, a socket connection.
Transform streams: a type of duplex stream that can modify the data as it is being read or written, for example, compressing or encrypting data.

SOAP: SOAP APIs are commonly used in enterprise applications, where they provide a standardized way for different systems to communicate with each other. SOAP provides a rich set of features for managing security, transactional integrity, and other aspects of distributed computing

However, SOAP has some limitations compared to other web service protocols, such as REST (Representational State Transfer), which is based on a simpler, more lightweight architecture. REST APIs are more commonly used for web-based applications and mobile apps, while SOAP APIs are more commonly used in enterprise applications and other systems that require advanced functionality.

Sharding: In a sharded MongoDB deployment, the data is divided into chunks and distributed across multiple servers or nodes, called shards. Each shard contains a subset of the data, and queries that span multiple shards are automatically routed to the appropriate nodes

Indexing: Indexing is a technique used in databases to improve the performance of queries. An index is a data structure that allows for faster searching and sorting of data based on one or more fields. In a database, an index is created on a table column or a set of columns that are frequently searched or used for sorting.

useEffect: useEffect is a hook function in React that enables you to add side effects in functional components. It is used to perform tasks such as fetching data, subscribing to events, or updating the DOM. useEffect is called after the component has rendered or re-rendered.

useEffect takes two arguments, a function that performs the side effect, and an array of dependencies that determines when the effect should be re-run. The function passed as the first argument is called the "effect function", and it can return a "cleanup function" that is called when the component is unmounted or the dependencies change.

call method: In JavaScript, the call method is a built-in function that allows you to invoke a function with a specific this value and arguments. The call method is a property of all JavaScript functions, and it takes two or more arguments:

The this value to be used inside the function.
The arguments to be passed to the function.

bind : The bind method is used to create a new function that has the same functionality as the original function, but with a different this value and possibly pre-defined arguments. This is useful when you want to use a function as a method of a different object, or when you want to create a partially applied function.

apply: The apply method is similar to the call method, but it takes an array of arguments instead of individual arguments.

assert in nodejs : assert is a built-in module in Node.js and a debugging tool in JavaScript that allows you to write assertions for your code. Assertions are statements that evaluate to either true or false and are used to check that your code is working as expected.
