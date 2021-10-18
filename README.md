# Urban Booker
## Getting Started

To install dependencies:

```bash
npm install
```

To run the development server:

```bash
npm run dev
```

Open [http://localhost:4555](http://localhost:4555) with your browser to see the result, select a slot, and run through the whole process.

To run unit tests:

```bash
npm run test
```

To run cypress integration tests:

```bash
npm run cypress:open
```

## Testing Considerations

After starting the tests setup with testing-libraray/react, I realised that testing the implementation details of components
with RTL (testing-library/react) sometimes may be too much of an overkill, and so came to the realization that cypress integration tests may be a better bet.
The good thing with the integration tests is that at one glance, you can see the result of user interactions on elements/ctas on the pages and as such follow
through with the whole process.

I have left the unit tests I earlier added and they can still be run with the command specified above.
