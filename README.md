
# RapidQuest

This repo contains the assignment assigned to my by `RapidQuest` for the role of intern.

The given user interface is designed using the following technologies:
- `React` (Javascript library)
- `Vite` Template (Optimization and fast loading)
- `HTML5`
- `CSS` (Customized CSS)
- `SVGs` (Images and Icons)
- `Recharts` (Graphs and Charts), etc.

It is `Responsive` and suitable as required in the given assignment. The responsiveness is added by using the media query syntax in CSS.

### Some Glimpses of UI 

- The full-fledged frontend UI view
![](https://raw.githubusercontent.com/DevwithVipin/RapidQuest/main/dashboardView/full-screen%20(2).jpg)
This is the whole UI, there may be quite little differences from the given assignment due to font unavailability.

- One of the most complex part of the assignment, the stacked bargraph
![](https://raw.githubusercontent.com/DevwithVipin/RapidQuest/main/dashboardView/bar-graph.jpg)
This stacked bargraph is made using the `recharts` npm library. The data of this graph can be easily managed by API calls to the backend server in future.

- Circular graph is also made using the `recharts` library.
![](https://raw.githubusercontent.com/DevwithVipin/RapidQuest/main/dashboardView/circular-graph.jpg)

- Some more glimpses of the desktop UI
![](https://raw.githubusercontent.com/DevwithVipin/RapidQuest/main/dashboardView/options.jpg)
These input fields are dynamic and on changing the bar will result in the change of data. This is done using the `useState` hook.

- Mobile view
![](https://raw.githubusercontent.com/DevwithVipin/RapidQuest/main/dashboardView/mobile-view1.jpg)
![](https://raw.githubusercontent.com/DevwithVipin/RapidQuest/main/dashboardView/profile-section.jpg)

### Getting Started

To use this code on your device, follow some easy steps mentioned below:
- Clone the github repo
```
git clone https://github.com/DevwithVipin/RapidQuest.git
```

- Then move into the cloned git repository
```
cd RapidQuest
```

- Now install the dependencies using `npm`
```
npm install
```

- Finally, run the code using the npm script
```
npm run dev
```

On the localhost and port number 2173, this frontend UI can be accessed.

_NOTE: Some SVG images and font style can differ from the original UI. This was the case of usavailability of proper icons and font styles._

