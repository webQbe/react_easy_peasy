# React Easy Peasy State Management
- Easy Peasy is a **Wrapper for Redux**
- With Easy Peasy You don't have to use all the Redux code


## Getting Started

1. Download and Install **Node.js**
2. Open project folder in VSCode Integrated Terminal

3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter

4. Update `vite.config.js` file:
    - Add `server` to `defineConfig()`:
        ```
        server: { 
            port: 3000
        }
        ```
        
5. Install dependencies: Open terminal and run `npm install`

6. Install packages:
    ```
    npm i @fortawesome/fontawesome-free easy-peasy
    ```

7. Install **Redux Dev Tools** browser extension
8. Delete: `public/vite.svg`, `src/assets`, `src/index.css`
9. Modify `src/App.jsx` and `src/main.jsx`
10. Run frontend server with: `npm run dev`


## Inspecting with Redux Dev Tools browser extension
1. Open the app
2. Open the extension on the browser: Press **F12** and select **Redux**
3. Select `State` > `Tree` > to see as expandable `todos` 

### Toggle Action
1. Click on a Todo `<span>`
2. Click on triggered action `@action.toggle`
3. Select `Diff` > `Tree` > to see as expandable `todos` 
4. Expand the item inside `todos` item to see:
    - `completed(pin): true => false` or
    - `completed(pin): false => true`



