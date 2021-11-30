# Saber Foundations template

Converting Saber foundation's website to new design from Adobe XD design spec

## Prerequisites

- Node JS @latest (Preferable)
- Yarn @latest (Preferable) (**NPM causes issues, instead use yarn exclusively**)

## Run Locally

**Clone the project**

```bash
  git clone https://github.com/bs-production/saber-template.git project-name
```

**Go to the project directory**

```bash
  cd project-name
```

**Install dependencies**

```bash
  yarn
```

**Start the dev server**

```bash
  yarn start
```

**Reset cache**

```bash
  yarn run clean
```

## Getting distributable files

**[NOTE]**

> The borders and before borders file needs to build manually

To retrieve the compiled html and minified CSS and Javascript:

```bash
  npm build
```

_or_

```bash
  yarn build
```

## Tech Stack

**Client:** ParcelJS, Tailwind CSS, Sass
