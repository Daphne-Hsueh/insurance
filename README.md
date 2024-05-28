# Insurance Policyholder Relation Search System

This project is a visual tool for exploring the relationships between insurance policyholders.

## Features

- **Search Policyholders**: Users can search for policyholders using their unique code.
- **Visualize Relationships**: The relationships between policyholders are displayed as a binary tree, with each node representing a policyholder.
- **Explore Tree**: Users can click on any node to make that policyholder the new root of the tree, allowing them to explore the tree interactively.
- **Navigate Upwards**: Users can press the "upper layer" button to navigate up the tree and see the parent of the current root policyholder.

## Tech Stack

- **React**: The UI is built with React, a popular JavaScript library for building user interfaces.
- **Mirage.js**: This project uses Mirage.js to mock a server for development. This allows us to simulate server-side behavior without a real server.

## Installation

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/your-repo-name.git`
2. Navigate to the project directory: `cd your-repo-name`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
