# Vivre Insurance: A Modern Insurance Experience Platform (WIP)

![Days](https://img.shields.io/static/v1?label=Working-Days&message=3&color=blue)
![Status](https://img.shields.io/static/v1?label=Done-Status&message=100%&color=green)
## 🚀 Overview

This project is a sophisticated, modern web application for **Vivre Insurance**, designed to showcase a proactive, end-to-end customer journey. Built with React, TypeScript, and Styled-Components, it demonstrates how to deliver tailored, seamless experiences that drive higher conversation and loyalty in the insurance industry.

The application is built around a series of demo scenarios that take a user from an anonymous visitor to a loyal, multi-policy customer, leveraging personalization, AI, and automation.

---

## Core Technologies

* **React:** For building a dynamic, component-based user interface.
* **TypeScript:** For robust, scalable, and maintainable code.
* **Styled-Components:** For creating an elegant and themeable design system.
* **React Router:** For seamless client-side navigation.
* **Framer Motion:** For sophisticated, modern animations and user interactions.

That's it. 👌🏻

---

## How to make custom React TS code work for a DX site

### Take care of your React app styles..

* Take a look at the **[globalStyles.ts](src/styles/globalStyles.ts)**. Adding this following rule will protect the app from the DX styles.

```
* {
        box-sizing: content-box;
  }
  ```

#### Also, it's needed that Buttons, Selectors and Pages are always declaring this prop

- ``` box-sizing: border-box;```



### Settings modal

1. Look at the **[dx](src/utils/dx)** folder. That's where the settings modal its allocated. This allows personalization for the driver to choose the preferred story flow.
2. That settings modal it's used in the **[DashboardPage.tsx](src/pages/DashboardPage.tsx)**. Take a look at the way it's used, precisely at the added class.
3. Mandatory file for the Settings modal to show just in edit mode: **[index.css](src/index.css)**
4. In the **[App.tsx](src/App.tsx)** you will be able to see how to detect if localhost and also that we are showing this as a Single App, no Browser Router involved. Yet we did not find a way to use it.

### DX config
1. Look at the **[package.json](package.json)** folder. This is proprietary for DX use.
```
  "scripts": {
    {...normal react scripts...}
    "dx-deploy-app": "dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName \"$npm_package_config_dxclient_wcmContentName\" -wcmSiteArea \"$npm_package_config_dxclient_wcmSiteArea\" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot \"$npm_package_config_dxclient_contentRoot\" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port",
    "dx-deploy-app-win": "dxclient deploy-scriptapplication push -dxUsername %dxUsername% -dxPassword %dxPassword% -wcmContentName \"%npm_package_config_dxclient_wcmContentName%\" -wcmSiteArea \"%npm_package_config_dxclient_wcmSiteArea%\" -mainHtmlFile %npm_package_config_dxclient_mainHtmlFile% -contentRoot \"%npm_package_config_dxclient_contentRoot%\" -dxProtocol %npm_package_config_dxclient_protocol% -hostname %npm_package_config_dxclient_hostname% -dxPort %npm_package_config_dxclient_port%",
    "dx-deploy-app-use-env": "dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName \"$npm_package_config_dxclient_wcmContentName\" -wcmSiteArea \"$npm_package_config_dxclient_wcmSiteArea\" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot \"$npm_package_config_dxclient_contentRoot\" -dxProtocol $dxProtocol -hostname $dxHostname -dxPort $dxPort",
    "dx-deploy-app-use-env-win": "dxclient deploy-scriptapplication push -dxUsername %dxUsername% -dxPassword %dxPassword% -wcmContentName \"%npm_package_config_dxclient_wcmContentName%\" -wcmSiteArea \"%npm_package_config_dxclient_wcmSiteArea%\" -mainHtmlFile %npm_package_config_dxclient_mainHtmlFile% -contentRoot \"%npm_package_config_dxclient_contentRoot%\" -dxProtocol %dxProtocol% -hostname %dxHostname% -dxPort %dxPort%"
  },
"config": {
    "dxclient": {
      "wcmContentName": "Dashboard",
      "wcmSiteArea": "Script Application Library/Script Portlet Applications",
      "mainHtmlFile": "index.html",
      "contentRoot": "./build",
      "protocol": "https",
      "hostname": "vivre.woodburn.digital",
      "port": "443"
    }
  },
  "homepage": "./",
  "name": "dashboard"
```
* Things that has to be changed for other DX sites:
  - ```hostname```
  - ```name```
  - ```wcmContentName```

### How to deploy it directly

1. npm i
2. npm run build
3. dxUsername=wpsadmin dxPassword=wpsadmin npm run dx-deploy-app


Coded with ❤️ by Juan Patricio Doyle ✨2025
