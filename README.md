# Playground User Manual

The Playground provides a way to use our Embedding SDK right away.

## Getting Started

### Use Demo Dossiers

To start, you can use the demo dossier to explore the capabilities of our Embedding SDK. You can also choose your dossier instead by opening the dossier in Library and copying the URL.

After selecting a dossier, you will see the code editor with some default HTML code, the operations menu with Embedding SDK operations to the left, the preview panel with the embedded dossier towards the bottom, and the events panel to the top right.

![Selecting Dossier](./images/select-demo-dossier.gif)

### Use Your Dossier

You can also use your dossier by entering your dossier URL after selecting _Your Dossier_ tab.

![Use Your Dossier](./images/use-your-dossier.gif)

## Interacting with Playground

### Drag and Drop

To interact with our SDK, drag and drop an operation from the left into the code editor. If you are unsure what an operation does, hover over the tooltip and press learn more to be linked to the documentation. A code snippet will be generated in the editor that reflects the operation. You can press "Run code" button or the shortcut keys to execute the code and see the results loaded in the preview panel.

Note: Make sure to drag operations to the appropriate location in code. Operations that need to be changed before a dossier is loaded should be dragged before it is loaded in code. Operations that need the dossier to be loaded first should be dragged after it is loaded in code. See the comments in the code editor for more details.

![Drag and drop](./images/drag-and-drop.gif)

### Manually Edit Code

Once you get familiar with the SDK, you can also directly modify the code in the editor without needing to drag and drop any operations. The editor accepts code in HTML, however be wary that modifications to the code may also require manual changes to the drag and drop code afterward.

![Manually Edit Code](./images/manually-edit-code.gif)

### Resize or Collapse Panels

You can resize or collapse each panel of the Playground as you like. When hovering over the gap between panels, you will see a blue line indicating that you can drag and resize the panels. There is also a button to collapse the panel if you don't need it.

![Resize Panel](./images/resize-panel.gif)

![Collapse Panel](./images/collapse-panel.gif)

### Observe Events and Logs in Event Panel

Whenever you interact with the embedded dossier, the events fired by the interactions will be captured by the event handler and logged in the event panel. These events can be changing pages, applying filters, switching panel stacks, and more.

Note: The event handler looks for the embedded dossier by the name `dossier`. If you change the default code, make sure to keep the embedded dossier object under that name if you want the event handler to catch it.

![Switch page event](./images/switch-page-event.gif)

### Observe Logs in Log Panel

For operations that give output, you can use `console.log(ANYTHING_YOU_WANT_TO_LOG)` to see it in the console or use developer tools provided by your browser. It will also show errors that arise either in syntax or code execution.

![console example](./images/console.gif)

### Light / Dark Modes

To switch between light and dark modes, you can click on the toggle on the top right corner, which has a sun or moon.

![Light and Dark MOdes](./images/light-and-dark-modes.gif)

### Shortcuts

### Run code

- Windows or Linux: `Ctrl + s`
- macOS: `Command + s`

## FAQ

### How do I find a particular operation?

You can use the search bar to find the operation by name.

### How do I save the code?

The code is automatically saved locally to your browser. As long as you don't clear your local storage, it will be saved.

### How do I select another dossier after I picked one already?

Press the "Start over" button on the navigation bar.

### How can I use this code in my application?

You can copy the entire HTML code in the editor, make modifications to suit your needs, and use it directly as your HTML file in your application.

### How can I revert my changes after making some code error?

All default key commands still work. You can do `Ctrl + z` or `Command + z` to undo your most recent change.

### Where can I find more information about each operation?

When you hover over the operations, you will see an info icon. When you hover over the info icon, you will see a tooltip with a "Learn More" link. By clicking the "Learn More" link, you will be redirected to the specific page of the Embedding SDK documentation, which contains more information about the operation you are interested in.
