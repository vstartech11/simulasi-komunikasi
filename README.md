# Communication Models Simulation

This project simulates four different communication models: **Request-Response**, **Publish-Subscribe**, **Message Passing**, and **Remote Procedure Call (RPC)**. The simulation is built using **React.js** and allows users to interact with each communication model and observe how messages are sent, received, and processed.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
  - [Request-Response](#request-response)
  - [Publish-Subscribe](#publish-subscribe)
  - [Message Passing](#message-passing)
  - [RPC](#rpc)
- [Docker Setup](#docker-setup)

## About the Project

The **Communication Models Simulation** project allows users to compare different communication models used in distributed systems. Each model demonstrates the flow of messages and interactions between senders and receivers, providing an educational tool for learning about these communication paradigms.

## Features

- **Request-Response**: Simulate a client-server model where requests are sent, and responses are returned.
- **Publish-Subscribe**: Simulate a model where messages are published to multiple subscribers.
- **Message Passing**: Simulate direct message passing between nodes without a central server.
- **Remote Procedure Call (RPC)**: Simulate invoking remote procedures and receiving responses.
- **Interactive UI**: Choose the communication model through a dropdown and observe the behavior.
- **Separation of Sender and Receiver**: See how messages flow between sender and receiver components for each model.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [Git](https://git-scm.com/)
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vstartech11/simulasi-komunikasi.git
2. Navigate into the project directory:
   ```bash
   cd simulasi-komunikasi
3. Install the required dependencies:
   ```bash
   npm install

### Running the Project

To start the project in development mode:
  ``bash
  npm start

## Usage

### Request-Response

This model simulates a request-response pattern where the client (sender) sends a request to the server, and the server (receiver) returns a response. 

**Steps:**
1. Select "Request-Response" from the dropdown menu.
2. Input your request message in the input field.
3. Click "Send Request" to see the response displayed below the input.

**Flow:**
- A request message is sent from the client to the server.
- The server processes the request and returns a response.
- The client displays the server's response.

### Publish-Subscribe

This model simulates the Publish-Subscribe communication model where messages are published to a topic, and all subscribed receivers (clients) can get those messages.

**Steps:**
1. Select "Publish-Subscribe" from the dropdown menu.
2. Input the message you want to publish in the input field.
3. Click "Publish Message" to broadcast the message to all subscribers.
4. A list of received messages is displayed below.

**Flow:**
- The sender (publisher) publishes a message to a topic.
- All subscribers (receivers) listen to that topic and receive the broadcast message.

### Message Passing

This model simulates direct message passing between nodes without a central server or broker.

**Steps:**
1. Select "Message Passing" from the dropdown menu.
2. Type your message in the input field.
3. Click "Send Message" to pass the message.
4. A list of sent messages is displayed below.

**Flow:**
- Messages are passed directly between nodes.
- The sender sends a message to a designated receiver.

### RPC (Remote Procedure Call)

In this model, the sender (client) invokes a remote procedure hosted on a server, and the server returns the result to the client.

**Steps:**
1. Select "Remote Procedure Call (RPC)" from the dropdown menu.
2. Enter the input for the RPC in the input field.
3. Click "Call RPC" to invoke the remote procedure.
4. The response from the RPC server is displayed below.

**Flow:**
- The client invokes a procedure on the server, sending an input value.
- The server executes the procedure and sends back the result to the client.

## Docker Setup

To run this project using Docker:

1. Ensure Docker is installed and running on your machine.
2. Build the Docker image:
   ```bash
   docker build -t simulasi-komunikasi .
3. Run the Docker container
   ```bash
   docker run -p 80:80 simulasi-komunikasi
5. Open your browser and navigate to http://localhost
