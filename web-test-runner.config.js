import { legacyPlugin } from '@web/dev-server-legacy'
import { esbuildPlugin } from '@web/dev-server-esbuild'
import { playwrightLauncher } from '@web/test-runner-playwright'

const browsers = {
  chromium: playwrightLauncher({ product: 'chromium' }),
  firefox: playwrightLauncher({ product: 'firefox' }),
  webkit: playwrightLauncher({ product: 'webkit' }),
}

const noBrowser = browser => {
  throw new Error(`No browser configured named '${browser}'; using defaults`)
}

let commandLineBrowsers
try {
  commandLineBrowsers = process.env.BROWSERS?.split(',').map(
    browser => browsers[browser] ?? noBrowser(browser)
  )
} catch (error) {
  console.warn(error)
}

// https://modern-web.dev/docs/test-runner/cli-and-configuration/
export default {
  rootDir: '.',
  files: ['./src/**/*.spec.ts'],
  nodeResolve: true,
  preserveSymlinks: true,
  browsers: commandLineBrowsers ?? Object.values(browsers),
  testFramework: {
    // https://mochajs.org/api/mocha
    config: {
      ui: 'tdd',
    },
  },
  plugins: [
    esbuildPlugin({ ts: true, loaders: { '.scss': 'text' } }),
    // Detect browsers without modules (e.g. IE11) and transform to SystemJS
    // (https://modern-web.dev/docs/dev-server/plugins/legacy/).
    legacyPlugin({
      polyfills: {
        webcomponents: true,
        // Inject lit's polyfill-support module into test files, which is required
        // for interfacing with the webcomponents polyfills
        custom: [
          {
            name: 'lit-polyfill-support',
            path: 'node_modules/lit/polyfill-support.js',
            test: "!('attachShadow' in Element.prototype) || !('getRootNode' in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force",
            module: false,
          },
        ],
      },
    }),
  ],
}
