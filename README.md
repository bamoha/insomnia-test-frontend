

## Insomnia Developer Test

This React.js/Next.js application showcases a seamless user experience through two pages: the Bitcoin Price Index and NFT List. The Bitcoin Price Index provides data on bitcoin, while the NFT List presents a curated collection of NFT artworks. Styled with Chakra UI and CSS, React.js and Next.js, this application ensures fast data retrieval, smooth navigation, and an immersive browsing experience, making it a reliable and cutting-edge solution in the world of web applications.

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/bamoha/insomnia-test-frontend.git
```

2. Install dependencies

```bash
npm i
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The application is deployed to [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack

1. NextJs/React
2. Chakra UI
3. Typescript
4. React Toastify


## Design Decisions

The application was designed and structured using a modular approach, emphasizing the importance of separation of concerns to ensure clean and maintainable code. Each page within the application adheres to this principle, effectively dividing the responsibilities across multiple files.

To achieve this modular architecture, the application leverages a component-based approach where each file handles a specific aspect of the page's functionality. Firstly, there is a dedicated file responsible for managing the view, defining the layout, and rendering the user interface components. This separation allows for a clear and intuitive understanding of the visual presentation of the page, making it easier to modify or update the UI elements as needed.

In addition to the view file, another file focuses on handling the logic behind the page's functionality, employing the power of React hooks. These hooks enable efficient state management, allowing the application to respond to user interactions, manage data flow, and execute necessary computations. By encapsulating the logic within its dedicated file, the codebase remains organized and promotes reusability, facilitating easier maintenance and future enhancements.

Furthermore, the application utilizes another file dedicated to managing server calls and API interactions. This file handles all communication with external services or data sources, abstracting away the complexities of network requests. By encapsulating the server-side logic, this separation of concern ensures a clear distinction between client-side rendering and server-side operations, enhancing the application's scalability and extensibility.

By adopting this modular structure, the application benefits from improved code readability, easier collaboration among team members, and enhanced code reusability. This separation of concerns allows developers to focus on specific aspects of functionality without being overwhelmed by unrelated code, facilitating efficient debugging and making it easier to maintain and scale the application over time.

