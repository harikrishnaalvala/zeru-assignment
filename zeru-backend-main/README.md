# EigenLayer Restaking Info API

This project provides a RESTful API to expose EigenLayer restaking data. It includes user restaking information, validator metadata, and reward insights. The data is structured similarly to how it would appear from EigenLayer subgraphs or on-chain sources.

## Features

- User restaking info: address, amount restaked, and target AVS operator.
- Validator metadata: operator address, total delegated stake, slashing history, and status.
- Reward insights: total rewards received by a wallet and breakdown per validator.

## Tech Stack

- Node.js + Express (API)
- MongoDB with Mongoose (Database)
- Axios (for API/subgraph interaction)
- dotenv, nodemon (utility/dev tools)


## Endpoints

- `GET /restakers` – List of restakers with amount and validator.
- `GET /validators` – List of validators with metadata.
- `GET /rewards/:address` – Reward info for a specific wallet address.

