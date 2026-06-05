# create-chasi-ts

CLI tool for scaffolding [chasi-ts](https://github.com/rocketbean/chasi-ts) projects and generating boilerplate files.

## Installation

```bash
npm install -g @rocketbean/create-chasi-ts
```

## Usage

### Create a new project

```bash
create-chasi-ts
```

or

```bash
npm create @rocketbean/chasi-ts
```

The CLI will prompt for project details (name, description, version, author, email), then clone the chasi-ts template, configure `package.json`, and install dependencies automatically.

### Generate files in an existing project

```bash
chasi create <name> [options]
```

**Options**

| Flag | Description | Output |
|------|-------------|--------|
| `-c, --controller` | Create a controller | `src/container/controllers/<Name>Controller.ts` |
| `-m, --model` | Create a model | `src/container/models/<Name>.ts` |
| `-w, --middleware` | Create a middleware | `src/container/middlewares/<Name>.mw.ts` |
| `-p, --provider` | Create a service provider | `src/container/services/<Name>ServiceProvider.ts` |
| `-e, --event` | Create an event | `src/container/events/<Name>Event.ts` |

Multiple flags can be combined in a single command:

```bash
chasi create User -c -m
# creates UserController.ts and User.ts
```

### Initialize boilerplate in the current directory

```bash
chasi init
```

## Commands

| Command | Alias | Description |
|---------|-------|-------------|
| `create-chasi-ts` | `create` | Bootstrap a new chasi-ts project |
| `chasi create <name>` | | Scaffold files inside an existing project |
| `chasi init` | | Initialize chasi boilerplate in the current directory |

## Requirements

- Node.js 18+
- Git (required for project scaffolding)

## License

ISC
