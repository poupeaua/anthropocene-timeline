# Anthropocene Timeline

The objective of this website is to share the timeline of the Anthropocene.

## Sections

This website is divided into different sections :

- **Home**: The timeline
- **About**: General information about the project
- **Sources**: References used in the timeline
- **Contributing**: How to contribute to the project

## Technical Details

### Local development

1. For quick development and see changes as you code:

This is to update the main.css based on what is changed in tailwind.
```
npx @tailwindcss/cli -i ./assets/css/main.css -o ./static/css/main.css --minify --watch
```

This is to update the website in Hugo in realtime:
```
make local
```  

2. For final tests to verify how it will be rendered in production:

```
npm build run
```

```
make preprod
```

3. To test a new Hugo version in an isolated Docker environment to check for eventual breaking changes before updating Hugo for good:

```
make latest
```

### CI/CD

You just have to push the code in master. Two Github Actions CI/CD pipelines take care of the rest:

1. A first pipeline installs hugo in the expected version, builds the website and pushes the content of website in the branch called *gh-pages*.

2. A second pipeline executes then based on the automatic push on the *gh-pages*. This one deploys for real the website in production and make it available online.

## Tech Stack

- Hugo
- TailwindCSS
- Preline UI

### Hugo Version

See all the release of Hugo framework here: https://github.com/gohugoio/hugo/releases

hugo version currently used: 
hugo v0.152.2+extended+withdeploy darwin/arm64 BuildDate=2025-10-24T15:31:49Z VendorInfo=brew

### UI Components Library

We are now using Preline UI.
It uses Tailwind behind the scene.

https://preline.co/docs/frameworks-hugo.html